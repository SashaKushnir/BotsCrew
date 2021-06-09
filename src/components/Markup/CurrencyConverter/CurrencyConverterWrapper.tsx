import React, {ChangeEvent} from "react";
import {CurrencyConverter} from "./CurrencyConverter";
import {Button, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {exchange} from "../../../redux/currency/currencyT";
import s from './CurrencyConverterWrapper.module.css'


export const CurrencyConverterWrapper = () => {
    const d = useDispatch()
    const exchangeRes = useSelector((state: RootState) => state.currencyR.exchangeRes)
    const currencies = useSelector((state: RootState) => state.currencyR.currencyArr)
    const [currency1, setCurrencyState1] = React.useState<string>(currencies ? currencies[0].id : "");
    const [currency2, setCurrencyState2] = React.useState<string>(currencies ? currencies[0].id : "");
    const [numInput, setNumInput] = React.useState("");
    const inputHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value.length) {
            setNumInput("")
        } else if ((e.target.value.toString().match("^[1-9][0-9]*$"))) {
            setNumInput(e.target.value)
        }
    }
    const calculate = () => {
        if (currency1 && currency2 && numInput) {
            d(exchange(currency1, currency2, numInput))
        }
    }
    return <div className={s.totalWrapper}>
        <Grid container>
            <Grid item={true} xs={12} sm={6} md={3}>
                <CurrencyConverter currencies={currencies} state={currency1} setState={setCurrencyState1}/>
            </Grid>
            <Grid item={true} xs={12} sm={6} md={3}>
                <TextField
                    id="filled-number"
                    label="Number"
                    value={numInput.toString()}
                    onChange={inputHandleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item={true} xs={12} sm={6} md={3}>
                <CurrencyConverter currencies={currencies} state={currency2} setState={setCurrencyState2}
                                   target={true}/>
            </Grid>
            <Grid item={true} xs={12} sm={6} md={3}>
                <Button onClick={calculate} variant={"outlined"}>
                    calculate
                </Button>
            </Grid>
        </Grid>
        <div className={s.toCenter}>
            {exchangeRes && <Typography>{exchangeRes}</Typography>}
        </div>
    </div>
}
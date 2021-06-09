import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {CurrencyItem} from "./CurrencyItem";
import {ControlAllCurrencies} from "./ControlAllCurrencies";
import {Button} from "@material-ui/core";
import {exchangeAll} from "../../../redux/currency/currencyT";

export const AllCurrencies = () => {
    const currenciesArray = useSelector((state: RootState) => state.currencyR.currencyArr)
    const [state, setState] = useState("")
    const d = useDispatch()

    const showRates = () => {
        d(exchangeAll(state, currenciesArray?currenciesArray:[]))
    }
    return <div>
        <div>
            <ControlAllCurrencies state={state} setState={setState} currencies={currenciesArray}/>
        </div>
        <Button variant={"outlined"} onClick={showRates}>Show rates</Button>
    </div>
}

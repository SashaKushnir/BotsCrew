import React, {ChangeEvent, useEffect, useState} from "react";
import {FormControl, FormHelperText, InputLabel, makeStyles, NativeSelect} from "@material-ui/core";
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {CurrencyItemType} from "../../../redux/currency/currencyR";

interface CurrencyConverterProps {
    target?: boolean
    state: string
    setState: (state: string) => void
    currencies?: Array<CurrencyItemType>
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({target,state,setState, currencies}) => {

    // const [curr1, setCurr1] = useState("")
    // const [curr2, setCurr2] = useState("")

    const handleChange = (event: ChangeEvent<{name:string, value: string}>) => {
        setState(event.target.value)
        if(!target)
            localStorage.setItem("currency1", JSON.stringify(event.target.value))
        else
            localStorage.setItem("currency2", JSON.stringify(event.target.value))
    }

    useEffect(() => {
        if(!target) {
            setState(JSON.parse(localStorage.getItem("currency1") || ""))
        } else {
            setState(JSON.parse(localStorage.getItem("currency2") || ""))
        }
    },[])

    return <div>
        <FormControl>
            {!(target) ? <InputLabel htmlFor="age-native-helper">currency</InputLabel>:
            <InputLabel htmlFor="age-native-helper">target currency</InputLabel>}
            <NativeSelect
                value={state}
                onChange={handleChange}
                inputProps={{
                    id: 'age-native-helper',
                }}
            >
                <option aria-label="None" value="" />
                {currencies?.map((currencyI, index) => {
                    return <option key={index} value={currencyI.id}>
                        {currencyI.id}
                    </option>
                })}
            </NativeSelect>
            {!(target)?<FormHelperText>Select currency u want to compare</FormHelperText>:
                <FormHelperText>Currency u want to compare with</FormHelperText>}
        </FormControl>
    </div>
}
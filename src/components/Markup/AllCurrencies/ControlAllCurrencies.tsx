import {FormControl, FormHelperText, InputLabel, NativeSelect} from "@material-ui/core";
import React, {ChangeEvent} from "react";
import {CurrencyItemType} from "../../../redux/currency/currencyR";

interface ControlAllCurrenciesProps {
    state: string
    setState: (state: string) => void
    currencies?: Array<CurrencyItemType>
}

export const ControlAllCurrencies: React.FC<ControlAllCurrenciesProps> = ({state,setState, currencies}) => {

    const handleChange = (event: ChangeEvent<{name:string, value: string}>) => {
        setState(event.target.value)
        localStorage.setItem("all_currency", JSON.stringify(event.target.value))
    }
        return <FormControl>
     <InputLabel htmlFor="age-native-helper">currency</InputLabel>
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
    <FormHelperText>Select currency</FormHelperText>
    </FormControl>
}
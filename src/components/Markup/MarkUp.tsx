import React, {useEffect} from "react";
import {Header} from "./Header";
import {Content} from "./Content";
import {useDispatch} from "react-redux";
import {getFullListOfCurrencies} from "../../redux/currency/currencyT";
import {Typography} from "@material-ui/core";
import {currencyA} from "../../redux/currency/currencyA";

export const Markup = () => {
    const d = useDispatch()
    const currenciesLS = JSON.parse(localStorage.getItem("currencies") || "[]")
    const loc = window.location.href
    useEffect(() => {
        if(!currenciesLS)
        d(getFullListOfCurrencies())
        else
            d(currencyA.setCurrenciesArr(currenciesLS))
    },[])
    return <div>
        <Header currentLocation={loc}>
            {loc.includes("/content/all_currencies") ? <Typography component={'span'}>
                All currencies header
            </Typography>: <Typography component={'span'}>
                Currency counter header
            </Typography>}
        </Header>
        <Content/>
    </div>
}
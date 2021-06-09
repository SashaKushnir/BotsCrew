import React from "react";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import {AllCurrencies} from "./AllCurrencies/AllCurrencies";
import {CurrencyConverterWrapper} from "./CurrencyConverter/CurrencyConverterWrapper";

export const Content = () => {
    const {url} = useRouteMatch()

    return <div>
        <Switch>
            <Redirect exact from={url} to={`${url}/all_currencies`}/>
            <Route path={`${url}/all_currencies`} render={() => <AllCurrencies/>}/>
            <Route path={`${url}/currency_converter`} render={() => <CurrencyConverterWrapper/>}/>
            <Route path={'*'} render={() => <div>Empty Link</div>}/>
        </Switch>
    </div>
}
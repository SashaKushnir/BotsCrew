import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import {Redirect, Route, Switch } from 'react-router-dom';
import {Markup} from "./components/Markup/MarkUp";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Switch>
                    <Redirect exact from={'/'} to={'/content'}/>
                    <Route path={'/content'} render={() => <Markup/>}/>
                    <Route path={'*'} render={() => <div>Empty link</div>}/>
                </Switch>
            </div>
        </Provider>
    );
}

export default App;

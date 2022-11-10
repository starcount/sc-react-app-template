import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import "./styles/styles.css";

import {AuthContainer} from "./containers";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContainer>
                <App />
            </AuthContainer>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

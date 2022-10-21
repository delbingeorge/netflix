import React from "react";
import ReactDOM from "react-dom/client";
import Favicon from "react-favicon";
import netflixlogo from "../src/images/logo/netflixlogo.png";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Favicon url={netflixlogo} />
        <App />
    </React.StrictMode>
);

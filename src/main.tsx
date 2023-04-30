// ** React imports
import React from "react";
import ReactDOM from "react-dom/client";

// ** Third party packages
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {  BrowserRouter } from "react-router-dom";

// ** Components import
import App from "./App";
import theme from "./theme";

// ** Styles import
import "./index.css";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <BrowserRouter >
                <App/>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);

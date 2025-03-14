import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./components/ui/provider";
import { store } from "./store/storeRedux";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

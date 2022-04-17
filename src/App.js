import React from "react";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </AuthProvider>
  );
}

export default App;

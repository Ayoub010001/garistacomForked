import { useState } from "react";
// import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import Login from "./authentification/page";
import Context from "./context/Context";
import { LoginProvider } from "../actions/Authentification/LoginProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient } from "react-query";
function App() {

  const queryClient = new QueryClient()
  return (
    <>
    {/* <Context> */}
        <LoginProvider>
          <Toaster />
          <RouterProvider router={router}></RouterProvider>
        </LoginProvider>
    {/* </Context> */}

    </>
  );
}

export default App;

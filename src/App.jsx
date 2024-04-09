import { useState } from "react";
// import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";
import Login from "./authentification/page";
import Context from "./context/Context";

function App() {
  return (
    <>
    {/* <Context> */}
<RouterProvider router={router}></RouterProvider>
    {/* </Context> */}

    </>
  );
}

export default App;

import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
    const { user } = useContext(Context);
    return (

        <
        BrowserRouter >
        <
        Topbar / >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route> <
        Route exact path = "/register" > { user ? < Home / > : < Register / > } <
        /Route> <
        Route exact path = "/login" > { user ? < Home / > : < Login / > } <
        /Route> <
        Route exact path = "/write" > { user ? < Write / > : < Register / > } <
        /Route> <
        Route exact path = "/settings" > { user ? < Settings / > : < Register / > } <
        /Route> <
        Route exact path = "/post/:postId" >
        <
        Single / >
        <
        /Route>

        <
        /Switch>

        <
        /BrowserRouter>

    )


}

export default App;
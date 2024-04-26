import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../view/home";
import Main from "../view/main";
import Membership from "../view/Membership";
import FindUsers from "../view/findusers";

class AppRouter extends React.Component{
    render(){
        return (
        // <BrowserRouter>
        <Routes>
            <Route path="" element={<Main />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/findusers" element={<FindUsers />} />
        </Routes>
        // </BrowserRouter>
        );
    }

}

export default AppRouter;
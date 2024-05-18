import React from "react";
import { Outlet } from "react-router-dom";

const Template = ({children}) => {

    return <div className="template">
            <Outlet></Outlet>
    </div>
}

export default Template;
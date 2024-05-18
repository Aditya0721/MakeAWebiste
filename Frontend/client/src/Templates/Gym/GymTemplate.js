import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const GymTemplate = ()=>{

    const location = useLocation();
    const navigate = useNavigate();

    return(<div className="gym-template">
        <div className="gym-header">
            Here the header will be shown
        </div>
        <div className="gym-content">
            Here the content will be shown
        </div>
        <div className="gym-footer">
            Here the Footer will be shown
        </div>
    </div>)
}

export default GymTemplate
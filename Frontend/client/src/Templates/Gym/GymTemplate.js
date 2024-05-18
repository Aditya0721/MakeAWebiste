import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ColorPalette from "../Colorpalette";

const GymTemplate = ()=>{

    const [data, setData] = useState({});
    const [headerBackground, setHeaderBackground] = useState({})
    const params = useParams();

    useEffect(()=>{
        console.log(JSON.parse(atob(params.gymdata)))
        setData(JSON.parse(atob(params.gymdata)))
    },[])

    const handleHeaderBackgroundChange = (color)=>{
        setHeaderBackground(color)
    }
    return(<div className="gym-template">
        <div className="template-styles">
            <ColorPalette onChange={handleHeaderBackgroundChange}/>
        </div>
        <div className="template-content">
            <div className="gym-header" style={{background:headerBackground}}>
                {data.gymName}
            </div>
            <div className="gym-content">
                {data.about}
            </div>
            <div className="gym-footer">
                {data.gymName}
            </div>
        </div>
    </div>)
}

export default GymTemplate
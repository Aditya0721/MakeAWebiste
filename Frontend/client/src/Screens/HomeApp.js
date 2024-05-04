import React from "react";
import { useEffect } from "react";
import {useState} from "react";
import {Button, MenuItem, Select} from '@mui/material'; 
import SiteHeader from "./SiteHeader";

const Home = (props) =>{

    const [value, setValue] = useState("");

    const onSelect = (e)=>{
        setValue(e.target.value);
    }

    useEffect((e)=>{
        console.log(value)
    },[value])

    return(
        <div className="Home">
            <SiteHeader></SiteHeader>
            <div className="content">
                <div className="category-list">
                    <div className="label">Please select a category</div>
                    <div className="list-container">
                        <Select 
                        className="list"
                        id="list-container-select"
                        value={value}
                        onChange={onSelect}>
                            <MenuItem className="list-item" value="Gym">Gym</MenuItem>
                            <MenuItem className="list-item" value="Trnsportaion">Transportaion</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
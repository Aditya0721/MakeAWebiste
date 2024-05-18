import { IconButton, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryLabel from "./CategoryLabel";

const Content = ()=>{

    const [value, setValue] = useState("");
    const navigate = useNavigate();

    let list = new Array(20).fill("upcoming categories");
    list[0] = "Gym";
    list[1] = "Transportation"
    const onSelect = (category)=>{
        setValue(category);
    }

    const reset = (e)=>{
        setValue("");
    }
    useEffect(()=>{
        console.log(value)
        if(value && value.toLowerCase()!=="upcoming categories"){
            navigate(`/${value.toLowerCase()}-form`);
        }
        else{
            navigate(`/`, {replace:true});
        }
    },[value])

    return <div className="content">
    <div className="category-list">
        <div className="label">Please select a category</div>
        <div className="category-list-container">
            {/* <Select 
            className="category-dropdown"
            id="list-container-select"
            value={value}
            onChange={onSelect}
            MenuProps={{classes:{paper:"select-list-paper", list:"select-list"}}}
            IconComponent={(props)=><KeyboardArrowDownIcon {...props}></KeyboardArrowDownIcon>}
            >
                <MenuItem className="list-item" value="Gym">Gym</MenuItem>
                <MenuItem className="list-item" value="Transportaion">Transportaion</MenuItem>
            </Select>
            <IconButton className="clear-button" onClick={reset}>
                <ClearIcon className="clear-icon"></ClearIcon>
            </IconButton> */}
            {list.map((c, key)=>{
                return <CategoryLabel key={key} category={c.toUpperCase()} onSelect={onSelect}></CategoryLabel>;
            })}
        </div>
    </div>
</div>
}

export default Content
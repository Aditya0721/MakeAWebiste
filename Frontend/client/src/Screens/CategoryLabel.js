import React from "react";
import { colors } from "./Colors";
import { Chip } from "@mui/material";

const CategoryLabel = ({category, onSelect}) =>{

    const colorSelect = ()=>{
        return colors[Math.floor(Math.random() * colors.length)];
    }
    const color = colorSelect();
    return <Chip label={category} className="category-label" style={{color:"white", border:`2px solid ${color}`, background:color}} onClick={()=>onSelect(category)}>
        {/* <span className="label">
            {category}
        </span> */}
    </Chip>
}

export default CategoryLabel;
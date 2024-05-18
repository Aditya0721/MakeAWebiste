import { WidgetsOutlined } from "@mui/icons-material";
import { Box, Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../Screens/Colors";

const ColorPalette = (props)=>{
    const [open, setOpen] = useState(false);

    const toggleDrawer = ()=>{
        setOpen(!open);
    }
    return(<>
        <Button onClick={toggleDrawer}>
            <WidgetsOutlined/>
        </Button>
        <Drawer open={open} anchor={"left"} onClose={toggleDrawer}>
            <div className="color-palette">
                {colors.map((c, key)=>{
                    return <div className="color-box" key={key} style={{background:c}} onClick={()=>{props.onChange(c)}}></div>
                })}
            </div>
        </Drawer>
    </>)
}
export default ColorPalette;
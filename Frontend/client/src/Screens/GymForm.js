import { Button, FormControl, TextField } from "@mui/material"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const GymForm = () =>{
    const [gymData, setGymData] = useState({
        gymName:"",
        owner:"",
        about:"",
    });
    
    const navigate = useNavigate();
    const handleGymData = (e)=>{
        console.log(e.target.name+":"+e.target.value);
        setGymData({...gymData, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e)=>{
        const encodedData = btoa(JSON.stringify(gymData));
        navigate(`/template/gym/${encodedData}`);
    }
    return(<div className="form">
        <FormControl className="form-field">
            <div className="form-label">Gym Name</div>
            <TextField className="form-value" name="gymName" value={gymData["gymName"]} variant="outlined" onChange={handleGymData}/>
        </FormControl>
        <FormControl className="form-field">
            <div className="form-label">Gym Owner</div>
            <TextField className="form-value" name="owner" value={gymData["owner"]} variant="outlined" onChange={handleGymData}/>
        </FormControl>
        <FormControl className="form-field">
            <div className="form-label">About</div>
            <TextField className="form-value" name="about" value={gymData["about"]} variant="outlined" onChange={handleGymData}/>
        </FormControl>
        <Button className="create-button" onClick={handleSubmit}>
            Create a Gym website
        </Button>
    </div>)
}

export default GymForm
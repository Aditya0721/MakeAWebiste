import React, { useEffect } from "react";
import SiteHeader from "./SiteHeader";
import Content from "./Content";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Home = (props) =>{

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
      console.log(location)
    },[location])
    
    const handleScroll = ()=>{
      var header = document.getElementsByClassName("title")[0];

      // Get the offset position where the header becomes sticky
      var sticky = header?.offsetTop;
      
      if(header){
        if (window.event.srcElement.scrollTop  > sticky) {
          header.classList.add("sticky");
        } 
        else {
            header.classList.remove("sticky");
        }
      }
    }
  
    return(
        <div className="Home" onScroll={handleScroll}>
            <SiteHeader></SiteHeader>
            <Outlet></Outlet>
        </div>
    )
}

export default Home
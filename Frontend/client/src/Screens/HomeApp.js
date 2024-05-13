import React, { useEffect } from "react";
import SiteHeader from "./SiteHeader";
import Content from "./Content";
import { Outlet, useNavigate } from "react-router-dom";

const Home = (props) =>{

    const navigate = useNavigate();

    useEffect(() => {
      const handleBackButton = (event) => {
        // Prevent the default back button behavior
        console.log("back button clicked");
        event.preventDefault();
        // Programmatically navigate to the previous route
        navigate(-1);
      };
  
      // Add event listener for the popstate event
      window.addEventListener('popstate', handleBackButton);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('popstate', handleBackButton);
      };
    }, [navigate]);
    
    return(
        <div className="Home">
            <SiteHeader></SiteHeader>
            <Outlet></Outlet>
        </div>
    )
}

export default Home
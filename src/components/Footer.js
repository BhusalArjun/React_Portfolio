import React from "react";

// import components
import GotoTop from "./GotoTop";

const Footer = () => {
    

    const getDate = new Date();
    const getYear = getDate.getFullYear();

    return (
        <>
            <GotoTop />
            <footer className="footer">
                <div className="container">
                    <p>Copyright {getYear} | All Rights Reserved Arjun Bhusal</p>
                    
                </div>
            </footer>
        </>
    )
    
    
}


export default Footer;
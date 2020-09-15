import React from 'react';
import Link from "next/link";
const Footer = () => {
    return(
        <div style={{display:"flex", justifyContent:"center", padding: 20, alignContent:"center", textAlign: "center"}}>
                <div style={{padding: 20,}}>
                    LOGO
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", padding: 20, fontSize:20, fontWeight:"bold" }}>
                    Follow
                    <div>
                        <img src="/instagram.svg" style={{paddingLeft: 5, paddingRight:5}} />
                        <img src="/twitter.svg" style={{paddingLeft: 5, paddingRight:5}}/>
                        <img src="/linkedin.svg" style={{paddingLeft: 5, paddingRight:5}}/>
                        <img src="/youtube.svg" style={{paddingLeft: 5, paddingRight:5}}/>
                        <img src="/face.svg" style={{paddingLeft: 5, paddingRight:5}}/>
                    </div>
                </div>
        </div>
    );
};

export default Footer;

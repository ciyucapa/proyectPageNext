import React from 'react';
import {Container} from "next/app";
import ItemFooter from "./itemFonter";

const Footer = () => {
    return(
        <div style={{ backgroundColor: '#ff637d', paddingTop: 40, paddingBottom: 40, alignContent:"center"}}>
                <Container>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src='/logo.gif' style={{width: 150, height: 150}} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                            <ItemFooter text={'Home'}/>
                            <ItemFooter text={'Services'}/>
                            <ItemFooter text={'About'}/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", fontSize:20, fontWeight:"bold" }}>
                            <span>Follow</span>
                            <div>
                                <img src="/instagram.svg" style={{paddingLeft: 5, paddingRight:5}} />
                                <img src="/twitter.svg" style={{paddingLeft: 5, paddingRight:5}}/>
                                <img src="/linkedin.svg" style={{paddingLeft: 5, paddingRight:5}}/>
                                <img src="/youtube.svg" style={{paddingLeft: 5, paddingRight:5}}/>
                                <img src="/face.svg" style={{paddingLeft: 5, paddingRight:5}}/>
                            </div>
                        </div>
                    </div>
                </Container>
        </div>
    );
};

export default Footer;

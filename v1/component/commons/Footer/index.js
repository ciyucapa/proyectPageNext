import React from 'react';
import Container from "../container";
import ItemFooter from "./itemFonter";

const Footer = () => {
    return(
        <Container>
            <div className="footer-contain contain-footer">
                <div className="footer-logo footer-one">
                    <img src='/logo.gif' className="footer-logo-image" />
                </div>
                <div className="footer-menu footer-two">
                    <ItemFooter text={'Home'}/>
                    <ItemFooter text={'Services'}/>
                    <ItemFooter text={'About'}/>
                </div>
                <div className="footer-red-social footer-there">
                    <span>Follow</span>
                    <div className="footer-box-red-social">
                        <img src="/instagram.svg" className="footer-icon" />
                        <img src="/twitter.svg" className="footer-icon" />
                        <img src="/linkedin.svg" className="footer-icon" />
                        <img src="/youtube.svg" className="footer-icon" />
                        <img src="/face.svg" className="footer-icon" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

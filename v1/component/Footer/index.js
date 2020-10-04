import React from 'react';

import Container from "../commons/container";
import ItemFooter from "./itemFonter";
import {Assets} from "../../resourser";

const Footer = () => {
    return(
        <Container>
            <div className="footer-contain contain-footer">
                <div className="footer-logo footer-one">
                    <img src={Assets.images.logo} className="footer-logo-image" />
                </div>
                <div className="footer-menu footer-two">
                    <ItemFooter text={'Home'}/>
                    <ItemFooter text={'Services'}/>
                    <ItemFooter text={'About'}/>
                </div>
                <div className="footer-red-social footer-there">
                    <span>Follow</span>
                    <div className="footer-box-red-social">
                        <img src={Assets.images.instagram} className="footer-icon" />
                        <img src={Assets.images.facebook} className="footer-icon" />
                        <img src={Assets.images.twitter} className="footer-icon" />
                        <img src={Assets.images.youtube} className="footer-icon" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

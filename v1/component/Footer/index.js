import React from 'react';

import Container from "../commons/container";
import ItemFooter, {LOGO_ICON, FACEBOOK_ICON, FLECHA_DIAGONAL, INSTAGRAM_ICON, TWITTER_ICON, YOUTUBE_ICON,} from "./itemFonter";

const Footer = () => {
    return(
        <Container>
            <div className="footer-contain contain-footer">
                <div className="footer-logo footer-one">
                   <ItemFooter isIcon={LOGO_ICON}/>
                </div>
                <div className="footer-menu footer-two">
                    <ItemFooter text={'Home'} isIcon={FLECHA_DIAGONAL}/>
                    <ItemFooter text={'Services'} isIcon={FLECHA_DIAGONAL}/>
                    <ItemFooter text={'About'} isIcon={FLECHA_DIAGONAL}/>
                </div>
                <div className="footer-red-social footer-there">
                    <span>Follow</span>
                    <div className="footer-box-red-social">
                       <ItemFooter isIcon={FACEBOOK_ICON}/>
                       <ItemFooter isIcon={INSTAGRAM_ICON}/>
                       <ItemFooter isIcon={TWITTER_ICON}/>
                       <ItemFooter isIcon={YOUTUBE_ICON}/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

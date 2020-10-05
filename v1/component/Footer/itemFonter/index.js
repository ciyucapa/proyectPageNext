import PropTypes from 'prop-types';

import {Assets} from "../../../resourser";
import React from "react";

export const FLECHA_DIAGONAL = 'ItemFooter/FLECHA_DIAGONAL';
export const INSTAGRAM_ICON = 'ItemFooter/INSTAGRAM_ICON';
export const FACEBOOK_ICON = 'ItemFooter/FACEBOOK_ICON';
export const TWITTER_ICON = 'ItemFooter/TWITTER_ICON';
export const YOUTUBE_ICON = 'ItemFooter/YOUTUBE_ICON';
export const LOGO_ICON = 'ItemFooter/LOGO_ICON';

const ItemFooter = (props) => {

    const {text, isIcon} = props

    return(
        <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', alignItem: 'center', cursor: 'pointer', fontWeight:'bold', marginTop: 5, marginBottom: 5}}>
            {isIcon === FLECHA_DIAGONAL && (
                <img src={Assets.images.flechaDiagonal} style={{width: 15, height: 15, paddingRight: 10, opacity: 0.5}}/>
            )}
            {isIcon === INSTAGRAM_ICON && (
                <img src={Assets.images.instagram} className="footer-icon" alt={'instagram'}/>
            )}
            {isIcon === TWITTER_ICON && (
                <img src={Assets.images.twitter} className="footer-icon" alt={'twitter'}/>
            )}
            {isIcon === FACEBOOK_ICON && (
                <img src={Assets.images.facebook} className="footer-icon" alt={'facebook'}/>
            )}
            {isIcon === YOUTUBE_ICON && (
                <img src={Assets.images.youtube} className="footer-icon" alt={'youtube'}/>
            )}
            {isIcon === LOGO_ICON && (
                <img src={Assets.images.logo} className="footer-logo-image" alt={'logo'}/>
            )}
            <div style={{color: '#f6f6f6'}}>{text}</div>
        </div>
    );
};

ItemFooter.propTypes = {
    text: PropTypes.string,
    isIcon: PropTypes.bool,
};

ItemFooter.defaultProps = {};

export default ItemFooter;

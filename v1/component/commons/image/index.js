import React from "react";
import PropTypes from 'prop-types';

import {Assets} from "../../../resourser";

export const SANTA_IMAGE = 'ImageField/SANTA_IMAGE';
export const SET_IMAGE = 'ImageField/SET_IMAGE';
export const DORADO_IMAGE = 'ImageField/DORADO_IMAGE';
export const SANTA_TWO_IMAGE = 'ImageField/SANTA_TWO_IMAGE';
export const COLLECTION_IMAGE = 'ImageField/COLLECTION_IMAGE';
export const SET_VARIOUS_IMAGE = 'ImageField/COLLECTION_TWO_IMAGE';
export const CIRCLE_IMAGE = 'ImageField/CIRCLE_IMAGE';
export const GRANDES_IMAGE = 'ImageField/GRANDES_IMAGE';
export const SNOW_IMAGE = 'ImageField/SNOW_IMAGE';
export const SANTA_TRES_IMAGE = 'ImageField/SANTA_TRES_IMAGE';
export const SPIDER_ICON = 'ImageField/SPIDER_ICON';
export const PENGUIN_ICON = 'ImageField/PENGUIN_ICON';
export const ESTRELLA_ICON = 'ImageField/ESTRELLA_ICON';
export const EMAIL_ICON = 'ImageField/EMAIL_ICON';
export const TEXT_ICON = 'ImageField/TEXT_ICON';
export const PASSWORD_ICON = 'ImageField/PASSWORD_ICON';

const ImageField = (props) => {

    const {onClick, isImage, isShowIcon} = props;

    return(
        <div>
            {isImage === SANTA_IMAGE && (
                <img src={Assets.images.imageSanta} style={{width: 200, height:130}} onClick={onClick} alt={"santa"}/>
            )}
            {isImage === SET_IMAGE && (
                <img src={Assets.images.imageCushionSet} style={{width: 200, height:130}} onClick={onClick} alt={"set"}/>
            )}
            {isImage === DORADO_IMAGE && (
                <img src={Assets.images.imageCushionDorado} style={{width: 200, height:130}} onClick={onClick} alt={"dorados"}/>
            )}
            {isImage === SANTA_TWO_IMAGE && (
                <img src={Assets.images.imageSantaNew} style={{width: 200, height:130}} onClick={onClick} alt={"santaTwo"}/>
            )}
            {isImage === COLLECTION_IMAGE && (
                <img src={Assets.images.collection} style={{width: 200, height:130}} onClick={onClick} alt={"collection"}/>
            )}
            {isImage === SET_VARIOUS_IMAGE && (
                <img src={Assets.images.setVarious} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === SANTA_TRES_IMAGE && (
                <img src={Assets.images.santaTres} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === SNOW_IMAGE && (
                <img src={Assets.images.snowScarf} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === GRANDES_IMAGE && (
                <img src={Assets.images.grandes} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === CIRCLE_IMAGE && (
                <img src={Assets.images.circle} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === SPIDER_ICON && (
                <img src={Assets.images.spider} className="card-image" alt={"cushion-Spider"} />
            )}
            {isImage === PENGUIN_ICON && (
                <img src={Assets.images.imagePenguin} className="card-image" alt={"cushion-penguin"} />
            )}
            {isImage === ESTRELLA_ICON && (
                <img src={Assets.images.imageCushionStart} className="card-image" alt={"cushion-Star"} />
            )}
            { isImage === TEXT_ICON && (
                <img src={Assets.images.username} style={{opacity:0.5, width: 25, height:25}} alt={"username"}/>
            )}
            { isImage === EMAIL_ICON && (
                <img src={Assets.images.email} style={{opacity:0.5, width: 25, height:25}} alt={"email"}/>
            )}
            { isImage === PASSWORD_ICON &&(
                <img src={!isShowIcon ? Assets.images.visible : Assets.images.visibleHide } onClick={onClick} style={{opacity:0.5, width: 25, height:25}}  alt={"visible"} />
            )}
        </div>
    );
};

ImageField.propTypes = {
    onClick: PropTypes.func,
    isImage: PropTypes.bool.isRequired,
    isShowIcon: PropTypes.bool,
};

ImageField.defaultProps = {};

export default ImageField;

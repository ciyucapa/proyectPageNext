import React from "react";
import PropTypes from 'prop-types';

import {Assets} from "../../../resourser";

export const SANTA_IMAGE = 'ImageField/SANTA_IMAGE';
export const SET_IMAGE = 'ImageField/SET_IMAGE';
export const DORADO_IMAGE = 'ImageField/DORADO_IMAGE';
export const SANTA_TWO_IMAGE = 'ImageField/SANTA_TWO_IMAGE';
export const COLLECTION_IMAGE = 'ImageField/COLLECTION_IMAGE';
export const SET_VARIOS_IMAGE = 'ImageField/COLLECTION_TWO_IMAGE';
export const REDONDO_IMAGE = 'ImageField/REDONDO_IMAGE';
export const GRANDES_IMAGE = 'ImageField/GRANDES_IMAGE';
export const NIEVE_IMAGE = 'ImageField/NIEVE_IMAGE';
export const SANTA_TRES_IMAGE = 'ImageField/SANTA_TRES_IMAGE';
export const SPIDERMAN_ICON = 'ImageField/SPIDERMAN_ICON';
export const PINGUINO_ICON = 'ImageField/PINGUINO_ICON';
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
                <img src={Assets.images.imageCojinSet} style={{width: 200, height:130}} onClick={onClick} alt={"set"}/>
            )}
            {isImage === DORADO_IMAGE && (
                <img src={Assets.images.imageCojinDorado} style={{width: 200, height:130}} onClick={onClick} alt={"dorados"}/>
            )}
            {isImage === SANTA_TWO_IMAGE && (
                <img src={Assets.images.imageSantaNew} style={{width: 200, height:130}} onClick={onClick} alt={"santaTwo"}/>
            )}
            {isImage === COLLECTION_IMAGE && (
                <img src={Assets.images.collection} style={{width: 200, height:130}} onClick={onClick} alt={"collection"}/>
            )}
            {isImage === SET_VARIOS_IMAGE && (
                <img src={Assets.images.setVarios} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === SANTA_TRES_IMAGE && (
                <img src={Assets.images.santaTres} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === NIEVE_IMAGE && (
                <img src={Assets.images.nieveBufanda} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === GRANDES_IMAGE && (
                <img src={Assets.images.grandes} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === REDONDO_IMAGE && (
                <img src={Assets.images.redondo} style={{width: 200, height:130}} onClick={onClick} alt={"collectionTwo"}/>
            )}
            {isImage === SPIDERMAN_ICON && (
                <img src={Assets.images.spiderman} className="card-image" alt={"cojineSpiderman"} />
            )}
            {isImage === PINGUINO_ICON && (
                <img src={Assets.images.imagePinguino} className="card-image" alt={"cojinPinguino"} />
            )}
            {isImage === ESTRELLA_ICON && (
                <img src={Assets.images.imageCojinStart} className="card-image" alt={"cojineStar"} />
            )}
            { isImage === TEXT_ICON && (
                <img src={Assets.images.username} style={{opacity:0.5, width: 25, height:25}} alt={"username"}/>
            )}
            { isImage === EMAIL_ICON && (
                <img src={Assets.images.email} style={{marginLeft: 5, opacity:0.5, width: 25, height:25}} alt={"email"}/>
            )}
            { isImage === PASSWORD_ICON &&(
                <img src={!isShowIcon ? Assets.images.visible : Assets.images.visibleOcultar } onClick={onClick} style={{opacity:0.5, width: 25, height:25}}  alt={"visible"} />
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

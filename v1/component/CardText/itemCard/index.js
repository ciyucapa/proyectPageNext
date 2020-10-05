import React from "react";
import PropTypes from 'prop-types';

import {Assets} from "../../../resourser";

export const SANTA_IMAGE = 'ItemCardText/SANTA_IMAGE';
export const SET_IMAGE = 'ItemCardText/SET_IMAGE';
export const DORADO_IMAGE = 'ItemCardText/DORADO_IMAGE';
export const SANTA_TWO_IMAGE = 'ItemCardText/SANTA_TWO_IMAGE';
export const COLLECTION_IMAGE = 'ItemCardText/COLLECTION_IMAGE';
export const SET_VARIOS_IMAGE = 'ItemCardText/COLLECTION_TWO_IMAGE';
export const REDONDO_IMAGE = 'ItemCardText/REDONDO_IMAGE';
export const GRANDES_IMAGE = 'ItemCardText/GRANDES_IMAGE';
export const NIEVE_IMAGE = 'ItemCardText/NIEVE_IMAGE';
export const SANTA_TRES_IMAGE = 'ItemCardText/SANTA_TRES_IMAGE';

const ItemCardText = (props) => {

    const {onClick, isImage} = props

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
        </div>
    );
};

ItemCardText.propTypes = {
    onClick: PropTypes.func,
    isImage: PropTypes.bool.isRequired,
};

ItemCardText.defaultProps = {
    src: SANTA_IMAGE,
};

export default ItemCardText;

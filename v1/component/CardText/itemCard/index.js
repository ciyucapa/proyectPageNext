import React from "react";
import PropTypes from 'prop-types';

import {Assets} from "../../../resourser";

export const SANTA_IMAGE = 'ItemCardText/SANTA_IMAGE';
export const SET_IMAGE = 'ItemCardText/SET_IMAGE';
export const DORADO_IMAGE = 'ItemCardText/DORADO_IMAGE';
export const SANTA_TWO_IMAGE = 'ItemCardText/SANTA_TWO_IMAGE';

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

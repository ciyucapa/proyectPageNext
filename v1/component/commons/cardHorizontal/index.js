import React from 'react';

import PropTypes from "prop-types";
import ImageField from "../image";

const CardHorizontal = (props) => {

    const {isImage, title, subtitle, text, subtitleTwo, textOne, textTwo, textThree,} = props

    return(
        <div className="box-card" >
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                <ImageField isImage={isImage} alt={'card-image'}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', padding: 10}}>
                <h1 style={{textAlign: 'center'}}>{title}</h1>
                <h3>{subtitle}</h3>
                <span>{text}</span>
                <h3>{subtitleTwo}</h3>
                <span>{textOne}</span>
                <span>{textTwo}</span>
                <span>{textThree}</span>
            </div>
        </div>
    );
};

CardHorizontal.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    subtitleTwo: PropTypes.string.isRequired,
    textOne: PropTypes.string.isRequired,
    textTwo: PropTypes.string.isRequired,
    textThree: PropTypes.string.isRequired,
    isImage: PropTypes.bool.isRequired,
};

CardHorizontal.defaultProps = {};

export default CardHorizontal;

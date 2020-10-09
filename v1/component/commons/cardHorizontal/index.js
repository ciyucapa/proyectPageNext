import React from 'react';
import PropTypes from "prop-types";

import {Assets} from "../../../resourser";

const CardHorizontal = (props) => {

    const {title, subtitle, text, subtitleTwo, textOne, textTwo, textThree,} = props

    return(
            <div className="box-card-horizontal">
                <div className={'caja'}>
                    <div className="caja-uno">
                        <img src={Assets.images.imageSanta} className="image"/>
                    </div>
                    <div className="caja-dos">
                        <h1 className="card-title">{title}</h1>
                        <h3>{subtitle}</h3>
                        <span>{text}</span>
                        <h4>{subtitleTwo}</h4>
                        <span>{textOne}</span>
                        <span>{textTwo}</span>
                        <span>{textThree}</span>
                    </div>
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
};

CardHorizontal.defaultProps = {};

export default CardHorizontal;

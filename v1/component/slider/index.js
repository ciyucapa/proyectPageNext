import React from 'react';

import {Assets} from "../../resourser";
import Container from "../commons/container";

const Slider = () => {
    return(
        <Container>
            <div className="sliderBox">
                <div className="slider">
                    <ul>
                        <li><img src={Assets.images.imageCushionDorado} alt="cushions" /></li>
                        <li><img src={Assets.images.imageCushionGlo} alt="cushions" /></li>
                        <li><img src={Assets.images.imageCushionSet} alt="cushions" /></li>
                        <li><img src={Assets.images.imageSantaNew} alt="cushions" /></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Slider;

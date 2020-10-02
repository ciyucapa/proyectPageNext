import React from 'react';
import Container from "../container";
import {Assets} from "../../../resourser";

const Slider = () => {
    return(
        <Container>
            <div className="sliderBox">
                <div className="slider">
                    <ul>
                        <li><img src={Assets.images.spiderman} alt="cushions" /></li>
                        <li><img src={Assets.images.spiderman} alt="cushions" /></li>
                        <li><img src={Assets.images.spiderman} alt="cushions" /></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Slider;

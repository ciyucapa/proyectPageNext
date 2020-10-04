import React from 'react';
import Container from "../commons/container";
import {Assets} from "../../resourser";

const Slider = () => {
    return(
        <Container>
            <div className="sliderBox">
                <div className="slider">
                    <ul>
                        <li><img src={Assets.images.imageCojinDorado} alt="cushions" /></li>
                        <li><img src={Assets.images.imageCojinesGlo} alt="cushions" /></li>
                        <li><img src={Assets.images.imageCojinSet} alt="cushions" /></li>
                        <li><img src={Assets.images.imageSantaNew} alt="cushions" /></li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default Slider;

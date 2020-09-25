import React from 'react';
import {Container} from "next/app";

const Slider = () => {
    return(
        <div className="sliderBox">
            <Container>
                <div className="slider">
                    <ul>
                        <li><img src="/image1.jpg" alt="cushions" /></li>
                        <li><img src="/image2.jpg" alt="cushions" /></li>
                        <li><img src="/image3.jpg" alt="cushions" /></li>
                        <li><img src="/image1.jpg" alt="cushions" /></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
};

export default Slider;

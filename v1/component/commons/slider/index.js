import React from 'react';
import Container from "../container";

const Slider = () => {
    return(
        <Container>
            <div className="sliderBox">
                <div className="slider">
                    <ul>
                        <li><img src="/image1.jpg" alt="cushions" /></li>
                        <li><img src="/image2.jpg" alt="cushions" /></li>
                        <li><img src="/image3.jpg" alt="cushions" /></li>
                        <li><img src="/image1.jpg" alt="cushions" /></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
};

export default Slider;

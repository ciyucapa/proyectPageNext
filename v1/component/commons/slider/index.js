import React from 'react';
import styles from "../../../../styles/slider.module.css";

const Slider = () => {
    return(
        <div className={styles.sliderBox}>
            <div className={styles.slider}>
                <ul>
                    <li><img src="/image1.jpg" alt="cushions" /></li>
                    <li><img src="/image2.jpg" alt="cushions" /></li>
                    <li><img src="/image3.jpg" alt="cushions" /></li>
                    <li><img src="/image1.jpg" alt="cushions" /></li>
                </ul>
            </div>
        </div>
    )
};

export default Slider;

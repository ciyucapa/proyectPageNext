import React, {useState} from 'react';

import Container from "../commons/container";
import ItemCardText from "./itemCard";
import {SANTA_IMAGE, SET_IMAGE, DORADO_IMAGE, SANTA_TWO_IMAGE} from "./itemCard";

import {Assets} from "../../resourser";
import {isPromise} from "formik";

export const SANTA = 'CardProduct/SANTA';
export const DORADO = 'CardProduct/DORADO';
export const SET = 'CardProduct/SET';
export const SANTA_TWO = 'CardProduct/SANTA_TWO';

const CardProduct = () => {

    const [mostrar, setMostar] = useState(false);
    const [cambiarImagen, setCambiar] = useState(false);
    const [cambiarImagenTwo, setCambiarTwo] = useState(false);
    const [cambiarImagenThere, setCambiarThere] = useState(false);
    const [cambiarImagenFour, setCambiarFour] = useState(false);

    const handleCambiar = () => {
        setCambiar(!cambiarImagen);
        setMostar(!mostrar);
    }
    const handleCambiarTwo = () => {
        setCambiarTwo(true);
        setMostar(true);
    }
    const handleCambiarThere = () => {
        setCambiarThere(true);
        setMostar(true);
    }
    const handleCambiarFour = () => {
        setCambiarFour(!cambiarImagenFour);
        setMostar(!mostrar);
    }


    return(
        <Container>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'center', width: '100%', backgroundColor: 'red',}}>
                <div style={{display:'flex', width: '100%', paddingTop:20, paddingBottom:20, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <img src={Assets.images.imageSanta} className={!mostrar ? 'card-on' : 'card-off'} />
                        {cambiarImagenTwo && mostrar &&(<img src={Assets.images.imageCojinSet} className={'card-on'} />)}
                        {cambiarImagenThere && mostrar &&(<img src={Assets.images.imageCojinDorado} className={'card-on'} />)}
                        {cambiarImagenFour && mostrar &&(<img src={Assets.images.imageCojinDorado} className={'card-on'} />)}
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', padding: 10, width: '50%', backgroundColor: 'white'}}>
                        <h1 style={{textAlign: 'center'}}>COJINES ARTESANALES AL MEJOR ESTILO</h1>
                        <h3>Caracteristicas</h3>
                        <span>Elaborados 100% manualmente, su fabricacion se realiza con tela yersilon, relleno de fibra
                        de poliester siliconada, totalmente antialergicos, no manchan ni se destiñen.
                        </span>
                        <h3>Medidas</h3>
                        <span>30cm x 30cm</span>
                        <span>40cm x 40cm</span>
                        <span>45cm x 45cm</span>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', backgroundColor: 'pink', paddingTop:20, paddingBottom: 20}}>
                    <ItemCardText onClick={handleCambiar} src={SANTA_IMAGE} />
                    <ItemCardText onClick={handleCambiarTwo} src={SET_IMAGE} />
                    <ItemCardText onClick={handleCambiarThere} src={DORADO_IMAGE} />
                    <ItemCardText onClick={handleCambiarFour} src={SANTA_TWO_IMAGE} />
                </div>
            </div>
        </Container>
    );
};

export default CardProduct;

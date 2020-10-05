import React, {useState, useEffect} from 'react';

import Container from "../commons/container";
import ItemCardText from "./itemCard";
import {SANTA_IMAGE, SET_IMAGE, DORADO_IMAGE, SANTA_TWO_IMAGE} from "./itemCard";

import {Assets} from "../../resourser";

export const SANTA = 'CardProduct/SANTA';
export const DORADO = 'CardProduct/DORADO';
export const SET = 'CardProduct/SET';
export const SANTA_TWO = 'CardProduct/SANTA_TWO';

const CardProduct = () => {

    const [cambiarImagen, setCambiar] = useState(false);
    const [ImageTwo, setImage] = useState(false);
    const [cambio, setCambio] = useState(false);
    const [estilo, setEstilo] = useState(false);

    const handleCambiar = () => {
        setCambiar(true);
    }

    const handleImage = () => {
        setImage(true);
        setEstilo(true);
    }

    const handleCmbi = () => {
        setCambio(true);
    }

    return(
        <Container>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'center', width: '100%', backgroundColor: 'red',}}>
                <div style={{display:'flex', width: '100%', paddingTop:20, paddingBottom:20, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <img src={cambiarImagen ? Assets.images.imageCojinSet : Assets.images.spiderman} className={estilo ? 'card-off' :'card-on'} alt={'card-image'}/>
                        {ImageTwo ? <img src={Assets.images.imageSanta} className='card-on'/> : '' }
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
                    <ItemCardText onClick={handleCambiar} isImage={SET_IMAGE} />
                    <ItemCardText onClick={handleImage} isImage={SANTA_IMAGE} />
                    <ItemCardText onClick={handleCmbi} isImage={DORADO_IMAGE} />
                    <ItemCardText isImage={SANTA_TWO_IMAGE} />
                </div>
            </div>
        </Container>
    );
};

export default CardProduct;

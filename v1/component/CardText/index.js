import React, {useState} from 'react';

import Container from "../commons/container";
import ItemCardText, {
    COLLECTION_IMAGE,
    SET_VARIOS_IMAGE,
    GRANDES_IMAGE,
    NIEVE_IMAGE, REDONDO_IMAGE,
    SANTA_TRES_IMAGE
} from "./itemCard";
import {SANTA_IMAGE, SET_IMAGE, DORADO_IMAGE, SANTA_TWO_IMAGE} from "./itemCard";

import {Assets} from "../../resourser";

const CardProduct = () => {

    return(
        <Container>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'center', width: '100%', backgroundColor: 'red',}}>
                <div style={{display:'flex', width: '100%', paddingTop:20, paddingBottom:20, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <img src={Assets.images.setVarios} className='card-on' alt={'card-image'}/>
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
                    <ItemCardText isImage={SET_IMAGE} />
                    <ItemCardText  isImage={SANTA_IMAGE} />
                    <ItemCardText  isImage={DORADO_IMAGE} />
                    <ItemCardText  isImage={SANTA_TWO_IMAGE} />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', backgroundColor: 'pink', paddingTop:20, paddingBottom: 20}}>
                    <ItemCardText isImage={COLLECTION_IMAGE} />
                    <ItemCardText  isImage={SET_VARIOS_IMAGE} />
                    <ItemCardText  isImage={SANTA_TRES_IMAGE} />
                    <ItemCardText  isImage={NIEVE_IMAGE} />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', backgroundColor: 'pink', paddingTop:20, paddingBottom: 20}}>
                    <ItemCardText isImage={GRANDES_IMAGE} />
                    <ItemCardText  isImage={REDONDO_IMAGE} />
                    <ItemCardText  isImage={DORADO_IMAGE} />
                    <ItemCardText  isImage={SANTA_TWO_IMAGE} />
                </div>
            </div>
        </Container>
    );
};

export default CardProduct;

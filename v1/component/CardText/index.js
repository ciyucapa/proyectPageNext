import React, {useState} from 'react';
import Container from "../commons/container";
import {Assets} from "../../resourser";

export const SANTA_IMAGE = 'CardProduct/SANTA_IMAGE'
export const SET_IMAGE = 'CardProduct/SET_IMAGE'

const CardProduct = () => {


    const [cambiarImagen, setCambiar] = useState(false);
    const handleCambiar = () => {
        setCambiar(!cambiarImagen);
    }

    return(
        <Container>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignContent: 'center', width: '100%', backgroundColor: 'red',}}>
                <div style={{display:'flex', width: '100%', paddingTop:20, paddingBottom:20, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'black', padding: 20,}}>
                            <img src={cambiarImagen ? Assets.images.imageSantaNew : Assets.images.imageSanta} style={{width: 600, height:400}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
                        <h1>Cojines</h1>
                        <h3>Caracteristicas</h3>
                        <h3>Caracteristicas</h3>
                        <h3>Caracteristicas</h3>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', backgroundColor: 'pink', paddingTop:20, paddingBottom: 20}}>
                    <img src={Assets.images.imageSantaNew} style={{width: 200, height:130}}/>
                    <img src={Assets.images.imageCojinSet} style={{width: 200, height:130}} onClick={handleCambiar}/>
                    <img src={Assets.images.imageCojinDorado} style={{width: 200, height:130}} onClick={handleCambiar}/>
                    <img src={Assets.images.imageSanta} style={{width: 200, height:130}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', backgroundColor: 'pink', paddingTop:20, paddingBottom: 20}}>
                    <img src={Assets.images.imageSantaNew} style={{width: 200, height:130}}/>
                    <img src={Assets.images.imageCojinSet} style={{width: 200, height:130}} onClick={handleCambiar}/>
                    <img src={Assets.images.imageCojinDorado} style={{width: 200, height:130}} onClick={handleCambiar}/>
                    <img src={Assets.images.imageSanta} style={{width: 200, height:130}}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', backgroundColor: 'pink', paddingTop:20, paddingBottom: 20}}>
                    <img src={Assets.images.imageSantaNew} style={{width: 200, height:130}}/>
                    <img src={Assets.images.imageCojinSet} style={{width: 200, height:130}} onClick={handleCambiar}/>
                    <img src={Assets.images.imageCojinDorado} style={{width: 200, height:130}} onClick={handleCambiar}/>
                    <img src={Assets.images.imageSanta} style={{width: 200, height:130}}/>
                </div>
            </div>
        </Container>
    );
};

export default CardProduct;

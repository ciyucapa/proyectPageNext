import React, {useState} from 'react';
import Link from "next/link";

import Container from "../container";
import ItemNavbar, {HOME_ICON, LOGIN_ICON, REGISTER_ICON, PRODUCT_ICON} from "./itemNavbar";

export default function Navigation () {

    const[mostrarMenu, setMostrar] = useState(false);
    const[cambiarIcono, setIcon] = useState(false);
    const handleMostrar = () => {
        setMostrar(!mostrarMenu);
        setIcon(!cambiarIcono);
    }

    return(
        <Container>
            <div className="box-navbar">
                <div className="contain">
                    <img src="/logo.gif" className="navbar-logo"/>
                    <div>
                        <img src={!cambiarIcono ? "/menuCirculo.png" : "/cerrar.png"} className="col-mf navbar-icon" onClick={handleMostrar}/>
                    </div>
                </div>
                <div className="box-contain-one col-md">
                    <div className="navbar-one">
                        <Link href="/">
                            <a className="navbar-title">Home</a>
                        </Link>
                        <Link href="/productos" >
                            <a className="navbar-title">Product</a>
                        </Link>
                    </div>
                    <div className="navbar-one">
                        <Link href="/login">
                            <a className="navbar-title">Login</a>
                        </Link>
                        <Link href="/register">
                            <a className="navbar-title">Register</a>
                        </Link>
                    </div>
                </div>
                <div className={!mostrarMenu ? "col-mf" : "menu"}>
                    <ItemNavbar title={"Home"} href={"/"} isIcon={HOME_ICON}/>
                    <ItemNavbar title={"Login"} href={"/login"} isIcon={LOGIN_ICON}/>
                    <ItemNavbar title={"Register"} href={"/register"} isIcon={REGISTER_ICON}/>
                    <ItemNavbar title={"Product"} href={"/productos"} isIcon={PRODUCT_ICON}/>
                </div>
            </div>
        </Container>
    );
};

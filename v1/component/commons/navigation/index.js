import React, {useState} from 'react';
import Link from "next/link";

import Container from "../container";

export default function Navigation () {

    const[mostrarMenu, setMostrar] = useState(false);
    const handleMostrar = () => {
        setMostrar(!mostrarMenu);
    }

    return(
        <Container>
            <div className="box-navbar">
                <div className="contain">
                    <img src="/logo.gif" className="navbar-logo"/>
                    <div>
                        <img src="/menuCirculo.png" className="col-mf navbar-icon" onClick={handleMostrar}/>
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
                    <div className="navbar-one menu">
                        <Link href="/login">
                            <a className="navbar-title">Login</a>
                        </Link>
                        <Link href="/register">
                            <a className="navbar-title">Register</a>
                        </Link>
                    </div>
                </div>
                <div className={!mostrarMenu ? "col-mf" : "menu"}>
                    <Link className="col-mf menu-title" href="/"><a>Home</a></Link>
                    <Link className="col-mf menu-title" href="/productos"><a>Product</a></Link>
                    <Link className="col-mf menu-title" href="/login"><a>Login</a></Link>
                    <Link className="col-mf menu-title" href="/register"><a>Register</a></Link>
                </div>
            </div>
        </Container>
    );
};

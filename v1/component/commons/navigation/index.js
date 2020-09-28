import React, {useState} from 'react';
import Link from "next/link";

import Container from "../container";
import ItemNav, {HOME_ICON, LOGIN_ICON, REGISTER_ICON, PRODUCT_ICON} from "./itemNavbar";

const NavBar = () => {

    const[showMenu, setShow] = useState(false);
    const[changeIcon, setChange] = useState(false);

    const handleShow = () => {
        setShow(!showMenu);
        setChange(!changeIcon);
    }

    return(
        <Container>
            <div className="box-navbar">
                <div className="contain">
                    <img src="/logo.gif" alt={"logo-navbar"} className="navbar-logo"/>
                    <div>
                        <img src={!changeIcon ? "/menu.png" : "/close.png"} alt={"icon-menu"} className="col-mf navbar-icon" onClick={handleShow}/>
                    </div>
                </div>
                <div className="box-contain-one col-md">
                    <div className="navbar-one">
                        <Link href="/">
                            <a className="navbar-title">Home</a>
                        </Link>
                        <Link href="/products" >
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
                <div className={!showMenu ? "col-mf" : "menu"}>
                    <ItemNav title={"Home"} href={"/"} isIcon={HOME_ICON}/>
                    <ItemNav title={"Login"} href={"/login"} isIcon={LOGIN_ICON}/>
                    <ItemNav title={"Register"} href={"/register"} isIcon={REGISTER_ICON}/>
                    <ItemNav title={"Product"} href={"/products"} isIcon={PRODUCT_ICON}/>
                </div>
            </div>
        </Container>
    );
};

export default NavBar;

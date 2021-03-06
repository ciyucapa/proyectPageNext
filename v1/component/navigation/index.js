import React, {useState} from 'react';
import Link from "next/link";

import Container from "../commons/container";
import ItemNav, {HOME_ICON, LOGIN_ICON, REGISTER_ICON, PRODUCT_ICON} from "./itemNavbar";
import {Assets} from "../../resourser";
import ImageField, {MENU_ICON} from "../commons/image";

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
                    <img src={Assets.images.logo} alt={"logo-navbar"} className="navbar-logo"/>
                    <div>
                        <ImageField isImage={MENU_ICON} onClick={handleShow} isShowIcon={changeIcon}/>
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

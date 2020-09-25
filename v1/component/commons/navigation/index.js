import React from 'react';
import Link from "next/link";

export default function Navigation () {
    return(
        <nav className="box-navbar">
            <div className="navbar-one">
                <Link href="/">
                    <a><img src='/Sarahistyles.png' style={{width: 80, height: 80}}/></a>
                </Link>
                <Link href="/home">
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
        </nav>

    );
};

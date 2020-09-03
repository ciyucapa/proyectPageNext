import Link from "next/link";
import styles from "../../styles/Navigation.module.css";
import React from "react";

export default function Navigation () {
    return(
        <nav className={styles.box}>
            <div className={styles.boxOne}>
                <Link href="/">
                    <a className={styles.title}>Home</a>
                </Link>
                <Link href="/productos" >
                    <a className={styles.title}>Productos</a>
                </Link>
            </div>
            <div>
                <Link href="../login">
                    <a  className={styles.title}>Login</a>
                </Link>
                <Link href="../registro">
                    <a  className={styles.title}>Registro</a>
                </Link>
            </div>
        </nav>

    );
};

import Link from "next/link";
import styles from "../../../../styles/Navigation.module.css";

export default function Navigation () {
    return(
        <nav className={styles.box}>
            <div className={styles.boxOne}>
                <Link href="/">
                    <a className={styles.title}>Home</a>
                </Link>
                <Link href="/productos" >
                    <a className={styles.title}>Product</a>
                </Link>
            </div>
            <div className={styles.boxOne}>
                <Link href="/login">
                    <a  className={styles.title}>Login</a>
                </Link>
                <Link href="/register">
                    <a  className={styles.title}>Register</a>
                </Link>
            </div>
        </nav>

    );
};

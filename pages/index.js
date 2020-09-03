import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Navigation from "./navigation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weet...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main className={styles.main}>
        <h1>Mente Creativa</h1>
          <section>
              <div>
                  <img src="/desing.png" />
              </div>
              <div>
                    <span>Tu mente es tu rivalidad</span>
              </div>
          </section>
      </main>
      <footer className={styles.footer}>
        <p>Week</p>
      </footer>
    </div>
  );
};

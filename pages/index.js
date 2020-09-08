import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Navigation from "../v1/component/commons/navigation";

const Home = () => {
  return (
    <div className={styles.container}>
        <Navigation/>
      <Head>
        <title> Brilliant Jump...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.tittle}>Brilliant Jump</h1>
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

export default Home;

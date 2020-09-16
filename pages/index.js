import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Navigation from "../v1/component/commons/navigation";
import Slider from "../v1/component/commons/slider";
import CardText from "../v1/component/commons/card/card";
import Footer from "../v1/component/commons/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Brilliant Jump...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navigation/>
      <main className={styles.main}>
          <h1>Brilliant Jump</h1>
          <section>
            <CardText/>
          </section>
          <Slider/>
      </main>
      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;

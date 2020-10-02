import Head from 'next/head';
import Navigation from "../v1/component/commons/navigation";
import Slider from "../v1/component/commons/slider";
import CardText from "../v1/component/commons/card/card";
import Footer from "../v1/component/commons/Footer";

const Home = () => {
  return (
    <div>
      <Head>
        <title> SarahiStyles...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navigation/>
      <main>
          <section>
              <CardText/>
          </section>
          <section>
              <Slider/>
          </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;

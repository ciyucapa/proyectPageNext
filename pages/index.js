import Head from 'next/head';
import Navigation from "../v1/component/navigation";
import Slider from "../v1/component/slider";
import CardText from "../v1/component/card/card";
import Footer from "../v1/component/Footer";

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
              <Slider/>
          </section>
          <section>
              <CardText/>
          </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;

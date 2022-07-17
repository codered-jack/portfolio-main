import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import About from "../components/About";
import Achievements from "../components/Achievements";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MouseCircle from "../components/MouseCircle";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import SelectedCard from "../components/SelectedCard";
import Technology from "../components/Technology";
import Wave from "../components/Wave";
const Home: NextPage = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <div className="cursor-none">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/images/bg.webp" />
      </Head>

      <MouseCircle />
      <ScrollToTop />
      <Navbar />
      <Header />
      <div id="top">
        <div className="fixed w-full h-screen bg-background-pattern bg-cover bg-no-repeat bg-center" />
        <Banner />
        <About />
        <SelectedCard id={id} />
        <Technology />
        <Achievements />
        <Footer />
        <Wave />
      </div>
    </div>
  );
};

export default Home;

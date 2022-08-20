import React from "react";
import About from "../../components/about/About";
import BookNow from "../../components/bookNow/BookNow";
import Slider from "../../components/slider/Slider";
import "./home.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <main>
      <Slider />
      {width > 991 && <BookNow />}
      <About />
    </main>
  );
};

export default Home;

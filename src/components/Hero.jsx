import React from "react";
import Carousel from "./Slider";

const Home = () => {
  const images = ["carousel1.jpg", "carousel2.jpg", "carousel3.jpg"];
  return (
    <>
      <Carousel images={images} autoPlay={false} showButtons={true} />
    </>
  );
};

export default Home;

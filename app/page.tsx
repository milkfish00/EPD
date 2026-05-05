import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import EventRequest from "./components/EventRequest";
import Gallery from "./components/Gallery";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <EventRequest />
    </>
  );
};

export default page;

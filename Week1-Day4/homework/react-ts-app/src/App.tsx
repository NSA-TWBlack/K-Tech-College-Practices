import { useState } from "react";
import LikeButton from "./components/LikeButton";
import Rating from "./components/Rating";
import SlidesWithThumb from "./components/SlidesWithThumb";
import ButtonTabs from "./components/ButtonTabs";
import ButtonAccordtions from "./components/ButtonAccordtions";
import "./App.css";

function App() {
  return (
    <>
      <h1>Homework Session2</h1>
      <LikeButton />
      <Rating />
      <SlidesWithThumb />
      <ButtonTabs />
      <ButtonAccordtions />
    </>
  );
}

export default App;

import React from "react";
import { SliderData } from "../components/SliderData";
import ImageSlider from "../components/ImageSlider";
import ProfileButton from "../components/ProfileButton";


const Main = () => {
  return(
  <div>
    <ProfileButton />
    <ImageSlider slides={SliderData} />
  </div>
  )
};

export default Main;

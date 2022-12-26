import React from 'react'
import ImageSlider from "./ImageSlider";
const c1 ='https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c1.png?raw=true'
const c2 ="https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c2.png?raw=true"
const c3 ="https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c3.png?raw=true"
const c4 ="https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c4.png?raw=true"
const c5 ="https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c5.png?raw=true"

import "./slidermain.css";

export default function MainpageCarosole() {
  const slides = [
    { url:c1 , title: "beach" },
    { url:c2, title: "boat" },
    { url:c3 , title: "forest" },
    { url:c4 , title: "city" },
    { url:c5 , title: "italy" },
  ];
  const containerStyles = {
    width: "75%",
    height: "400px",
    margin:"auto",
  };
  return (
    <>
     <div style={containerStyles}>
        <ImageSlider slides={slides} id="slidermain" />
      </div>

    </>
  )
}
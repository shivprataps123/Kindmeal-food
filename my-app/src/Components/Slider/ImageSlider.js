import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 import { SlideData } from "./SlideData";
// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  console.log(slides);
  
  return (
    <Carousel infiniteLoop>
      {SlideData.map((slide) => {
        return <Image  src={slide.image}  object-fit="cover"
        width="400px" height="400px" borderRadius="0px"  marginTop="20px"/>;
      })}
    </Carousel>
  );
};

export default ImageSlider;

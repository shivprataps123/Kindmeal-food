import Navbar from './Components/Navbar/Navbar';
//import './App.css';

import Home from './Pages/Home'
import AllRoutes from './Components/AllRoutes';
import ImageSlider from './Components/Slider/ImageSlider';
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer/footer';
function App() {
  return (
    <Box className="App">
     
    <Navbar/>
     {/*<ImageSlider/>*/}
      {/* <Home/> */}
       <AllRoutes/> 
     <Footer/>
    </Box>
  );
}

export default App;

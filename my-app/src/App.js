import Navbar from './Components/Navbar/Navbar';
import './App.css';

import Home from './Pages/Home'
import AllRoutes from './Components/AllRoutes';
import ImageSlider from './Components/Slider/ImageSlider';
function App() {
  return (
    <div className="App">
      <Navbar/>
     {/*<ImageSlider/>*/}
      {/* <Home/> */}
       <AllRoutes/> 
     
    </div>
  );
}

export default App;

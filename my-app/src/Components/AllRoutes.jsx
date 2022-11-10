
import {Route,Routes} from 'react-router-dom';
import Login from '../Pages/login';
import Signup from '../Pages/signup';
import Home from '../Pages/Home'
// all the routing using the routing library should be done from here; 

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" 
      element={<Home/>}>
        </Route>
        
        <Route path="/login" 
      element={<Login/>}>
        </Route>
        <Route path="/signUp" 
        element={<Signup/>}>
          
        </Route>
       </Routes>
  )
};

export default AllRoutes;

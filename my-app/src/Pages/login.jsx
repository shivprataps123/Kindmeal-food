import React, { useContext } from 'react';
import {
  Flex,
  Container,
  Alert,
  AlertDescription,
  AlertIcon,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import Footer from '../Components/Footer/footer';
import { AuthContext } from '../Context/AuthContextProvider';
import { useState } from 'react';
import { loginFailureAction, loginSuccessAction } from '../Context/action';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const {state,dispatch}=useContext(AuthContext)
  const [logindetails,setLoginDetails]=useState({
    email:"",
    password:"",
  })
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('red.100', 'gray.700');


  const handleChange=(e)=>{
    const{name,value}=e.target;
    setLoginDetails({...logindetails,[name]:value})
  }

  const handleLogin=()=>{
    axios({
      method:"POST",
      url:"https://reqres.in/api/login",
      data:logindetails,
    })
    .then((res)=>{
      dispatch(loginSuccessAction(res.data.token))
    })
    .catch(()=>{
      dispatch(loginFailureAction)
    })
  }
  // if(state.isAuth){
  //   return <Navigate to='/'/>
  // }
  if(state.isError){
    return (
      <Container 
      width={{
        base:"full",
        sm:"full",
        md:"container.xl",
        lg:"container.lg",
      }}
      centerContent={true}
      >
        <Alert
        status="error"
        py={{base:4,sm:4,md:4,lg:6}}
        my={{base:24,sm:24,md:28,lg:40}}
        px={{base:1,sm:1,md:4,lg:6}}
        >
        <AlertIcon/>
        <AlertDescription>
          Something went wrong, please refresh,
          </AlertDescription>
          </Alert>
      </Container>
        
    )
  };
  const {email,password}=logindetails;
  return (
    <>
   
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Foodians Log In</Heading>
        <Input
          placeholder="Enter username"
          type="email"
          name="email"
          value={email}
          variant="filled"
          onChange={handleChange}
          mb={3}
        />
        <Input
          placeholder="Password"
          type="password"
           variant="filled"
           mb={6}
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button
         onClick={handleLogin}
         colorScheme="red" mb={8}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
    <Footer/>
    </>
  );
};

export default Login;

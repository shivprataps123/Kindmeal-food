import { useState } from "react";
import data from '../db.json'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
 
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Footer from "../Components/Footer/footer";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);


//let adminData=data.adminCreds[0]
function AdminPanel() {
    //console.log('json data',data.adminCreds[0]);
    const [Email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isAuth,setIsAuth]=useState(false);



   // const handleShowClick = () => setShowPassword(!showPassword);
   
const handleSubmit=(e)=>{
    e.preventDefault()
    if(data.adminCreds[0].username==Email&&data.adminCreds[0].password==password){
        //return <Navigate to='/adminPanelData'/>
        console.log('hurray ur welcome');
        setIsAuth(true)
     }
     
     
}
    
   
  return (
    <>
    <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bg="teal.500" />
      <Heading color="teal.400">Welcome Admin</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input  
                name={Email}
                value={Email}
                onChange={(e)=>setEmail(e.target.value)} 
                type="email" placeholder="email address" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                name={password}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                 type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm"></Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link>forgot password?</Link>
              </FormHelperText>
            </FormControl>
            {isAuth? <Button
        
        onClick={handleSubmit}
        borderRadius={0}
        type="submit"
        variant="solid"
        colorScheme="teal"
        width="full"
      >
          <Link to='/adminPanelData'>
        Login
        </Link>
      </Button>: <Button
        
        onClick={handleSubmit}
        borderRadius={0}
        type="submit"
        variant="solid"
        colorScheme="teal"
        width="full"
      >
        Login
       
      </Button>}
           
        
          </Stack>
        </form>
      </Box>
    </Stack>
    <Box>
     
      <Link color="teal.500" href="#">
      
      </Link>
    </Box>
  </Flex>
  
  </>
  )
}

export default AdminPanel
import React from 'react';
import {
  Flex,
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

const Signup = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('red.100', 'gray.700');

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
        <Heading mb={6}>Foodians Sign In</Heading>
        <Input
          placeholder="Enter Your Name"
          type="name"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="Enter username"
          type="email"
          variant="filled"
          mb={6}
        />
      <Input
          placeholder="Password"
          type="password"
          variant="filled"
          mb={6}
        />
          <Input
          placeholder="Enter Your Number"
          type="number"
          variant="filled"
          mb={3}
        />
        <Button colorScheme="red" mb={8}>
          Sign In
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

export default Signup;

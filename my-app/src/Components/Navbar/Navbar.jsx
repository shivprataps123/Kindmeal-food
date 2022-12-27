import {Link} from 'react-router-dom'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home|','HotPicks|', 'Kind Meals|', 'KindMoments|','Recipies|'];
//({ children }: { children:import('react').ReactNode }) 
const NavLink = ({children})=> (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      color: 'teal.700',
      textDecoration: 'none',
      bg: useColorModeValue('red.200'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('#2bb673', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
          color="red"
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link to='/'>
            <Box 
            color="red"
            fontSize= '40px'
            fontWeight= 'semibold'
            fontFamily="c">FOODIANS</Box>
             </Link>
            <HStack
            fontSize='18px'
            fontFamily='c'
           fontWeight="500"
            color="white"
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Link to='/favorite'><Text textAlign='center'>Favourite</Text></Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://i.ibb.co/TqxXZtp/Whats-App-Image-2022-06-14-at-12-29-28-PM-removebg-preview.png'
                  }
                />
              </MenuButton>
              <MenuList>
                <Link to='/login'>
                <MenuItem>Login</MenuItem>
                </Link>
                <Link to='/signUp'>
                <MenuItem>Sign Up</MenuItem>
                </Link>
                <Link to='/adminPanel'>
                <MenuItem>Admin</MenuItem>
                </Link>
                <MenuDivider />
                
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack 
            color="white"
            // fontSize= '58px'
            fontFamily='cursive'
            fontWeight= 'semibold' as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink  key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

     
    </>
  );
}
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';

  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
      marginTop='20px'
        bg={useColorModeValue('#2bb673', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Home</ListHeader>
              <Link href={'#'}>Advertising</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Abount Foodians</Link>
                <Tag
                  size={'sm'}
                  bg={useColorModeValue('green.300', 'green.800')}
                  ml={2}
                  color={'white'}>
                  Terms & Conditions
                </Tag>
              </Stack>
              <Link href={'#'}>Inspiring Partners</Link>
              <Link href={'#'}>Lifestyle Ambassadors</Link>
              <Link href={'#'}>Contact Us</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Feature</ListHeader>
              <Link href={'#'}>Meat-Free Deals</Link>
              <Link href={'#'}>Tasty Menus</Link>
              <Link href={'#'}>Meat-Free Recipes</Link>
              <Link href={'#'}>Featured Restaurants</Link>
              <Link href={'#'}>Food Map</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Exciting Promos</ListHeader>
              <Link href={'#'}>Free Meals</Link>
              <Link href={'#'}>Food Bloggers</Link>
              <Link href={'#'}>Uber CHIRP</Link>
              <Link href={'#'}>Feed The Poor</Link>
              <Link href={'#'}>Win an iPad Mini 3</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Social Media</ListHeader>
              <Link href={'#'}>Foodian Widget</Link>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            {/* <Logo /> */}
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 Foodians. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }
import {Skeleton,
    Stack,
    Container
    ,Alert,
    AlertIcon,
    AlertDescription,
     Flex,
     Image,
     Text,
     GridItem,
     Button,
     Grid,
     Box,
     Input,
    } from '@chakra-ui/react';
    import axios from 'axios';
    import { useContext } from 'react';
    import { useState,useEffect } from 'react';
    //import adminPanel from './adminPanel';
import ImageSlider from "../Components/Slider/ImageSlider"
const getData=()=>{
    let query=document.getElementById("query").value;
    return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  }
  
const itemAlreadyExists=(id,cartItems)=>{
    if(cartItems.find((item)=>item.id===id)){
      return true
      
    }
    return false
  };
const Home=()=>{
    const [loading,setLoading]=useState(false);
    const[data,setData]=useState([]);
    const[error,setError]=useState(false);

    useEffect(()=>{
        setLoading(true);
        getData()
        .then((res)=>{
          setData(res.data.meals);
          console.log(res.data.meals);
          setError(false);
        })
        .catch(()=>{
          setError(true);
          setData([]);
        })
        .finally(()=>{
          setLoading(false);
        })
      },[])

    if(loading){
        return (
          <Stack my={20}>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          <Skeleton height="40px"/>
          </Stack>
        )
      }
      if(error){
        return (
          <Container
          width={{
            base:"full",
            sm:"full",
            md:"container.xl",
            lg:"container.lg",
          }}
          centerContext={true}
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
        );
      }


    return (
        <>
        {/* <adminPanel/> */}
    <ImageSlider/> 
        <input id='query'/>
        <button onClick='search()'></button>
    <Container 
    bg='
    #e2e2e2'
    maxW={{base:"full", md:"container.xl"}}
    p={{base:2,lg:0}}
    >
      <Grid
      w="full"
      templateColumns={{
        base:"repeat(1,1fr)",
        md:"repeat(2,1fr)",
        lg:"repeat(3,1fr)"
      }}
      gap={2}
      >
       {data && 
       data.map((product)=>(
        <GridItem key={product.id}>
          <Box
          bg="gray.50"
            
          columns={{sm:2,md:4}}
          spacing="8"
          p={2}
          rounded="lg"
          color="gray.600"
          boxShadow="lg"
          >
            <Grid templateRows="repeat(24,1fr)" h="xl" >
              <GridItem rowSpan={16}>
                <Flex align="center" justify="center">
                  <Image
                  borderRadius="8px"
                  boxSize="xs"
                  src={product.strMealThumb
                  }
                  alt="prod-img"
                  w="full"
                  h="sm"
                
                  />
                  </Flex>
                  </GridItem>
                  <GridItem rowSpan={3}>
                    <Flex align="center" justify="center">
                      <Box>
                        <Text textAlign="center">{product.strMeal}</Text>
                      </Box>
                      </Flex>
                      </GridItem>
                      <GridItem rowSpan={2}>
                        <Flex align="center" justify="center">
                          <Box>
                            <Text>ID No. {product.idMeal
}</Text>
                          </Box>
                          </Flex>
                          </GridItem>
                          <GridItem rowSpan={3}>
                            <Flex>
                              <Button
                              colorScheme="gray"
                              variant="outline"
                             
                              >
                                Favourite

                              </Button>
                            </Flex>
                          </GridItem>
                          </Grid>
                          </Box>
                          </GridItem>
       ))}

      </Grid>

    </Container>
    <Box 
    marginTop='50px'
    w="100%"
    bg="white"
    h="700px"
    textAlign='center'
    >
   <h1
   style={{
    fontSize:'32px',
    textAlign:'center',
    color:'#666666',

   }}
   >Introducing Malaysia's Pioneering Meat-Free Lifestyle Platform</h1>
   <br/>
   
   <label
   style={{
    fontSize:'27px',
    textAlign:'center',
    color:'#9ca4ba',

   }}
   >Brought to you by

   </label>
   <br/>
   <br/>
   <img 
   style={{
    marginLeft:"480px"
   }}
   width="30%" 
   src='https://www.kindmeal.my/images/logo-petfinder-v2.png'/>
   <br/>
   <h1
   style={{
    fontSize:'32px',
    textAlign:'center',
    color:'#9ca4ba',

   }}
   >Instant coupon & dining. No upfront coupon payment, booking or printing.</h1>
   <br/>
   <div
   style={{
    display:'grid',
    gridTemplateColumns:'repeat(4,1fr)',
    gap:'20px',
    marginTop:'50px',
    width:'100%',
    border:'0px solid red',
  
   }}>
    <div>
      <img style={{
        marginLeft:"40px"
      }} src='https://www.kindmeal.my/images/intro_deal.png'/>
      <p>Get Great Deals</p>
      <p>Show our FREE digital coupons to instantly enjoy exciting deals</p>
    </div>
    <div>
      <img style={{
        marginLeft:"80px"
      }} src='https://www.kindmeal.my/images/intro_kindmoment.png'/>
      <p>Share KindMoments</p>
      <p>Spread the joy by sharing your yummy dining moments</p>
    </div>
    <div>
      <img style={{
        marginLeft:"46px"
      }} src='https://www.kindmeal.my/images/intro_menu.png'/>
      <p>Discover Delicious Food</p>
      <p>Explore the latest exquisite offerings and creative menus</p>
    </div>
    <div>
      <img style={{
        marginLeft:"46px"
      }} src='https://www.kindmeal.my/images/intro_friends.png'/>
      <p>Meet Food Lovers</p>
      <p>Make new, compassionate friends and share great food tips</p>
    </div>
   </div>
    </Box>
        </>
    )
}


export default Home
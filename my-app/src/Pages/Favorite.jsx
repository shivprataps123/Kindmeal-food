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
    

           const Favorite=()=>{
                const [loading,setLoading]=useState(false);
                const[data,setData]=useState([]);
                const[error,setError]=useState(false);

                useEffect(()=>{
                    setLoading(true);
                    getData()
                    .then((res)=>{
                    setData(res.data.meals);
                    console.log('gdhfhvngvhtdh',res.data.meals);
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
                        <Text
                        fontSize='20px'
                        color="green"
                        textAlign="center">{product.strMeal}</Text>
                      </Box>
                      </Flex>
                      </GridItem>
                      <GridItem rowSpan={2}>
                        <Flex align="center" justify="center">
                          <Box>
                            <Text
                            fontWeight='c'
                            fontSize='22px'
                            color="green"
                          >{product.strIngredient1}</Text>
                          </Box>
                          </Flex>
                          </GridItem>
                          <GridItem rowSpan={3}>
                            <Flex>
                              <Button
                              backgroundColor="red"
                              color="white"
                              colorScheme="gray"
                              variant="outline">
                                Your Favourite
                                </Button>
                            </Flex>
                          </GridItem>
                          </Grid>
                          </Box>
                          </GridItem>))}
                          </Grid>
                          </Container>
                    
                    
                        </>
                    )
                }


                export default Favorite;
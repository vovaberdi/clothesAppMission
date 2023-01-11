import { Text, Box, Container, keyframes, Button } from '@chakra-ui/react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Clothing } from '../../../models/Types';
import { deleteAllItems } from '../../../store/clothsState';
import { setAllClothes } from '../../../store/reduxFuc';
import store from '../../../store/store';

import "./Home.css";

function Home(): JSX.Element {
  const navigate = useNavigate();


  const dispatch = useDispatch();

  function handleClothes(clothes: Clothing[]) {
      dispatch(setAllClothes(clothes));
  }

  const myClothes:Clothing[] = useSelector((state: any) => state.clothingReducer.clothing);

  const saveToLocalStorage = (myClothes:Clothing[]) => {
    localStorage.setItem(`clothing_${myClothes[0].id}`, JSON.stringify(myClothes));
  };

  useEffect(() => {
    if (myClothes.length === 3) {
      saveToLocalStorage(myClothes);
      store.dispatch(deleteAllItems())
    }

  }, [myClothes]);



  useEffect(() => {
    const url = "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94";
    axios.get(url)
   .then((response) => {handleClothes(response.data);

   }).catch((error) => {console.log("error", error);});
}, []);


   
    return (
        <div className="Home">
             <Container   alignItems="center" justifyContent="center">
             <Button  mt={12} onClick={()=>navigate('/SetList')}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               8 sets
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>navigate('/Shoes')}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               11 shoes
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>navigate('/Shirt')}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               12 shirts
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>navigate('/Pants')}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               12 pants
            </Text>
            </Button> 
      
     
            </Container>
        </div>
    );
}

export default Home;

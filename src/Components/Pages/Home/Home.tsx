import { Text, Box, Container, keyframes, Button } from '@chakra-ui/react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Clothing } from '../../../models/Types';
import { deleteAllItems } from '../../../store/clothsState';
import { addSet, setAllClothes } from '../../../store/reduxFuc';
import store from '../../../store/store';
import "./Home.css";

function Home(): JSX.Element {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myClothes:Clothing[] = useSelector((state: any) => state.clothingReducer.clothing);

  const items:Clothing[] = useSelector((state: any) => state.clothes.clothes);

  const sets:number = useSelector((state: any) => state.setsReducer.count);

  const setu = localStorage.getItem('clothing');

  console.log("nonsence:", setu);


  const findShoes = (objects: Clothing[]) => {
    return objects.find(obj => obj.type === "shoes");
}
  const saveToLocalStorage = (myClothes:Clothing[]) => {
    let firstObj = findShoes(myClothes);
    localStorage.setItem(`${firstObj?.type}${firstObj?.id}`, JSON.stringify(myClothes));
  };

  

  const handleClothes =(clothes: Clothing[]) => {
    items.length < 1 ? 
    dispatch(setAllClothes(clothes))
    :
    console.log("items exist");

}

  useEffect(() => {
    if (myClothes.length === 3) {
      saveToLocalStorage(myClothes);
      dispatch(addSet())
      console.log("sets:", sets)
      store.dispatch(deleteAllItems())
    }

  }, [myClothes]);


  useEffect(() => {
    const url = "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94";
    axios.get(url)
   .then((response) => {handleClothes(response.data);

   }).catch((error) => {console.log("error", error);});
}, []);

   const type1 = "shoes";
   const type2 = "shirt";
   const type3 = "spants";

   const filteredItems1 = items.filter(item => type1.includes(item.type));
   const filteredItems2 = items.filter(item => type1.includes(item.type));
   const filteredItems3 = items.filter(item => type1.includes(item.type));

    return (
        <div className="Home">
             <Container   alignItems="center" justifyContent="center">
             <Button  mt={12} onClick={()=>navigate('/SetList')}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               {sets} - Sets
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>navigate('/Shoes')}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               {filteredItems1.length} - Shoes
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>navigate('/Shirt')}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               {filteredItems2.length} - Shirts
            </Text>
            </Button> 
            <Button mt={12} onClick={()=>navigate('/Pants')}>
             <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontSize='5xl' fontWeight='extrabold'>
               {filteredItems3.length} - Pants
            </Text>
            </Button> 
     
            </Container>
        </div>
    );
}

export default Home;

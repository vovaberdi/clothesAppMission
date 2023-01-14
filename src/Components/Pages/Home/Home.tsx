import { Text, Container, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Clothing } from '../../../models/Types';
import { addSet, deleteAllItems, removeClothing, setAllClothes } from '../../../store/reduxFuc';
import store from '../../../store/store';
import "./Home.css";

function Home(): JSX.Element {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myClothes:Clothing[] = useSelector((state: any) => state.clothingReducer.clothing);

  const items:Clothing[] = useSelector((state: any) => state.clothes.clothes);

  const sets:number = useSelector((state: any) => state.setsReducer.count);


  const getSets = () => {
    const keys = Object.keys(localStorage).filter(key => key.startsWith("shoes"));
    for (let i = 0, len = keys.length; i < len; i++) {
      let myKey:any = keys[i];
      let temp = localStorage.getItem(myKey) || '{}';
       storedSets.push(JSON.parse(temp)) 
   }
}
  let storedSets: any[] = []; 
  let setsIds :any[] = [];

  const getIds = () => {
    storedSets.map((item) =>{  item.map((item1: any) => setsIds.push(item1.id))})
    setsIds.map((id) => dispatch(removeClothing(id)))
    }

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
    getSets()
    getIds()
    console.log(myClothes)
    if (myClothes.length === 3) {
      saveToLocalStorage(myClothes);
      dispatch(addSet())
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
   const type3 = "pants";

   let filteredItems1 = items.filter(item => type1.includes(item.type));
   let filteredItems2 = items.filter(item => type2.includes(item.type));
   let filteredItems3 = items.filter(item => type3.includes(item.type));

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

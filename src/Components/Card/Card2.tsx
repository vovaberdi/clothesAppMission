import { Badge, Box, Button, Image, useToast, } from "@chakra-ui/react";
import "./Card2.css";
import {Clothing} from "../../models/Types";
import { useDispatch, useSelector } from 'react-redux';
// import { addSet, selectSet, deselectSet } from '../../store/reduxFuc';
import { addClothing } from "../../store/clothsState";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { removeClothing } from "../../store/reduxFuc";




function Cards2(props:Clothing): JSX.Element {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast()



  interface IClothing {
    id: number;
    brand: string;
    type: string;
    size: string;
    color: string;
  }

 

  class ClothingWithDesign extends Clothing {
    timestamp: Date;
    selected: boolean;
    constructor(props: {id:number, brand:string, type:string, color: string, size: string, timestamp: Date, selected: boolean }) {
        super(props);
        this.timestamp = props.timestamp;
        this.selected = props.selected;
    }
}
   const toasti = () => {
       toast({title: 'added successfully',status: 'success',isClosable: true,})
    }

  const clothingWithDesign = new ClothingWithDesign({...props, selected: true, timestamp: new Date()});
  const myClothes:Clothing[] = useSelector((state: any) => state.clothingReducer.clothing);
  const AllClothes:Clothing[] = useSelector((state: any) => state);

  const saveToLocalStorage = (myClothes:Clothing[]) => {
    localStorage.setItem('clothing', JSON.stringify(myClothes));
  };

  useEffect(() => {
    if (myClothes.length === 3) {
      saveToLocalStorage(myClothes);
    }
  }, [myClothes]);
 

  const startShoes = (clothing:IClothing) => {
    if(clothing.type === "shoes") {
      myClothes.length >= 2 ? 
      navigate('/Home') : navigate('/Shirt')
    } 
    if (clothing.type === "shirt") {
      myClothes.length >= 2 ? 
      navigate('/Home') : navigate('/pants')
    } 
    if (clothing.type ==="pants") {
      myClothes.length >= 2 ? 
      navigate('/Home') : navigate('/Shoes')
    } 
   console.log(myClothes)
  }




function handleAddSetClick(clothing: ClothingWithDesign) {
  toasti()
  dispatch(addClothing([clothing]));
  dispatch(removeClothing(clothing.id))
  startShoes(clothing)
  console.log(AllClothes)
}

  
    const checkType = (props:any) => {
      if (props === "shoes") {
        return (
         "https://images.pexels.com/photos/12725055/pexels-photo-12725055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        )
      } else if (props === "shirt") {
        return (
          "https://images.pexels.com/photos/6461400/pexels-photo-6461400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        )
      } else {
        return (
          "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        )
      }
    }

  const property = {
    imageUrl: `${checkType(props.type)}`,
    type: `${props.type}`,
    color: ` color : ${props.color}`,
    size: ` size : ${props.size}`
  }
    return (
        <div className='card-container'>
        <Box  boxShadow='dark-lg' maxW='sm' borderWidth='1px' borderRadius='lg'>
          <Image  overflow='hidden' src={property.imageUrl} />
        <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {props.brand}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
           {property.type}
       
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={4}
        >
          {property.color}
        </Box>

        <Box>
          {property.size}
          <Box as='span' color='gray.600' fontSize='sm'>
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            <Button ml='12rem'  onClick={()=>handleAddSetClick(clothingWithDesign)} colorScheme='green' size='xs'> Add </Button>
          </Box>
          <Box>
           <Box display="grid" gridGap={3} gridAutoFlow="row dense">
            </Box>
          </Box>
          
        </Box>
        
      </Box>
    </Box>
   
       </div>
    );
}

export default Cards2;

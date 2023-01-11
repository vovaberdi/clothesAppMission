import { Badge, Box, Button, Image, } from "@chakra-ui/react";
import "./Card2.css";
import {Clothing} from "../../models/Types";
import { useDispatch, useSelector } from 'react-redux';
import { addSet, selectSet, deselectSet } from '../../store/reduxFuc';
import { addClothing } from "../../store/clothsState";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";




function Cards2(props:Clothing): JSX.Element {

  const [visitedPages, setVisitedPages] = useState([]);
  const navigate = useNavigate();


  interface IClothing {
    id: number;
    brand: string;
    type: string;
    size: string;
    color: string;
    // timestamp:number;
  }
  // new Date().toLocaleString()


  
  const startShirt = (clothing:IClothing) => {
    if(clothing.type == "shirt") {
      navigate('/Shoes')
    } 
    if (clothing.type =="shoes") {
      navigate('/Pants') 
    } 
    if (clothing.type =="pants") {
        navigate('/Home')
    } 
  }
  const startPants = (clothing:IClothing) => {
    if(clothing.type == "pants") {
      navigate('/Shirt')
    } 
    if (clothing.type =="shirt") {
      navigate('/Shoes') 
    } 
    if (clothing.type =="shoes") {
        navigate('/Home')
    } 
  }
  const myClothes:Clothing[] = useSelector((state: any) => state.clothingReducer.clothing);
  const myothes:Clothing[] = useSelector((state: any) => state);


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


const dispatch = useDispatch();

function handleAddSetClick(clothing: IClothing) {
  dispatch(addClothing([clothing]));
  startShoes(clothing)
  console.log(myothes)
}

function handleSelectSetClick(id: number) {
  dispatch(selectSet(id));
}

function handleDeselectSetClick(id: number) {
  dispatch(deselectSet(id));
}


  
  
    const checkType = (props:any) => {
      if (props == "shoes") {
        return (
         "https://images.pexels.com/photos/12725055/pexels-photo-12725055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        )
      } else if (props == "shirt") {
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
    size: ` size : ${props.size}`,
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
            <Button ml='12rem'  onClick={()=>handleAddSetClick(props)} colorScheme='green' size='xs'> Add </Button>
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

import { Box, propNames, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards2 from "../../Card/Card2";
import "./ClothesList.css";
import {Clothing} from "../../../models/Types";
import { useDispatch, useSelector } from "react-redux";
import { setAllClothes } from "../../../store/reduxFuc";


function ClothesList(): JSX.Element {

 
    const myClothes:Clothing[] = useSelector((state: any) => state.clothes.clothes);
 
    return (
        <div className="ClothesList">
          
            <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
            <SimpleGrid  columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>
            
                {myClothes.map(item=> <Cards2 key={item.id} id={item.id} type={item.type} color={item.color} size={item.size}  brand={item.brand}/>)}
                
            </SimpleGrid>
            </Box>
         
        </div>
    );
}

export default ClothesList;






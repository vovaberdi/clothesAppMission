import { Box, Container, SimpleGrid, Wrap } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards2 from "../../Card/Card2";
import "./ListPlaces.css";
import {Clothing} from "../../../models/Types";


function ListPlaces(): JSX.Element {

    const [clothes, setClothes] = useState<Clothing[]>([]); 
    

    useEffect(() => {
        const url = "https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94";
        axios.get(url)
       .then((response) => {console.log(response.data);
  
        setClothes(response.data);
  
       }).catch((error) => {console.log("error", error);});
   }, []);

 
    return (
        <div className="ListPlaces">
          
            <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
            <SimpleGrid  columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>
            
                {clothes.map(item=> <Cards2 key={item.id} id={item.id} type={item.type} color={item.color} size={item.size} brand={item.brand}/>)}
                
            </SimpleGrid>
            </Box>
         


        </div>
    );
}

export default ListPlaces;






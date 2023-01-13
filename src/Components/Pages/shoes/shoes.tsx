import { Box, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Clothing } from "../../../models/Types";
import Cards2 from "../../Card/Card2";
import SortingComponent from "../../Card/Sort/Sort";
import Sort from "../../Card/Sort/Sort";
import "./shoes.css";

function Shoes(): JSX.Element {

    const [userChoice, setUserChoice] = useState<Clothing>({
        id:0,
        size: '',
        type: '',
        color: '',
        brand: '',
        /* ... */
      });


    const myShoes:Clothing[] = useSelector((state: any) => state.clothes.clothes);
    // const myShoes:Clothing[] = useSelector((state: any) => 
    // state.clothes.clothes.filter((cloth: Clothing) => cloth.type === state.filter));

    const type = "shoes";
      
    const filteredItems = myShoes.filter(item => type.includes(item.type));

    const userchoice:Clothing = useSelector((state: any) => state.clothingReducer.clothing[0]);



  

    return (
        <div className="shoes">


               <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
                <SimpleGrid columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>
                
                <SortingComponent items={filteredItems} userChoice={userchoice !== undefined ? userchoice : userChoice} />
                    
                </SimpleGrid>
                </Box> 
			
        </div>
    );
}

export default Shoes;

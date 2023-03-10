import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Clothing } from "../../../models/Types";
import Cards2 from "../../Card/Card2";
import SortingComponent from "../../Card/Sort/Sort";
import Sort from "../../Card/Sort/Sort";
import "./shirt.css";

function Shirt(): JSX.Element {

    const [userChoice, setUserChoice] = useState<Clothing>({
        id:0,
        size: '',
        type: '',
        color: '',
        brand: '',
        /* ... */
      });

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    const myShoes:Clothing[] = useSelector((state: any) => state.clothes.clothes);

    const type = "shirt";
      
    const filteredItems = myShoes.filter(item => type.includes(item.type));

    const userchoice:Clothing = useSelector((state: any) => state.clothingReducer.clothing[0]);
   
    return (
        <div className="shirt">



                 <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
                <SimpleGrid  columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>
                
                <SortingComponent items={filteredItems} userChoice={userchoice !== undefined ? userchoice : userChoice} />
                    
                </SimpleGrid>
                </Box>
			 
			
        </div>
    );
}

export default Shirt;

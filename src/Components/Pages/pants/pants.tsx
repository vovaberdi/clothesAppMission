import { Box, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Clothing } from "../../../models/Types";
import Cards2 from "../../Card/Card2";
import SortingComponent from "../../Card/Sort/Sort";
import Sort from "../../Card/Sort/Sort";
import "./pants.css";

function Pants(): JSX.Element {


    const myShoes:Clothing[] = useSelector((state: any) => state.clothes.clothes);
    // const myShoes:Clothing[] = useSelector((state: any) => 
    // state.clothes.clothes.filter((cloth: Clothing) => cloth.type === state.filter));

    const type = "pants";
      
    const filteredItems = myShoes.filter(item => type.includes(item.type));

    const userchoice:Clothing = useSelector((state: any) => state.clothingReducer.clothing[0]);

 
    // console.log(filteredItems);
    return (
        <div className="pants">

                  <SortingComponent items={filteredItems} userChoice={userchoice} />


                <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
                <SimpleGrid  columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>
                
                    {filteredItems.map(item=> <Cards2 key={item.id} id={item.id} type={item.type} color={item.color} size={item.size} brand={item.brand}/>)}
                    
                </SimpleGrid>
                </Box>
			
			
        </div>
    );
}

export default Pants;

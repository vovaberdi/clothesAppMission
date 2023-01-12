
import { Box, SimpleGrid } from "@chakra-ui/react";
import _ from "lodash";
import { useEffect } from "react";
import { MySet } from "../../../models/Types";
import Sets from "./Set";
import "./setList.css";

function SetList(): JSX.Element {
  // const sets = useSelector((state: RootState) => state.sets);
  // const clothes = useSelector((state: RootState) => state.clothes);
  // const dispatch = useDispatch();

  // function onSelect(id: number) {
  //   dispatch({ type: 'SELECT_SET', id });
  // }

  // function onDeselect(id: number) {
  //   dispatch({ type: 'DESELECT_SET', id });
  // }

  useEffect(()=>{
    getSets()
  },[])

  const getSets = () => {
     for (let i = 0, len = localStorage.length; i < len; i++) {
        let myKey:any = localStorage.key(i);
        let temp = localStorage.getItem(myKey) || '{}';
        temp.length > 10 ?
        storedSets.push(JSON.parse(temp)) :
        console.log(temp);        
  }
}

interface MyItem {
  /* properties of your object*/
}

interface MyArray {
  id: number;
  brand: string;
  type: string;
  size: string;
  color: string;
}
  

    let storedSets: MySet[] = [];  
    console.log("arr", storedSets)  

    const check = (storedSets:MySet[]) =>{
         storedSets.map((item:any) =>{
          item.map((item: any) =>{
            console.log("myitem:", item)
          })
         })
    }
    check(storedSets)



    return (
        <div className="setList">

               <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
                <SimpleGrid  columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>
                
                 <Sets id={0} brand={""} type={""} size={""} color={""} />
                </SimpleGrid>
                </Box> 
			
              
        </div>
    );
}

export default SetList;

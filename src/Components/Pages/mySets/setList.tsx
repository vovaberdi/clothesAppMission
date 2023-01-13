
import { Box, SimpleGrid } from "@chakra-ui/react";
import _ from "lodash";
import { useEffect } from "react";
import { MySet } from "../../../models/Types";
import{Sets} from "./Set";
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
    abb()
    check()
    ale()
    test.forEach((a) => Object.values(a).forEach((b) => (vova += b)));
    console.log(vova);

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
  

    let storedSets: any[] = [];  
    console.log("arr", storedSets)  

    const abb = () =>{
      for(let i =0; i < storedSets.length; i++){
        // for(let j =0; j < 3; j++){
          console.log("consolSys:", storedSets[i])
        // }
      }
    }
      

    const check = () =>{
         storedSets.map((item:any) =>{
          item.map((item: any) =>{
            test.push(item)
          })
         })
    }
    let test: any[] = []
    let vova = "";

    const ale = () =>{
      let obj1 = {id: 1, type: 'shoes', color: 'black', size: 37, brand: 'Tommy Hilfiger'};
      let obj2 = {id: 2, type: 'shirt', color: 'blue', size: 'M', brand: 'Polo'};
      let obj3 = {id: 3, type: 'pants', color: 'green', size: '32', brand: 'Levi'};

      let mergedObj = Object.assign({}, obj1, obj2, obj3);
        // mergedObj['item_id'] = mergedObj.id;
        // delete mergedObj.id;
         console.log("ale:",mergedObj)
    }


    return (
        <div className="setList">

                <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
                <SimpleGrid  columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>

                {storedSets.map(item => <Sets objects={item} />)}
                
                </SimpleGrid>
                </Box> 
			
              
        </div>
    );
}

export default SetList;

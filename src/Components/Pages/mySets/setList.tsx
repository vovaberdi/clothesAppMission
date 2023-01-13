
import { Box, SimpleGrid } from "@chakra-ui/react";
import _ from "lodash";
import { useEffect } from "react";
import MySets from "./Set";
import "./setList.css";

interface MyMerge {
  pants_brand: string;
  pants_color: string;
  pants_id: number;
  pants_selected: true
  pants_size: number;
  pants_timestamp: string;
  pants_type?: string;
  selected?: boolean;
  shirt_brand: string;
  shirt_color: string;
  shirt_id: number;
  shirt_selected?: boolean;
  shirt_size: string;
  shirt_timestamp: string;
  shirt_type?: string;
  shoes_brand: string;
  shoes_color: string;
  shoes_id: number;
  shoes_selected?: boolean;
  shoes_size: number;
  shoes_timestamp: string;
  shoes_type?: string;
}

function SetList(): JSX.Element {

  useEffect(()=>{
    getSets()
    abb()
    check()
    console.log("merged:", merged)
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
         storedSets.map((item:any) =>{ superMerge(item[0], item[1], item[2]) })
    }
    let merged: MyMerge[] = []

    const superMerge = (obj1:any, obj2:any, obj3:any) =>{

        let mergeWithCustomizer = function(objValue: any, srcValue: any, key: string, object: { [x: string]: any; }, source: { type: string; }) {
          let type = source.type + "_";
          let newKey = type + key;
          object[newKey] = srcValue;
        };
        let mergedObj = _.mergeWith({}, obj1, obj2, obj3, mergeWithCustomizer);
        merged.push(mergedObj);
    }


    return (
        <div className="setList">

                <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
                <SimpleGrid  columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>

                {merged.map((i) => <MySets pants_brand={i.pants_brand} pants_color={i.pants_color} pants_id={i.pants_id} pants_size={i.pants_size} pants_timestamp={i.pants_timestamp} shirt_brand={i.shirt_brand} shirt_color={i.shirt_color} shirt_id={i.shirt_id} shirt_size={i.shirt_size} shirt_timestamp={i.shirt_timestamp} shoes_brand={i.shoes_brand} shoes_color={i.shoes_color} shoes_id={i.shoes_id} shoes_size={i.shoes_size} shoes_timestamp={i.shoes_timestamp} pants_selected={true} />)}
                
                </SimpleGrid>
                </Box> 
			
              
        </div>
    );
}

export default SetList;

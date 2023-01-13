// import { Box, SimpleGrid } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Clothing } from "../../../models/Types";
// import Cards2 from "../Card2";
// import "./Sort.css";



// function Sort(clothes:Clothing[]): JSX.Element {

//   const userChoice:Clothing = useSelector((state: any) => state.clothingReducer.clothing);

//     const [sortedItems, setSortedItems] = useState<Clothing[]>([]);

//   // useEffect(() => {
//   //   sortItems()
//   // }, [userChoice]);


//   const sizes = {
//     XS: 1,
//     S: 2,
//     M: 3,
//     L: 4,
//     XL: 5,
//     XXL: 6
//   }

//   const sortItems = () => {
//     const sortedItems = clothes.sort((a, b) => {
//       let aSimilarity = 0;
//       let bSimilarity = 0;
//       // Compare attributes of a and userChoice
//       if (a.size in sizes && sizes[a.size as keyof typeof sizes] === sizes[userChoice.size as keyof typeof sizes]) aSimilarity += 1;
//       if (a.type === userChoice.type) aSimilarity += 1;
//       if (a.color === userChoice.color) aSimilarity += 1;
//       if (a.brand === userChoice.brand) aSimilarity += 1;
//       // Compare attributes of b and userChoice
//       if (b.size in sizes && sizes[b.size as keyof typeof sizes] === sizes[userChoice.size as keyof typeof sizes]) bSimilarity += 1;
//       if (b.type === userChoice.type) bSimilarity += 1;
//       if (b.color === userChoice.color) bSimilarity += 1;
//       if (b.brand === userChoice.brand) bSimilarity += 1;
//       // sort by similarity
//       return bSimilarity - aSimilarity;
//     });
//     console.log(sortedItems)
//     setSortedItems(sortedItems);
//     console.log(sortedItems)
//   }
//  console.log(sortedItems)

      
      // const sortItems = (clothes: Clothing[], userChoice: Clothing) => {
      //   const sizes = {
      //     XS: 1,
      //     S: 2,
      //     M: 3,
      //     L: 4,
      //     XL: 5,
      //     XXL: 6
      //   }
      //   const sortedItems = clothes.sort((a, b) => {
      //     let aSimilarity = 0;
      //     let bSimilarity = 0;
      //     // Compare attributes of a and userChoice
      //     if (a.size in sizes && sizes[a.size as keyof typeof sizes] === sizes[userChoice.size as keyof typeof sizes]) aSimilarity += 1;
      //     if (a.type === userChoice.type) aSimilarity += 1;
      //     if (a.color === userChoice.color) aSimilarity += 1;
      //     if (a.brand === userChoice.brand) aSimilarity += 1;
      //     // Compare attributes of b and userChoice
      //     if (b.size in sizes && sizes[b.size as keyof typeof sizes] === sizes[userChoice.size as keyof typeof sizes]) bSimilarity += 1;
      //     if (b.type === userChoice.type) bSimilarity += 1;
      //     if (b.color === userChoice.color) bSimilarity += 1;
      //     if (b.brand === userChoice.brand) bSimilarity += 1;
      //     // sort by similarity
      //     return bSimilarity - aSimilarity;
      //   });
      //   return sortedItems;
      // }

    

  

//     return (
//         <div className="sort">

//                 <Box  display="flex"  alignItems="center" justifyContent="space-between">
                
//                 <SimpleGrid columns={{ sm: 2, md: 4 }} spacing='8' p='10' textAlign='center' rounded='lg' color='gray.400'>
                
//                     {sortedItems.map(item=> <Cards2 key={item.id} id={item.id} type={item.type} color={item.color} size={item.size} brand={item.brand}/>)}
                    
//                 </SimpleGrid>
//                 </Box>
     
//         </div>
//     );
// }

// export default Sort;





import React, { useEffect, useState } from 'react';

interface Item {
  id: number;
  type: string;
  color: string;
  size: string;
  brand: string;
  // additional attributes
}

interface UserChoice {
  id: number;
  type: string;
  color: string;
  size: string;
  brand: string;
  // additional attributes
}

interface Props {
  items: Item[],
  userChoice: UserChoice;
  // onSort: (sortedItems: Item[]) => void;

}

 const SortingComponent: React.FC<Props> = ({ items, userChoice }) => {
  const [sortedItems, setSortedItems] = useState<Item[]>([]);


  const sizes = {
    XS: 1,
    S: 2,
    M: 3,
    L: 4,
    XL: 5,
    XXL: 6,
    32: 3
  }
  if (!items || !userChoice) return <div>Loading...</div>;


    const mysortedItems = items.sort((a, b) => {
      console.log("items:", items);
      console.log("userChoice:", userChoice);
      console.log("a", a);
      console.log("b", b);

      let aSimilarity = 0;
      let bSimilarity = 0;
       // Compare attributes of a and userChoice
       if (a.size in sizes && sizes[a.size as keyof typeof sizes] === sizes[userChoice.size as keyof typeof sizes]) aSimilarity += 1;
       if (a.type === userChoice.type) aSimilarity += 1;
       if (a.color === userChoice.color) aSimilarity += 1;
       if (a.brand === userChoice.brand) aSimilarity += 1;
         // Compare attributes of b and userChoice
       if (b.size in sizes && sizes[b.size as keyof typeof sizes] === sizes[userChoice.size as keyof typeof sizes]) bSimilarity += 1;
       if (b.type === userChoice.type) bSimilarity += 1;
       if (b.color === userChoice.color) bSimilarity += 1;
       if (b.brand === userChoice.brand) bSimilarity += 1;
       // sort by similarity
       console.log("aSimilarity:", aSimilarity);
       console.log("bSimilarity:", bSimilarity);

       return bSimilarity - aSimilarity;
      });
      // console.log("check:", sortedItems)
    //  setSortedItems(mysortedItems);
    

    return (
      <div>
      <div>
        {mysortedItems.map((item) => (
          <div key={item.id}>
            <p>Type: {item.type}</p>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
            <p>Brand: {item.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SortingComponent;

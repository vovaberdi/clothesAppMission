
import React, { useEffect, useState } from 'react';
import Cards2 from '../Card2';

interface Item {
  id: number;
  type: string;
  color: string;
  size: string;
  brand: string;
}

interface UserChoice {
  id: number;
  type: string;
  color: string;
  size: string;
  brand: string;
}

interface Props {
  items: Item[],
  userChoice: UserChoice;
}

 const SortingComponent: React.FC<Props> = ({ items, userChoice }) => {
  const [sortedItems, setSortedItems] = useState<Item[]>([]);


  const sizes = {
    XS: 1,
    S: 1,
    M: 2,
    L: 2,
    XL: 3,
    XXL: 3,
    36: 1,
    37: 1,
    39: 2,
    43: 2,
    45: 3,
    46: 3,
    
    30: 1,
    31: 1,
    32: 1,
    34: 2,
    35: 2,
    // 36: 2,
    // 39: 2,
    42: 3,
    // 43: 3,
    48: 3
  }
  if (!items || !userChoice) return <div>Loading...</div>;

    const mysortedItems = items.sort((a, b) => {

      let aSimilarity = 0;
      let bSimilarity = 0;
       // Compare attributes of a and userChoice
       if (a.size in sizes && sizes[a.size as keyof typeof sizes] === sizes[userChoice.size as keyof typeof sizes]) aSimilarity += 3;
      //  if (a.type === userChoice.type) aSimilarity += 1;
       if (a.color === userChoice.color) aSimilarity += 1;
       if (a.brand === userChoice.brand) aSimilarity += 1;
         // Compare attributes of b and userChoice
       if (b.size in sizes && sizes[b.size as keyof typeof sizes] === sizes[userChoice.size as keyof typeof sizes]) bSimilarity += 3;
      //  if (b.type === userChoice.type) bSimilarity += 1;
       if (b.color === userChoice.color) bSimilarity += 1;
       if (b.brand === userChoice.brand) bSimilarity += 1;
       // sort by similarity

       return bSimilarity - aSimilarity;
      });
    
    return (
      <>
   
        {mysortedItems.map((item) => (
          <Cards2 key={item.id} id={item.id} type={item.type} color={item.color} size={item.size} brand={item.brand}/> ))}
     
    </>
  );
}

export default SortingComponent;

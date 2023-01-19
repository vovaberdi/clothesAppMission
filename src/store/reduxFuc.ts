
import { Clothing, ADD_CLOTHING, REMOVE_CLOTHING, ADD_SET, REMOVE_SET} from '../models/Types';


export const addClothing = (clothing: Clothing[]) => {
    return {
      type: 'ADD_CLOTHING_NEW',
      clothing
    }
  }
  export const deleteAllItems = () => {
    return {
      type: 'DELETE_ALL_ITEMS'
    };
  };

 
  export function setAllClothes(clothes: Clothing[]) {
    return { type: ADD_CLOTHING, payload: clothes };
}


export function removeClothing(clothingId: number) {
    return { type: REMOVE_CLOTHING, payload: { clothingId }
    }
}

export function addSet() {
    return {
        type: ADD_SET
    }
}

export function removeSet() {
    return {
        type: REMOVE_SET
    }
}








import { Clothing, ADD_CLOTHING, REMOVE_CLOTHING, ADD_SET, REMOVE_SET} from '../models/Types';

// export function addSet(name: string) {
//     return { type: 'ADD_SET', name };
//   }
  
//   export function selectSet(id: number) {
//     return { type: 'SELECT_SET', id };
//   }
  
//   export function deselectSet(id: number) {
//     return { type: 'DESELECT_SET', id };
//   }




 
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






  
// import { useDispatch } from 'react-redux';
// import { addSet, selectSet, deselectSet } from '../reduxFuc.ts';

// const dispatch = useDispatch();

// function handleAddSetClick(name: string) {
//   dispatch(addSet(name));
// }

// function handleSelectSetClick(id: number) {
//   dispatch(selectSet(id));
// }

// function handleDeselectSetClick(id: number) {
//   dispatch(deselectSet(id));
// }
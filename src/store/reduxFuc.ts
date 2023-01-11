import { useDispatch } from 'react-redux';
import { Clothing, ADD_CLOTHING} from '../models/Types';

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
export function addSet(name: string) {
    return { type: 'ADD_SET', name };
  }
  
  export function selectSet(id: number) {
    return { type: 'SELECT_SET', id };
  }
  
  export function deselectSet(id: number) {
    return { type: 'DESELECT_SET', id };
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
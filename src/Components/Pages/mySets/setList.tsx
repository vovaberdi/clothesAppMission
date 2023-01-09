import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../models/Types";
import Set from './Set';
import "./setList.css";

function SetList(): JSX.Element {
  const sets = useSelector((state: RootState) => state.sets);
  const clothes = useSelector((state: RootState) => state.clothes);
  const dispatch = useDispatch();

  function onSelect(id: number) {
    dispatch({ type: 'SELECT_SET', id });
  }

  function onDeselect(id: number) {
    dispatch({ type: 'DESELECT_SET', id });
  }
    return (
        <div className="setList">
             {sets.map(set => (
                  <Set key={set.id} set={set} clothes={clothes} onSelect={onSelect} onDeselect={onDeselect} />
             ))};
			
        </div>
    );
}

export default SetList;

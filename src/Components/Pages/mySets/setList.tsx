
import { useEffect } from "react";
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
        temp.length > 5 ?
        temp = JSON.parse(temp) :
        console.log(temp);
        console.log(temp);

  }
}

    return (
        <div className="setList">
             {/* {sets.map(set => (
                  <Set key={set.id} set={set} clothes={clothes} onSelect={onSelect} onDeselect={onDeselect} />
             ))}; */}
			
        </div>
    );
}

export default SetList;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Set as SetType, Clothing } from '../../../models/Types';
import Cards2 from '../../Card/Card2';

type Props = {
  set: SetType;
  clothes: Clothing[];
  onSelect: (id: number) => void;
  onDeselect: (id: number) => void;
};

function Set({ set, clothes, onSelect, onDeselect }: Props): JSX.Element {
  const clothingItems = set.clothingIds.map(id =>
    clothes.find(clothing => clothing.id === id)
  );

  return (
    <div className="set">
      <h2>{set.name}</h2>
      <button onClick={() => (set.selected ? onDeselect(set.id) : onSelect(set.id))}>
        {set.selected ? 'Deselect' : 'Select'}
      </button>
      <ul>
        {clothingItems.map(clothing => (
          <Cards2 key={clothing?.id} id={0} type={''} color={''} size={''} brand={''}  />
        ))}
      </ul>
    </div>
  );
}

export default Set;

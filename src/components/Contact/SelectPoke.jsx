import React from 'react';
import { useParams } from 'react-router-dom';
const SelectPoke = () => {
const {id} = useParams();
const {name} = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
      <h3>Name: {name}</h3>
    </div>
  )
};

export default SelectPoke;
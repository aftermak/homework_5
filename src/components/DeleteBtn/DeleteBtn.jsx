import React from 'react'
import { useDispatch } from 'react-redux';
import thunks from '../../store/countries/thunks';
import { useNavigate } from 'react-router-dom'

export default function DeleteBtn({ id }) {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleDelete = () => {
    dispatch(thunks.deleteCountry(id));
    navigation("/countries")
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

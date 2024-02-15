import React from 'react';
import useCountries from '../../hooks/useCountries';
import { Link } from 'react-router-dom';
import DeleteBtn from '../DeleteBtn/DeleteBtn';

export default function CountriesList() {
  const { countries } = useCountries()

  return (countries.length ?
    <div className='component'>
      <ul>
        {countries.map((item) => <li key={item.id}>
          <Link to={String(item.id)}>{item.name.official}{item.flag}</Link>
          <DeleteBtn id={item.id} />
        </li>)}
      </ul>
    </div> : null
  )
}

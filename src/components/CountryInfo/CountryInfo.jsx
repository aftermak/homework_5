import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import DeleteBtn from '../DeleteBtn/DeleteBtn'
import useCountry from '../../hooks/useCountry';
import { renderObject } from '../../utils/countries';

export default function CountryInfo() {
  const { id } = useParams();
  const { selectedCountry } = useCountry(id);

  const [searchParams] = useSearchParams();
  const translation = searchParams.get('trans');
  console.log(translation);

  return selectedCountry ?
    <div className='component'>
      <h3>{translation ? selectedCountry.translations[translation].common : selectedCountry.name.official}</h3>
      {renderObject(selectedCountry)}
      <DeleteBtn id={id} />
    </div> : null;
}

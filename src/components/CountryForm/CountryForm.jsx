import React from 'react'
import './style.sass'
import { useNavigate } from 'react-router-dom'
import useCountries from '../../hooks/useCountries'
import useCountriesForm from '../../hooks/useCountriesForm'

export default function CountryForm() {

  const navigation = useNavigate();
  const {countries} = useCountries();
  const {selectedCountry, selectedTranslation, selectCountry, selectTranslation} = useCountriesForm(countries)

  const handSelectCountry = e => selectCountry(e.target.value)
  const handleSelectTranslation = e => selectTranslation(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    navigation(`countries/${selectedCountry.id}?trans=${selectedTranslation}`)
  }

  return countries.length && selectedCountry ? 
  <form className='component form' onSubmit={handleSubmit}>

    <h3>Capital Form Component</h3>
    <label>
      Select Capital <select onChange={handSelectCountry} defaultValue={selectedCountry.id}>
        {countries.map((item) => <option key={item.id} value={item.id}>{item.capital[0]} {item.flag}</option>)}
      </select>
    </label>

    <label>
      Select Translation
      <select onChange={handleSelectTranslation} defaultValue={selectedTranslation}>
        {Object.keys(selectedCountry.translations).map((key, index) => <option key={index} value={key}>{key}</option>)}
      </select>
    </label>

    <button>Read more about {selectedCountry.name.common}</button>

  </form> : null
}

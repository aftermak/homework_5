import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCountry, setTranslation } from '../store/countries/slice'

export default function useCountriesForm(countries) {

  const { selectedCountry, selectedTranslation } = useSelector((state) => state.countries)
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length) {
      dispatch(setCountry());
      dispatch(setTranslation());
    }
  }, [countries]);

  const selectCountry = value => {
    dispatch(setCountry(value))
    dispatch(setTranslation());
  };

  const selectTranslation = value => {
    dispatch(setTranslation(value));
  };

  return { selectedCountry, selectedTranslation, selectCountry, selectTranslation }
}

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import thunks from "../store/countries/thunks";
import { setDefaultCountry } from '../store/countries/slice'

export default function useCountry(id) {
    const { selectedCountry } = useSelector((state) => state.countries)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDefaultCountry())
        dispatch(thunks.fetchCountry(id))
    }, [])

    return { selectedCountry }
}

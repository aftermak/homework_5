import { createAsyncThunk } from '@reduxjs/toolkit'
import { sliceName } from './constants'
import service from '../../service/country'

const thunks = {
    fetchCountries: createAsyncThunk(`${sliceName}/fetchCountries`, async () => {
        const response = await service.get();
        console.log('countries');
        return response
    }),
    fetchCountry: createAsyncThunk(`${sliceName}/fetchCountry`, async (id) => {
        const response = await service.get(id)
        return response
    }),
    deleteCountry: createAsyncThunk(`${sliceName}/deleteCountry`, async (id) => {
        await service.delete(id)
        console.log('delete');
        return id
    }),
}

export default thunks;
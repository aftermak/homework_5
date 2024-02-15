import axios from 'axios';
const API = 'https://65c76709e7c384aada6e78a6.mockapi.io/countries'

const country = {
  get: (id) => axios(API + (id ? `/${id}` : ``)).then(({data}) => data),
  delete: (id) => axios.delete(API + `/${id}`).then(({data}) => data),
  patch: (id, obj) => axios.patch(API + `/${id}`, obj).then(({data}) => data),
  post: (obj) => axios.post(API, obj).then(({data}) => data)
};

export default country;
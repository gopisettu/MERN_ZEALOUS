import axios from 'axios';

const url = '/hospitalDetails';

export const callPost = async (object) => {
  const response = await axios.get(`${url}/get/status/`, { params: object });
  return response;
}

export const filter = async (object) => {
  const response = await axios.get(`${url}/get/status/`,{ params: object });
  return response;
}

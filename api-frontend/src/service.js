import axios from 'axios';

const url = '/hospitalDetails';

export const callPost = async (object) => {
    const response = await axios.post(`${url}/post`, object);
    return response;
}

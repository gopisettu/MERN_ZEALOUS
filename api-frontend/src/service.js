import axios from 'axios';

const url = 'http://localhost:8765/hospitalDetails';

export const callPost = async (object) => {
    const iGot = await axios.post(`${url}/post`, object);
    return iGot;
};

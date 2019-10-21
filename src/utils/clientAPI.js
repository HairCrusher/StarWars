const API_URL = 'https://swapi.co/api';

export const clientAPI = async (method, url, params = {}) => {

    try {
        let resp = await fetch(`${API_URL}/${url}`, {method: method, ...params});
        return await resp.json();
    }catch (e) {
        throw new Error(e);
    }
    
};
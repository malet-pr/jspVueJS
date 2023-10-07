import axios from 'axios';

const BASE_URL_TECH = 'http://localhost:9000/api/v1/technic/';
const BASE_URL_QUOTE = 'http://localhost:9000/api/v1/quote/';

export const GetTechAutocomplete = async (ph) => {
    try {
        const {data:response} = await axios.get(BASE_URL_TECH + 'get-by-partial-number?phrase=' + ph);
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
    }    
}

export const GetAllSources = async () => {
    try {
        const {data:response} = await axios.get(BASE_URL_QUOTE + 'get-all-sources');
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
    }    
} 



// get-by-partial-number?phrase=
// get-all-sources
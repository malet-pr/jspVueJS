import axios from 'axios';

const BASE_URL_TECH = 'http://localhost:9000/api/v1/technic/';
const BASE_URL_QUOTE = 'http://localhost:9000/api/v1/quote/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export const GetTechAutocomplete = async (ph) => {
    try {
        const {data:response} = await axios.get(BASE_URL_TECH + 'get-by-partial-number?phrase=' + ph);
        let techNumList = [];
        response.forEach(element => {
            techNumList.push(element.techNumber);
        });
        return techNumList;
    } catch (err) {
        console.log(err);
    }    
}

export const GetAllSources = async () => {
    try {
        const {data:response} = await axios.get(BASE_URL_QUOTE + 'get-all-sources');
        return response;
    } catch (err) {
        console.log(err);
    }    
} 

export const GetByFilters = async (request) => {
    try {
        const {data:response} = await axios.post(BASE_URL_QUOTE + 'get-by-filters', request);
        return response;
    } catch (err) {
        console.log(err);
    }

  }

 
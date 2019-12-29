import axios from 'axios';

/**
 * This Class/function uses axios to make an http request to retrieve candidate data from the /fetch-data API
 * endpoint and saves the response obejects to res and data.
 * @param {String} url This is the url endpoint that is being used with axios.
 * @param {Object} res This variable stores the response from the axios call to the API.
 * @param {Object} data This is the variable that stores the data object for the candidate.
 * 
 * @returns {Object} Returns the candidate data needed in order to serve it to the frontend.
 * If there is a problem retrieving this data then an error is returned.
 */

class FetchDataService {
    // GET fetchData
    static fetchData() {
        const url = 'http://localhost:3000/fetch-data';
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data
                );
            } catch(err) {
                reject(err);
            }
        })
    }
}

export default FetchDataService
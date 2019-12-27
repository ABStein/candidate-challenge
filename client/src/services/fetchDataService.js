import axios from 'axios';

const url = 'http://localhost:3000/fetch-data';

class FetchDataService {
    // GET fetchData
    static fetchData() {
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
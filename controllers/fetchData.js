const request = require('request')
const moment = require('moment')
const statusCodes = require('http-status-codes')

/**
 * This function will make an API call using the request npm package, retrieves the repsonse, 
 * and concatenates it, and sends it back through the newly created endpoint /fetch-data.
 * @param {String} url Consists of the url that is being used to make an http request. 
 * @param {String} birthday Concatenated version, with the use of moment for formatting, of the birthday retrieved from the randomuser API.
 * 
 * @returns {Object} Object that includes the concatenated version of the results retrieved from the randomuser API.
 * If however there is server error that is recieved from the API than a simple object with a message that the server
 * is down is sent back.
 */
   

const fetchData = (req, res) => {
    return new Promise((resolve, reject) => {
        const url = 'https://randomuser.me/api'
        request({ url: url, json: true}, (error, response) => {
            if (error) {
              	const tempFailResponse = {
                    message: 'Unable to connect to the server',
                };
                res.send(tempFailResponse);
                resolve(tempFailResponse);
            }

            const birthday = moment(response.body.results[0].dob.date).format('MMMM Do, YYYY')
            const tempResponse = {
                name: `${response.body.results[0].name.title} ${response.body.results[0].name.first} ${response.body.results[0].name.last}`,
                email: `${response.body.results[0].email}`,
                photo: `${response.body.results[0].picture.thumbnail}`,
                birthday: `${birthday}`,
            }
            res.status(statusCodes.OK).json(tempResponse)
            resolve(tempResponse)
        })
    })
}

module.exports = {
    fetchData
}

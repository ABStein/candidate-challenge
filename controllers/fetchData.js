const request = require('request')
const moment = require('moment')
const statusCodes = require('http-status-codes')
   

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

const request = require('request')
const moment = require('moment')
   

const fetchData = (req, res) => {
    const url = 'https://randomuser.me/api'
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            return res.send({
                message: 'Unable to connect to the server',
            })
        }
        
        const birthday = moment(response.body.results[0].dob.date).format('MMMM Do YYYY')
        return res.send({
            name: `${response.body.results[0].name.title} ${response.body.results[0].name.first} ${response.body.results[0].name.last}`,
            email: `${response.body.results[0].email}`,
            photo: `${response.body.results[0].picture.thumbnail}`,
            birthday: `${birthday}`,
        })
    })
}


module.exports = {
    fetchData
}

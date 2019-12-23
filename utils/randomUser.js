const request = require('request')
const moment = require('moment')


const url = 'https://randomuser.me/api/'

request({ url: url, json: true}, (error, response) => {
    // console.log('This is data', response.body.results[0])
    const birthday = moment(response.body.results[0].dob.date).format('MMMM Do YYYY')
    console.log({
        name: `${response.body.results[0].name.title} ${response.body.results[0].name.first} ${response.body.results[0].name.last}`,
        email: `${response.body.results[0].email}`,
        photo: `${response.body.results[0].picture.thumbnail}`,
        birthday: `${birthday}`
    })
})

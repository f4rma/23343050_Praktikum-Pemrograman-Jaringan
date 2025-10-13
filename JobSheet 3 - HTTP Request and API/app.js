const request = require('postman-request')
const url =
'http://api.weatherstack.com/current?access_key=939cf48d45d21b956d7c19990734641d&query=-0.9042099455675043,%20100.35851464969693'
request({ url: url }, (error, response) => {
//console.log(response)
const data = JSON.parse(response.body)
//console.log(data)
//console.log(data.current)
console.log(data.current.temperature)
})
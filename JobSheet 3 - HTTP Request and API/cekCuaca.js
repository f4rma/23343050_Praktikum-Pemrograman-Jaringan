const request = require('postman-request');
const urlCuaca = 'http://api.weatherstack.com/current?access_key=939cf48d45d21b956d7c19990734641d&query=-0.9042099455675043,%20100.35851464969693&units=m'
request({ url: urlCuaca, json:true}, (error, response) => {
    console.logg ('Saat ini suhu diluar mencapai ' + 
        response.body.current.temperature 
        + ' derajat celcius. Kemungkinan terjadinya hujan adalah ' 
        + response.body.current.precip + '%')
})

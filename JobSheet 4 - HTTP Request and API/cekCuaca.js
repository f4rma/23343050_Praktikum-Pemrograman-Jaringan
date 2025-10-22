const request = require('postman-request');
const urlCuaca = 'http://api.weatherstack.com/current?access_key=939cf48d45d21b956d7c19990734641d&query=-0.9042099455675043,%20100.35851464969693&units=m'
request({ url: urlCuaca, json:true}, (error, response) => {
    console.log (
        'Saat ini suhu diluar mencapai ' +
        response.body.current.temperature +
        ' derajat celcius. Kemungkinan terjadinya hujan adalah ' +
        response.body.current.precip + '%'
    );

    // Ambil deskripsi cuaca dari array weather_descriptions
    const deskripsi = (response.body.current.weather_descriptions || [])[0] || '-';
    console.log('Deskripsi cuaca: ' + deskripsi);
    // Contoh teks kustom:
    console.log(`Cuaca hari ini terasa: ${deskripsi.toLowerCase()}`);
})

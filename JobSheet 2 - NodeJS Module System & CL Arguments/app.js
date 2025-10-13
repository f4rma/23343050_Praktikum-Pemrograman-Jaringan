//const fs = require('fs')
//fs.writeFileSync('catatan.txt', 'Nama saya Raditya Putra Farma')
//fs.appendFileSync('catatan.txt', ', Saya tinggal di Padang')

//const catatan = require('./catatan.js')
//const pesan = catatan()
//console.log(pesan)

const validator = require('validator')
const ambilCatatan = require('./catatan.js')
const pesan = ambilCatatan()
console.log(pesan)
console.log(validator.isURL('https://proska.com'))
const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars');
const hbs = require('hbs')

const app = express()

//path untuk konfigurasi Express
const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

//setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

//setup direktori statis
app.use(express.static(direktoriPublic))

//halaman atau page utama
app.get('', (req, res) => {
    res.render('index',{
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Raditya Putra Farma'
    })
})
// halaman bantuan /FAQ (Frequently Asked Questions)
app.get('/bantuan', (req, res) => {
    res.render('bantuan',{
        judul: 'Halaman Bantuan',
        teksBantuan: 'ini adalah teks bantuan',
        nama: 'Raditya Putra Farma'
    })
})

app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuasa: 'Cuaca berpotensi hujan',
        lokasi: 'Padang'
    }])
})

app.get('/tentang', (req,res) =>{
    res.render('tentang',{
        judul: 'Tentang Saya',
        nama: 'Raditya Putra Farma',
    })
})

app.get('/bantuan/', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Raditya Putra Farma',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    })
})

app.use((req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Raditya Putra Farma',
        pesanKesalahan: 'Halaman tidak ditemukan.'
    })
})

app.listen(3000, () => {
    console.log('Server berjalan pada port 3000')
})




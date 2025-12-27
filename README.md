<div align="center">
  <img src="https://unp.ac.id/nfs-assets/all/images/logo_unp_white.png">

<h1>Praktikum Pemrograman Jaringan</h1>
<p>Repository ini berisi kumpulan source code, hasil implementasi, dan dokumentasi dari seluruh pengerjaan JobSheet praktikum Pemrograman Jaringan. Setiap JobSheet berisi latihan terstruktur yang bertujuan untuk memperkuat pemahaman teori melalui praktik langsung menggunakan berbagai teknologi jaringan dan web modern.</p>
</div>

<table>
<tr>
<td>
<b><pre>
<h3>
Nama                : Raditya Putra Farma
NIM                 : 23343050
Program Studi       : Informatika
Mata Kuliah         : Praktikum Pemrograman Jaringan
Kode Kelas          : INF1.62.5010
Dosen Pengampu      : Randi Proska Sandra, M.Sc
</h3>
</pre></b>
</td>
</tr>
</table>

Struktur folder dalam repository ini menggunakan format **Nomor JobSheet – Topik Pembahasan**.  
Tujuan dari penamaan ini adalah agar pengerjaan dapat diurutkan sesuai minggu perkuliahan, serta memudahkan navigasi dan pencarian materi
Di dalam setiap folder JobSheet terdapat:  
- **Source Code**: Implementasi program sesuai materi.  
- **Dokumentasi Singkat**: Penjelasan mengenai konsep utama pada JobSheet tersebut.  
- **File Pendukung**: Seperti `package.json`, konfigurasi server, atau screenshot hasil running program

<h2 id="navigator">Pemahaman Materi</h2>

> - [Job Sheet 1 - Pengenalan NodeJS](#js1)
> - [Job Sheet 2 - Javascript Essentials](#js2)
> - [Job Sheet 3 - NodeJS Module System & CL Arguments](#js3)
> - [Job Sheet 4 - HTTP Request dan API](#js4)
> - [Job Sheet 5 - Web Server dan ExpressJs](#js5)
> - [Job Sheet 6 - JSON HTTP Endpoints](#js6)
> - [Job Sheet 7 - Version Control dan App Deployment](#js7)
> - [Job Sheet 8 - MongoDB dan No-SQL Databases](#js8)
> - [Job Sheet 9 - Socket Programming](#js9)

<h2 id="js1">Job Sheet 1 - Pengenalan NodeJS</h2>


Pada JobSheet ini, dipelajari dasar-dasar Node.js, termasuk cara menjalankan file JavaScript di lingkungan Node, serta perbedaan antara Node.js dan JavaScript di browser. Praktik yang dilakukan meliputi membuat program sederhana seperti "Hello World" dan memahami proses eksekusi kode di Node.js.

<details>

```js
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});
```
<i>Membuat server HTTP sederhana yang menampilkan "Hello World".</i>
</details>

<h2 id="js2">Job Sheet 2 - Javascript Essentials</h2>


JobSheet 2 tidak memiliki folder khusus karena materinya dipelajari melalui platform Netacad. Materi yang dipelajari meliputi dasar-dasar JavaScript seperti variabel, tipe data, operator, struktur kontrol (if, for, while), fungsi, dan array. Pemahaman ini menjadi fondasi untuk pemrograman JavaScript lebih lanjut di Node.js.

<h2 id="js3">Job Sheet 3 - NodeJS Module System & CL Arguments</h2>


Materi ini membahas sistem modul di Node.js (require, module.exports), penggunaan package eksternal (seperti chalk dan validator), serta cara membaca argument dari command line (process.argv, yargs). Praktik yang dilakukan adalah membuat aplikasi catatan sederhana yang dapat menambah, menghapus, dan membaca catatan melalui perintah terminal.

<details>

```js
const { hideBin } = require('yargs/helpers')
const yargsFactory = require('yargs/yargs')
const catatan = require('./catatan.js')
const yargs = yargsFactory(hideBin(process.argv))
yargs.version('10.1.0')
yargs.command({
  command: 'tambah',
  describe: 'tambah sebuah catatan baru',
  handler: function () {
    console.log('sebuah catatan baru ditambahkan!')
  }
})
```
<i>Menggunakan yargs untuk membuat CLI dengan perintah custom, serta modularisasi kode.</i>
</details>

<h2 id="js4">Job Sheet 4 - HTTP Request and API</h2>


Pada JobSheet ini dipelajari cara melakukan HTTP request ke API eksternal menggunakan Node.js. Praktik utamanya adalah mengambil data cuaca dari API menggunakan modul seperti `postman-request`, serta memahami konsep asynchronous callback pada Node.js.

<details>

```js
const request = require('postman-request');
const urlCuaca = 'http://api.weatherstack.com/current?...'
request({ url: urlCuaca, json:true}, (error, response) => {
  console.log('Saat ini suhu diluar mencapai ' +
    response.body.current.temperature +
    ' derajat celcius. Kemungkinan terjadinya hujan adalah ' +
    response.body.current.precip + '%'
  );
});
```
<i>Melakukan HTTP request ke API cuaca dan menampilkan hasilnya.</i>
</details>

<h2 id="js5">Job Sheet 5 - Web Server and ExpressJs</h2>


Materi ini memperkenalkan framework Express.js untuk membuat web server. Dipelajari cara membuat routing, menyajikan file statis, serta menggunakan template engine Handlebars (hbs) untuk membuat tampilan dinamis. Praktik utamanya adalah membangun website sederhana dengan beberapa halaman (index, bantuan, tentang).

<details>

```js
const express = require('express')
const hbs = require('hbs')
const app = express()
app.set('view engine', 'hbs')
app.use(express.static(direktoriPublic))
app.get('', (req, res) => {
  res.render('index', { judul: 'Aplikasi Cek Cuaca', nama: 'Raditya Putra Farma' })
})
```
<i>Membuat web server dengan Express, menggunakan Handlebars untuk template, dan menyajikan file statis.</i>
</details>

<h2 id="js6">Job Sheet 6 - JSON HTTP Endpoints.js</h2>


Pada JobSheet ini, dipelajari pembuatan endpoint HTTP yang mengembalikan data dalam format JSON. Praktik utamanya adalah membuat API cuaca yang menerima parameter alamat dan mengembalikan prediksi cuaca dalam bentuk JSON, serta menghubungkan frontend dengan backend menggunakan fetch/AJAX.

<details>

```js
app.get('/infoCuaca', (req, res) => {
  if (!req.query.address) {
    return res.send({ error: 'Alamat harus disediakan!' })
  }
  geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    // ...
    res.send({ lokasi: location, prediksiCuaca: dataPrediksi })
  })
})
```
<i>Membuat endpoint API yang menerima parameter dan mengembalikan data JSON.</i>
</details>

<h2 id="js7">Job Sheet 7 - Version Control and App Deployment</h2>


Materi ini membahas penggunaan Git untuk version control, serta persiapan aplikasi untuk deployment. Praktik yang dilakukan meliputi inisialisasi repository Git, commit perubahan, membuat file .gitignore, dan menyiapkan aplikasi agar siap di-deploy ke layanan hosting seperti Heroku atau Vercel.

<details>

```js
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Server berjalan pada port ' + port)
})
```
<i>Menyiapkan aplikasi agar port bisa diatur environment (untuk deployment di platform seperti Heroku).</i>
</details>

<h2 id="js8">Job Sheet 8 - MongoDB dan No-SQL Databases</h2>


Pada JobSheet ini dipelajari dasar-dasar database NoSQL menggunakan MongoDB. Praktik yang dilakukan meliputi operasi CRUD (Create, Read, Update, Delete) pada database MongoDB menggunakan driver Node.js, serta memahami konsep koleksi dan dokumen.

<details>

```js
const { MongoClient, ObjectId } = require('mongodb');
const client = new MongoClient(url);
async function main() {
  await client.connect();
  console.log('Berhasil terhubung ke MongoDB database server');
  // operasi CRUD di sini
}
main()
```
<i>Koneksi ke MongoDB dan menjalankan operasi database secara asynchronous.</i>
</details>

<h2 id="js9">Job Sheet 9 - Socket Programming</h2>

Materi ini membahas komunikasi real-time menggunakan WebSocket dengan bantuan library socket.io. Praktik utamanya adalah membangun aplikasi chat sederhana yang memungkinkan banyak user berkomunikasi secara langsung dalam satu room, serta memahami konsep event-driven programming di Node.js.

<details>

```js
const socketio = require('socket.io')
const server = http.createServer(app)
const io = socketio(server)
io.on('connection', (socket) => {
  socket.on('join', (options, callback) => {
    socket.join(user.room)
    socket.emit('pesan', generateMessage('Admin', 'Selamat Datang!'))
  })
})
```
<i>Implementasi WebSocket dengan socket.io untuk aplikasi chat real-time.</i>
</details>




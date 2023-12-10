const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'be_2a'
});

connection.connect(err => {
    if (err) {
        console.error('Gagal menghubungkan ke database karena ', err);
        return;
    }

    console.log('Berhasil terhubung ke database');
}); 

module.exports = connection;
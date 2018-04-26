
const {Client} = require('pg');

const client = new Client({
    user: 'nxtbhdrmtemdkr',
    host: 'ec2-54-235-193-34.compute-1.amazonaws.com',
    database: 'd7mnh6m6v66c86',
    password: '1749017ae138fac1d4cc773f487d7cc74a1e586d1c9702542768ddd0ffdf7f24',
    port: 5432,
    ssl:true
});

module.exports = client;

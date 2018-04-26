var express = require('express');
var router = express.Router();
var client  = require('./db')
/* GET home page. */
router.get('/', function(req, res) {
    client.connect();
    client.query('SELECT * FROM userinfo', function(err,result){
        if(err)
        {
            console.error(err);
        }
        else
        {
            res.render('index', { results: result.rows})
        }

    });
});




module.exports = router;



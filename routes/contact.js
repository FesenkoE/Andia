var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var app = express();

app.set('view engine','ejs');

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/', function(req, res, next) {
    var name  = req.body.name;
    var mail  = req.body.email;
    var phone  = req.body.phone;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fesenkoe2018@gmail.com',
            pass: 'pass'
        }
    });

    var mailOptions = {
        from: name,
        to: 'fesenkoe2018@gmail.com',
        subject: 'Sending Email using Node.js',
        text: phone
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.render('contact', { title: 'Contact' });


});

module.exports = router;
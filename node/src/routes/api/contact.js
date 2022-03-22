var router = require('express').Router();


console.log('Contact');
// return a list of tags
router.post('/', function(req, res) {
    console.log('Dentro');

    const sgMail = require('@sendgrid/mail');
	sgMail.setApiKey('APY-KEY');
	const msg = {
	  to: req.body.to,
	  from: req.body.from,
	  subject: 'Sending with SendGrid is Fun',
	  text: 'and easy to do anywhere, even with Node.js',
	  html: '<strong>Welcome to Computer Shop</strong>',
    };
    console.log(msg);
    sgMail.send(msg, function(error, info) {
        if (error) {
          res.status('401').json({
            err: info
          });
        } else {
          res.status('200').json({
            success: true
          });
        }
      });
    
});

module.exports = router;
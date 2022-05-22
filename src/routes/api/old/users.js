var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');
var auth = require('../auth');
var stripe = require("stripe")('APY-KEY');
var Computer = mongoose.model('Computer');

router.get('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

router.put('/user', auth.required, function(req, res, next){
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    // only update fields that were actually passed...
    if(typeof req.body.user.username !== 'undefined'){
      user.username = req.body.user.username;
    }
    if(typeof req.body.user.email !== 'undefined'){
      user.email = req.body.user.email;
    }
    
    if(typeof req.body.user.image !== 'undefined'){
      user.image = req.body.user.image;
    }
    if(typeof req.body.user.password !== 'undefined'){
      user.setPassword(req.body.user.password);
    }

    if(typeof req.body.user.date_birthday !== 'undefined'){
      user.date_birthday = req.body.user.date_birthday;
    }

    if(typeof req.body.user.name !== 'undefined'){
      user.name = req.body.user.name;
    }
    if(typeof req.body.user.apellidos !== 'undefined'){
      user.apellidos = req.body.user.apellidos;
    }
    if(typeof req.body.user.dni !== 'undefined'){
      user.dni = req.body.user.dni;
    }
    return user.save().then(function(){
      return res.json({user: user.toAuthJSON()});
    });
  }).catch(next);
});

router.post('/users', function(req, res, next){
  let memorystore = req.sessionStore;
  let sessions = memorystore.sessions;
  let sessionUser;
  for(var key in sessions){
    sessionUser = (JSON.parse(sessions[key]).passport.user);
  }
    var user = new User();
    user.email = sessionUser.email;
    user.username = sessionUser.username;

    if(user){
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json('fail');
    }
})

router.post('/users/login', function(req, res, next){
  if(!req.body.user.email){
    return res.status(422).json({errors: {email: "can't be blank"}});
  }

  if(!req.body.user.password){
    return res.status(422).json({errors: {password: "can't be blank"}});
  }

  passport.authenticate('local', {session: false}, function(err, user, info){
    if(err){ return next(err); }

    if(user){
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

router.post('/users', function(req, res, next){
  var user = new User();

  user.username = req.body.user.username;
  user.email = req.body.user.email;
  user.setPassword(req.body.user.password);

  user.save().then(function(){
    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

/*----FACEBOOK----*/
router.get('/facebook', passport.authenticate('facebook', {scope: ['email', 'public_profile']}));
router.get('/auth/facebook/callback',
    passport.authenticate('facebook',
    { successRedirect: 'http://localhost:8081/#!/social', failureRedirect: 'http://localhost:8081/#!/register' }));

/*----TWITTER----*/
router.get('/api/twitter', passport.authenticate('twitter'));
router.get('/api/auth/twitter/callback',
    passport.authenticate('twitter',
    { successRedirect: 'http://localhost:8081/#!/social', failureRedirect: 'http://localhost:8081/#!/register' }));

/*----ROUTE TO RETURN SOCIAL LOGGED USER----*/
//router.get('/api/auth/success', usersController.success);

router.post("/charge" , (req, res) => {
  
    console.log(req.body.payment);
    stripe.customers.create({
       email: req.body.stripeEmail,
      source: req.body.stripeToken
    })
    .then(customer =>
      Computer.find().then(function(computer){
        console.log(computer);
        stripe.charges.create({
          amount: 322,
          description: "Sample Charge",
             currency: "eur",
             customer: customer.id
        })
        .then(
           Computer.update({ _id:req.body.payment}, {$inc:{"shop.0.stock":10}})  
          // computer.save()
        )
        console.log(computer);
      })
  
      )
    .then( charge => res.redirect('http://localhost:8081//#!/details/' + req.body.payment)
    // , res.send(toastr.success('Sucuenta se ha creado correctemente.','Bienvenido'))
      );
  });


module.exports = router;
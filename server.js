const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const passportConf = require('./config/passport')
const MongoStore = require('connect-mongo')(session)
const secret = require('./config/secret')
const User = require('./models/user')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


//DATABASE CONNECTION
mongoose.connect(secret.database,function(err,done){
  if(err){return done(err)}
  else{console.log('DATABASE CONNECTED')}
})

app.prepare()
.then(() => {
  const server = express()

  //MIDDLEWARE
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: false}))
  server.use(cookieParser())
  server.use(session({
    secret: process.env.SESSION_SECRET || secret.key,
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({url:secret.database})
  }))
  server.use(passport.initialize())
  server.use(passport.session())

  server.get('/', (req, res) => {
    if(req.user){
      return app.render(req, res, '/index', req.query)
    }else{
      res.redirect('/login');
    }
  })

  server.get('/login', (req,res) => {
    return app.render(req,res, '/login', req.query);
  })

  server.post('/login', passport.authenticate('local',{failureRedirect: '/login'}), (req,res) => {
    res.redirect('/')
  })

  server.get('/signup', (req,res) => {
    return app.render(req,res, '/signup', req.query);
  })

  server.post('/signup', (req,res) => {
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;

    User.findOne({email:req.body.email}, function(err,existingUser,done){
      if(err){return done(err)}
      if(existingUser){
        res.redirect('/signup');
      }else{
        user.save(function(err,user){
          if(err) return done(err)
          res.redirect('/login');
        })
      }
    })
  })

  server.get('/finance', (req,res) => {
    if(req.user){
      return app.render(req, res, '/finance', req.query)
    }else{
      res.redirect('/login');
    }
  })

  server.get('/addstudent', (req,res) => {
    if(req.user){
      return app.render(req,res, '/addchallan', req.query)
    }else{
      res.redirect('/login')
    }
  })

  server.post('/addstudent', (req,res) => {

  })

  server.get('/logout', (req,res) => {
    req.logout();
    res.redirect('/login');
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || secret.port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

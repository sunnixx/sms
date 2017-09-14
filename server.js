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
const Student = require('./models/student')
const multer = require('multer')
const upload = multer({dest: './static/uploads/img/'})
const morgan = require('morgan')
const moment = require('moment');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


//DATABASE CONNECTION
mongoose.connect(secret.database,{useMongoClient: true},function(err){
  if(err){console.log(err);}
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
  server.use(morgan('dev'));

  server.get('/', (req, res) => {
    if(req.user){
      return app.render(req, res, '/index', req.query)
    }else{
      res.redirect('/login');
    }
  })

  server.get('/login', (req,res) => {
    if(req.user){ res.redirect('/'); }
    else{ return app.render(req,res, '/login', req.query); }
  })

  server.post('/login', passport.authenticate('local',{failureRedirect: '/login'}), (req,res) => {
    res.redirect('/')
  })

  server.get('/signup', (req,res) => {
    if(req.user){
      res.redirect('/');
    }else{
      return app.render(req,res, '/signup', req.query);
    }
  })

  server.post('/signup', upload.single('avatar'), (req,res) => {
    
    var user = new User();

    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.profile.name = req.body.name;
    user.profile.picture = req.file.path;
    user.role = req.body.role;

    User.findOne({email:req.body.email}, function(err,existingUser,next){
      if(err){return next(err)}
      if(existingUser){
        res.redirect('/signup');
      }else{
        user.save(function(err,user){
          if(err) {console.log(err);}
          res.redirect('/login');
        })
      }
    })
  })

  server.get('/getprofile', (req,res) => {
    if(req.user){
      res.json(req.user);
    }else{
      res.redirect('/login');
    }
  });

  server.post('/profile', (req,res) => {
    
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

  server.post('/addchallan', (req,res) => {
    var student = new Student();

    student.fname = req.body.fname;
    student.lname = req.body.lname;
    student.grade = req.body.grade;
    student.guardian = req.body.guardian
    student.amount = req.body.amount;
    student.gender = req.body.genderRadio;
    student.issueDate = req.body.issueDate;
    student.dueDate = req.body.dueDate;
    student.feeMonth = req.body.feeMonth;
    student.admissionFee = req.body.admissionFee;
    student.rollNo = req.body.rollNo;
    student.securityDeposit = req.body.securityDeposit;
    student.annualFee = req.body.annualFee;
    student.course = req.body.course;
    student.arrears = req.body.arrears;
    student.bDuplicateChallan = req.body.bDuplicateChallan;

    
    student.save((err,student) => {
      if(err){console.error("Error: ",err)}
      else{res.redirect('/finance')}
    })
  })

  server.get('/allstudents', (req,res) => {
    if(req.user){
      Student.find({}, function(err,student,done){
        if(err){return done(err)}
        else{
          res.json(student);
        }
      }).catch((err)=>{
        console.log(err);
      });
    }else{
      res.redirect('/')
    }
  })

  server.get('/Send_ChallanData',(req,res)=>{

    if(req.user){
      Student.find({rollNo : req.query.rollNo}, function(err,student,done){
        if(err){return done(err)}
        else{
          res.json(student);
          Query_RollNo = '';
        }
      }).catch((err)=>{
        console.log(err);
      });
    }else{
      res.redirect('/')
    }
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
    console.log('> Ready on http://localhost:' + (process.env.PORT || secret.port))
  })
})

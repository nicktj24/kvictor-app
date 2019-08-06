const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

const dotenv = require('dotenv');
dotenv.config();

// View Engine Setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware Setup
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Static Folder Setup (like css, js, images folder etc..)
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
  // res.render('/');
  res.render('index', {layout: false});
});

app.get('/about-us',(req, res) => {
  res.render('about-us', {layout: false});
});

app.get('/contact',(req, res) => {
  res.render('contact', {layout: false});
});

app.get('/services',(req, res) => {
  res.render('services', {layout: false});
});

app.get('/portfolio',(req, res) => {
  res.render('portfolio', {layout: false});
});

app.get('/careers',(req, res) => {
  res.render('careers', {layout: false});
});

app.get('/careers/mean-developer',(req, res) => {
  res.render('junior-mean-developer', {layout: false});
});
app.get('/careers/frontend-engineer',(req, res) => {
  res.render('frontend-engineer', {layout: false});
});
app.get('/careers/mern-developer',(req, res) => {
  res.render('mern-stack-developer', {layout: false});
});


app.post('/send', (req, res) => {
  console.log(req.body);
  const output =
      ` <p>You have new contact message from KVICTOR Website</p>
        <h3>CONTACT DETAILS</h3>
        <ul>
          <li>Name    -> ${req.body.name}</li>
          <li>Email   -> ${req.body.email}</li>
          <li>Phone   -> ${req.body.phone}</li>
          <li>Message -> ${req.body.message}</li>
        </ul> `;
  // Nodemailer Code Below here
      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'patsy.murray@ethereal.email',
        pass: 'BDJnAfbC1sdCfUHM7N'
      }
    });

    // send mail with defined transport object
     transporter.sendMail({
      from: '"KVICTOR PVT LTD" <patsy.murray@ethereal.email>', // sender address
      to: "patsy.murray@ethereal.email", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
      },(error, info) => {
      if(error){
        return console.log(error);
      }

      res.render('contact', { msg:'Message sent successfully.'});

    });
  // Nodemailer Code Ends here

});

app.use(function(req, res, next){
  res.status(404);

  res.format({
    html: function () {
      res.render('404', { url: req.url })
    },
    json: function () {
      res.json({ error: 'Not found' })
    },
    default: function () {
      res.type('txt').send('Not found')
    }
  })
});

app.listen(3000, ()=> {
  console.log('Server started at port 3000');
});

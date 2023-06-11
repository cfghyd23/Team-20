const express = require('express');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//connect to the database and collection
const db = require('./ctt.js');
app.use(express.static(__dirname + '/public'));
app.use(cookieParser())

app.set('view engine', 'ejs')
app.get('/certificate',(req,res)=>{
    const data =  db.data().then((e)=>{
        console.log(e[0]);
        res.render('certificate',{name:e[0]["FullName"],ename:e[0]["EventName"],date:e[0]["DATE"],location:e[0]["LOCATION"]});

    });
    
});
app.get('/',(req,res)=>{
    res.render('home');
}
);
app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/signup',(req,res)=>{
    
    res.render('signup');
});

app.get('/payment',(req,res)=>{
    res.render('payment');
}
);
app.get('/usersignup',(req,res)=>{
    console.log(req.body)

    const accountSid = 'AC87de4c4b823c1809a5eea3afa102ac84'//process.env.TWILIO_ACCOUNT_SID;
const authToken = ''//process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hey u signedup into Marpus Foundation ',
     from: '+18596483281',
     to: req.query.phone,
   })
  .then(message => console.log(message.sid));
    db.iuser(req.query.username,req.query.email,req.query.password).then((e)=>{
        res.render('home');
    });

});

app.get('/events',(req,res)=>{
    res.render('event',{"events":db.getEvents()});
});

app.get('/createevent',(req,res)=>{
res.render('create');
});


app.post('/events',(req,res)=>{
db.insertEvent(req.body.url,req.body.title,req.body.des).then((e)=>{
    console.log(e);
    res.render('event');
});})

app.get('/loginuser',(req,res)=>{
    db.icheck(req.query.username,req.query.password).then((e)=>{
        if(e[0] !== undefined){
            res.cookie("username",req.query.username);
            res.redirect('/profile');
        }
        else{
            res.redirect('/login');
        }
        
    });

});



app.get('/profile',(req,res)=>{
    console.log(req.cookies["username"]);
    res.render('profile',{name:req.cookies["username"]});
});

app.get('/loginad',(req,res)=>{
    res.render('adminlogin');
});

app.get('/adminprofile',(req,res)=>{
    res.render('adminprofile');
});


app.listen(3000,()=>console.log("listening on port 3000"));
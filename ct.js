const express = require('express');
var cookieParser = require('cookie-parser')
const app = express();

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
    db.iuser(req.query.username,req.query.email,req.query.password).then((e)=>{
        res.render('home');
    });

});

app.get('/events',(req,res)=>{
    res.render('event');
});


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

app.listen(3000,()=>console.log("listening on port 3000"));
var express=require('express');
var bodyParser=require("body-parser");
var path=require("path");
var flash=require("connect-flash");
var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");
var methodOverride=require("method-override");
var passport=require("passport");
var LocalStrategy=require("passport-local");
var keys=require("./config/keys");

mongoose.connect(keys.mongokey);

var UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    phone:String
});
UserSchema.plugin(passportLocalMongoose);
var User=mongoose.model("User",UserSchema);


var port = process.env.PORT || 8000;
var app=express();
var server=app.listen(port,function(){
    console.log('listening to request on port 8000')
});

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// serve static files
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.use(require("express-session")({
  secret:"Confidential Info",
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
  res.locals.currentUser=req.user;
  res.locals.error=req.flash("error");
  res.locals.success=req.flash("success");
  next();
  });

  function isLoggedIn(req,res,next){
      if(req.isAuthenticated()){
          return next();
      }
      res.redirect("/login");
      }

var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
next();
}

app.use(allowCrossDomain);
app.set("view engine","ejs");


// ====================================================
// AUTH ROUTES
// ====================================================

app.get("/register",function(req,res){
  res.render("register.ejs");
})

app.post("/register",function(req,res){
  var newUser=new User({username:req.body.username,phone:req.body.phone});
  User.register(newUser,req.body.password,function(err,user){
      if(err){  
      return res.render("register.ejs");
      }
      passport.authenticate("local")(req,res,function(){
      
      res.redirect("/");
      })
  })
});

app.get("/login",function(req,res){
  res.render("login.ejs");
})

app.post("/login",passport.authenticate("local",{
  successRedirect:"/home",
  failureRedirect:"/login"
}),function(req,res){
  
});

app.get("/logout",function(req,res){
req.logout(); 
//   req.flash("success","logged you out");
res.redirect("/");
});

app.get("/about",(req,res)=>{
  res.render("about.ejs")
})

app.get("/contact",(req,res)=>{
res.render("contact.ejs");
})

app.get("/home",isLoggedIn,(req,res)=>{ 
  res.render("index.ejs");
});


app.get("/",(req,res)=>{
  res.render("landing.ejs");  
});
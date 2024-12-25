const express=require('express');
const session =require('express-session');
const passport=require('passport')
const connectDB=require('./config/db');
const authRoutes=require('./routes/auth');
require('dotenv').config();

const app=express();
connectDB();

// #middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized :false
    })
);
console.log('SESSION_SECRET:', process.env.SESSION_SECRET);// for logging only

app.use(passport.initialize())
app.use(passport.session())

// # passport config
require('./config/passport')//(passport); this // gives modularity nothing else 

// # route
app.use('/api/auth',authRoutes);

const PORT=process.env.PORT||4000;
app.listen(PORT,()=>{
console.log(`the server is running on port ${PORT}`)
})
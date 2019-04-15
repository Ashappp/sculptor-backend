const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');

mongoose.connect(`mongodb+srv://Alex:zxcvbnm123Qasd!@cluster0-mvpsh.mongodb.net/sculptor?retryWrites=true`,
{useNewUrlParser:true,
useCreateIndex:true
}).then(
    ()=>console.log("DB OK"),
    err => console.log(err))




app.use(logger('tiny'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use('/', express.static('public'));
app.use('/api', router);

app.listen(3000, ()=>{
    console.log('server working on port 3000');
});




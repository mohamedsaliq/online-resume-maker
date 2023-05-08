
const mongoose = require('mongoose')

//
const URL= 'mongodb+srv://mohamed-saliq:codersaliq123@cluster0.jz71ss5.mongodb.net/online-resume'
//the above code is the url to database created in mongo DB


mongoose.connect(URL,{useUnifiedTopology:true , useNewUrlParser:true })

const connection = mongoose.connection
//the below two code tells us if the mongodb is connected sucessfully or not
connection.on('connected', ()=>{console.log('Mongodb connection is sucessful')})
connection.on('error', (error)=>{console.log('error')})


/*
1) in this stage we are going to connect the mongodb database to our node js
2) create mongodb atlas account
3) create a new cluster in mongodb and create a new database and give it name as you wish
4) now connect your database to your applicationn you can use mongodb compass to connect and also there are many ways
5) install mongodb compass and a connecting database URL will be given(for here check line 5)
6) paste the url in mongodb compass app
7) create a file for database connection (in here dbConnect.js) and type the necessary connecting code
8) "const dbConnect = require('./dbConnect')" apply this code in server.js file
9) now replace the line 5 URL's last word to your database name
*/
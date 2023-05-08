
//this code can be generated just typing node-express the snippnet will come out
const express = require('express')
const app = express()
const port = 5000 //here the default value is 3000 but we changed to 5000 because our react app is running on 3000


app.use(express.json())
const userRoute= require('./routes/userRoute')
app.use('/api/user/', userRoute)


//
const dbConnect = require('./dbConnect')
// the above code must be included after sucessfully writing code inside dbConnect.js(connecting weappand mongoDB database)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*
this server.js page is created for connect nodejs and expressjs server
create a second terminal for backend
1) initialize npm int in second terminal which is created for backend
2) next install npm modules which are mongoose and express using the command npm i express mongoose
3) next create a file to connect node js and server(express.js)
4) install nodemon using the command "npm i nodemon" in terminal(second)
5) to verify idf nodemon is installed check package.json and it show the versions of nodemon
6) now in terminal enter "nodemon (your filename)" in our case  our filename is server and run
7) if our connection is sucessful you will get " example app listening on port 5000" or else it is error
8) in here we have sucessfully connected  nodejs and express js server
*/

/*
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^6.9.1",
    "nodemon": "^2.0.20",
    "react-router-dom": "^6.8.1"
  },
  "name": "resume-maker",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
*/
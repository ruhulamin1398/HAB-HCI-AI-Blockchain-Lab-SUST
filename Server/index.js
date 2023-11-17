const express = require('express');
const mongoose= require('mongoose');
const fileUpload = require('express-fileupload')
const dotenv = require("dotenv");
const UserHandler= require('./RouteHandler/UserHandler')


const UploadFileUser= require('./RouteHandler/UploadFileUser')

var cors = require('cors')
const app = express()
dotenv.config()
const port = 5000
// database connection
mongoose.connect(`mongodb+srv://sametakbo:sametakbo@cluster0.d8lte.mongodb.net/SustLeb?retryWrites=true&w=majority`)
.then(()=>{
    console.log('connection sucessuful')
})
.catch(err=>console.log(err))
app.use(express.json());
app.use(cors()) 
app.use('/User',UserHandler)

app.use('/Upload',UploadFileUser)

app.use(express.static('Uploads'))
app.use(fileUpload);
// default error handler
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
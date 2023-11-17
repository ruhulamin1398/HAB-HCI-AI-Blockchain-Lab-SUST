const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { ObjectId } = mongoose.Types;
const fs = require('fs-extra')
const UpoladSchema = require("../Scheema/UploadFIleUser");
const UserUpload= new mongoose.model("UploadFileUser", UpoladSchema);
const CheakLoginControler = require('../MiddleWears/CheakLoginControler');
const fileUpload = require('express-fileupload')
const Uploadss=  express.static('Uploads');
router.post("/Researchers", CheakLoginControler, fileUpload(), async (req, res) => {
  const file = req.files.File;
  console.log(file)
  const { date, from, to,title,authors } = req.body;

  const filepath = `${__dirname}/../UploadsTestReport/${file.name}`;
  file.mv(filepath, async (err) => {
      try {
          const newImg = fs.readFileSync(filepath);
          const encImg = newImg.toString('base64');
          const Img = Buffer.from(encImg, 'base64');

          const TestReport = new UserUpload({
              date,
              from,
              to,
               File: Img,
              title,
              authors
          });

          await TestReport.save();
          return res.status(200).json({ msg: "File Upload Successfully" });
      } catch (err) {
          return res.status(500).json({ msg: 'Failed to upload image' });
      }
  });
});


router.get("/ReportPost", async (req, res) => {
  try {
    const usernames = req.query.username.split(','); 
    console.log(usernames)
    const users = await UserUpload.find({ authors: { $in: usernames } });

    if (users && users.length > 0) {
      res.send(users);
    } else {
      res.status(404).json({
        error: "No matching records found for the provided username(s)."
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong. Please try again."
    });
  }
});

router.get("/VerifyReportPost",async(req,res)=>{
  try {  
  
    const user = await UserUpload.find({});

      // console.log(user)
      if(user&&user.length>0){
          res.send(user)
      }
      
  } catch (error) {
      res.status(500).json({
          "error": "Something Is Wrong Please Try Again"
      }); 
  }
})

router.get("/Publications", async (req, res) => {
  try {
    const authorNames = req.query.username.split(',').map(name => name.trim());
    const regexPattern = authorNames.map(name => `\\b${name}\\b`).join('|');
    const regex = new RegExp(regexPattern, 'i');

    const users = await UserUpload.find({ authors: { $regex: regex } });

    if (users && users.length > 0) {
      res.send(users);
    } else {
      res.status(404).json({
        error: "No matching records found for the provided username(s)."
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong. Please try again."
    });
  }
});

router.get("/AllPublication", async (req, res) => {
  try {
    const users = await UserUpload.find({});

    if (users && users.length > 0) {
      res.send(users);
    } else {
      res.status(404).json({
        error: "No matching records found for the provided username(s)."
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong. Please try again."
    });
  }
});
router.get("/ResearchPaper", async (req, res) => {
 
  const userId = req.query.id;
  try {
    const users = await UserUpload.find({ _id: mongoose.Types.ObjectId(userId) });

    if (users && users.length > 0) {
      res.send(users);
    } else {
      res.status(404).json({
        error: "No matching records found for the provided username(s)."
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong. Please try again."
    });
  }
});


router.get("/ReportImg",async(req,res)=>{
 
  try {  
      const user = await UserUpload.find({_id: ObjectId(req.query.id)});
     
      if(user&&user.length>0){
          res.send(user)
      }
      
  } catch (error) {
      res.status(200).json({
        "error": "Something Is Wrong Please Try Again"
      }); 
  }

   
})
router.delete('/delete/:id',async(req,res)=>{
  
  UserUpload.deleteOne({_id: req.params.id},
      (err) => {
          if (err) {
            res.status(500).json({
              error: "There was a server side error!",
            });
          } else {
            res.status(200).json({
            
              message: "Delete SUccessfully",
            });
          }
        }
      )
})


module.exports = router;
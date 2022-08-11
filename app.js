var nodemailer = require('nodemailer');
const express = require('express')
require('dotenv').config();
const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("kjkj")
})
app.post('/email',(req,res)=>{
    const{email,subject,message}=req.body
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'saddamkhan.khan705@gmail.com',
          pass: 'fptdoqbsskmhmnnd'
        }
      });
      
      var mailOptions = {
        from: 'saddamkhan.khan705@gmail.com',
        to: email,
        subject: subject,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.json({
            "action":"send successfully"
          })
        }
      });
})

const port = process.env.PORT||5000

app.listen(port,()=>{
    console.log("run server");
})
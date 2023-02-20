const nodemailer = require('nodemailer')

const msg = {
  from: 'alpha.meetlathiya@gmail.com',
  to:'foupanattovi-3053@yopmail.com',
  subject:'Nodemailer testing',
  text:'testing Our First sender'
}

nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'alpha.meetlathiya@gmail.com',
    pass:'1205@Alpha#bet!'
  },
  port:465,
  host:'smtp.gmail.com'
})
  .sendMail(msg,(err )=>{
    if(err){
      return console.log(err)
    }else{
      return console.log('Email sent')
    }
  })
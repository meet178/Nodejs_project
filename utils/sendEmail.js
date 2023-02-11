// const nodemailer = require("nodemailer");
// const {HOST,SERVICE,USER} = require("../config")


// const sendEmail = async (email, subject, text) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: HOST,
//             service: SERVICE,
//             port: 9686,
//             secure: true,
//         });

//         await transporter.sendMail({
//             from: "alpha.meetlathiya@gmail.com",
//             to: "freiwolloiquajau-7208@yopmail.com",
//             subject: subject,
//             text: text,
//         });

//         console.log("email sent sucessfully");
//     } catch (error) {
//         console.log(error, "email not sent");
//     }
// };

// module.exports = sendEmail;







// const nodemailer = require("nodemailer");

// let mailTransport = nodemailer.createTransport({
//     service:"gmail",
//     auth:{
//         user:"alpha.meetlathiya@gmail.com",
//         pass:"1205@Alpha#bet!"
//     }
// })

// let details = {
//     from:"alpha.meetlathiya@gmail.com",
//     to:"meetlathiya407@gmail.com",
//     subject:"Test The NodeMailer",
//     text:"Test Our First sender"
// }

// mailTransport.sendMail(details,(err)=>{
//     if(err)
//     {
//         console.log("Its Err",err);
//     }
//     else
//     {
//         console.log("Email sent");
//     }
// })
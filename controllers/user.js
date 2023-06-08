const sgMail = require('@sendgrid/mail')

const Message = require('./../models/message')

exports.startServer = async (req, res, next)=>{
  console.log('starting server');
  res.send({message:'server started'})
}

exports.sendEmail = async (req, res, next) => {
  const email = req.body.sentEmail;
  
  try {

    // sendEmail(email)
    const newMessage = new Message({
      fromName:email.name,
      fromEmail:email.email,
      message:email.message
    })
    await newMessage.save()
    res.statusCode = 201
    res.send({ message: 'email sent' })
  } catch (e) {
    res.statusCode = 500
    res.send({ error: 'server error' })
  }

}


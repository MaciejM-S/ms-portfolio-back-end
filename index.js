const express = require ('express')
const app = express()
// const mongoose = require("mongoose")
const cors = require ('cors')
const path = require ('path')

const mongoose = require ("mongoose");

// importowanie routera
const  userRouter = require('./routers/user')


app.use(express.json())
app.use(cors())

// uzycie routera
app.use(userRouter)


app.use((err, req, res, next)=>{
    res.status(err.statusCode||500).send()
})



const port = process.env.PORT || 3001

app.use(express.static('client/build'))


app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
  });

mongoose.connect(
    process.env.MONGO_URI
  );

app.listen(port, () => {
    console.log('the server is up on port ' + port);
})
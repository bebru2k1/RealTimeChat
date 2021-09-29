require('dotenv').config()
const express = require('express')
const app = express();
const server = require('http').createServer(app)
const cors = require('cors')
const db = require('./models')

//Middleware
app.use(cors())
app.use(express.json())

//Database
db.connect()

//Route
const userRoute = require('./controller/user.controller')
const conversationRoute = require('./controller/conversation.controller')

app.use('/v1/api/user', userRoute)
app.use('/v1/api/conversation', conversationRoute)


//Run Server
const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`App Run on PORT ${PORT}`)
})

// Socket setup
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
    }
})
io.on("connection", (socket) => {

    socket.emit('getId', socket.id)

    socket.on("sentDataClient", (data) => {
        console.log(data)
        io.emit("sentDataServer", data)
    })
});




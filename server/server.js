const app = require('express')();

const server = require('http').createServer(app)



const cors = require('cors')
app.use(cors())



app.get('/', (req, res) => {
    res.send('Hello Word')
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`App Run on PORT ${PORT}`)
})

// Socket setup
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
})
io.on("connection", (socket) => {
    socket.on('add-friend', (data) => {
        console.log(data)
    })
    console.log("Made socket connection");
});




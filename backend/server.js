const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const colors = require("colors")
const connectDB = require("./config/db")
const { errorHandler } = require("./middleware/errorMiddleware")
const cors = require('cors')
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/moments/user', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => { console.log("Server Live", port) })
const express = require("express")
const dotenv = require("dotenv")


// Load env
dotenv.config()

// Get port environment variable
const APP_PORT = process.env["APP_PORT"]


// Initialize app
const app = express()


// Run app
app.listen(APP_PORT, ()=> {
    console.log(`app running at port ${APP_PORT}`)
})



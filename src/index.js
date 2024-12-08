const express = require("express")


// Get port environment variable
const APP_PORT = process.env["APP_PORT"] | 8000


// Initialize app
const app = express()


// Run app
app.listen(APP_PORT, ()=> {
    console.log(`app running at port ${APP_PORT}`)
})



const express = require("express")
const app = express()
const layout = require("express-ejs-layouts")
const path = require("path")
const cors = require("cors")
// constantas
require('dotenv').config()

const SERVER_PORT = process.env.SERVER_PORT

// layout and ejs
app.set( 'view engine', 'ejs' )
app.set( 'views', path.join( __dirname, 'views' ) )

// middlewares
app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended:true }) )
app.use( express.static( path.join( __dirname, 'public' ) ) )
app.use( layout )

app.use( "", require("./routes/index")  )

// Listening Server
app.listen( SERVER_PORT, () => console.info(`Server is established on PORT:${ SERVER_PORT }`) )
import express from "express"
import colours from "color"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authroutes from "./routes/authRoutes.js"

//configure env
dotenv.config();


//database config
connectDB();
 
 
//react object
const app = express() 

//middleware
app.use(express.json());
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authroutes)

//rest api
app.get('/', (req, res) => {
  res.send( `<h1>what the fuck is ecommerce website</h1>`)
})
//Port 
const PORT = process.env.PORT || 8080

//run server
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`)
})
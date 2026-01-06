const express= require('express')
//react object
const app = express() 

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
const express= require('express')
//react object
const app = express() 

//rest api
app.get('/', (req, res) => {
  res.send( `<h1>Welcome to our ecommerce site</h1>`)
})
//Port 
const PORT = process.env.PORT || 8080

//run server
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`)
})
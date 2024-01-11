require('dotenv').config()
const app = require('express')()


app.get("/",(req, res) =>{
    res.json({
        Sajan:"I am from home page",
    })
    
})

app.get("/hello", (req, res) => {
    res.send("Hi everyone")
})

app.listen(process.env.PORT, (req, res)=>{
    console.log("Node js started at port 3000")
})

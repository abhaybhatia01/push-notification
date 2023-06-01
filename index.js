const express= require('express');
const app= express();

app.use(express.json())
app.use("/api",require("./routes/app.routes"))

app.listen(8080,()=>{
    console.log("ready")
})
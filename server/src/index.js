const { error } = require("console")
const express = require("express")
const fs = require("fs")

const app = express()

app.get("/",(req, res)=>{
    res.send("hello world jjjjdjdjdnjsdskdnskxnsknksnxksnslxnsnxslxnlsxnslnsldskdskdsdnsnnc,ncnx,n,nn,ncsnddksndkskkskmdskdds,mm,dms")
})

fs.readFile("package.json",(error, data)=>{
    console
})

app.listen(3000,()=>{
    console.log("server startedd at port 3000");
})
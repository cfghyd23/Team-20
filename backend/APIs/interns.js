const internsApp = require("express").Router()
const expressAynsHandler = require("express-async-handler")
const bCryptjs = require("bcryptjs") 
const jwt = require("jsonwebtoken")
const validateUser = require("./middlewares/validateUser")

internsApp.post("/addIntern",expressAynsHandler(async(request,response)=>{

    let internsDataObject = request.app.get("internsDataObject")
    let internsData = request.body
    let result = await internsDataObject.insertOne(internsData)
    response.send({message:"success"})
    
}))



module.exports = internsApp
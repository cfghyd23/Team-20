const exp = require("express")
const app = exp()
app.use(exp.json())
const path = require("path")
const cors=require('cors')

app.use(cors())


// mongo db importing and connecting
const mclient = require("mongodb").MongoClient
const DBURL = "mongodb+srv://Srikarmara20:Srikarmara20@me.mlmyhmg.mongodb.net/"

mclient.connect(DBURL)
.then((client)=>{
    const dataBaseObject = client.db("JPMC")
    const userDataObject =  dataBaseObject.collection("userData")
    app.set("userDataObject",userDataObject)

})
.catch(error =>console.log(error))


const userApp = require('./APIs/userData')


app.use("/user",userApp)

app.use((request,response,next)=>{
    response.send({error:`path ${request.url} is invalid`})
})



app.use((error,request,response,next)=>{
    response.send({message:"error occured",reason:`${error.message}`})
})



app.listen(3000,()=> console.log("port is listening"))
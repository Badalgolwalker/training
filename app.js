require("dotenv").config()
const express = require("express")
const app = express()


//db connection
require("./modals/db").connectDatabase()

// cors
const cors = require("cors");
app.use(cors({ credentials: true, origin: true }));

app.set('view engine', 'ejs');

//logger 
const logger = require("morgan")
app.use(logger("tiny"))

//body parser 
app.use(express.json())
app.use(express.urlencoded({extended:false}))





//cookie parser session 

const session = require("express-session")
const cookieparser = require("cookie-parser")
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret:process.env.secret
}))

app.use(cookieparser())

//routes
app.use("/",require("./routes/userRoute"))
app.use("/category",require("./routes/categoryroute"))
app.use("/Subcategory",require("./routes/subCategory"))
app.use("/product",require("./routes/productroute"))
app.use("/cart",require("./routes/cartroute"))
app.use("/orders",require("./routes/orderroute"))

//errorhanlder
const Errorhandler = require("./utils/errorhandler")

app.all("*",(req,res,next) =>{
  return next (new Errorhandler(`url not found ${req.url}`,404))
})

const { generaterror } = require("./middleware/error")
const { urlencoded } = require("body-parser")
app.use(generaterror)

app.listen(process.env.Port,console.log("chl gya"))
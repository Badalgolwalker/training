const mongoose = require("mongoose")

const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userModel = new mongoose.Schema(
    {
        firstname:{
            type: String,
            required: [true, "firstname is required"],
            minLength:[4,"firstname should be atleast 4 character long"]
            
        },
        lastname:{
            type: String,
            required: [true, "Last name is required"],
            minLength:[4,"First name should be atleast 4 character long"]
            
        },
        contact:{
            type: String,
            required: [true, "Contact is required"],
            maxLength:[12,"contact must not exceed 10 character"],
            minLength:[10,"COntact should be  atleast 10 character long"]
            
        },
        city:{
            type: String,
            required: [true, "city name is required"],
            minLength:[3, "city should be atleast 3 character long"]
            
        },
        gender:{
            type:String,
            enum:["Male","Female","Other"],
            required: [true, "gender is required"],

        },
        email: {
            type: String,
            unique: true,
            required: [true, "email is required"],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        password: {
            type: String,
            select: false,
            maxLength: [15, "password should not exceed more than 15 characters"],
            minLength: [6, "password should have atleast 6 characters"],
            //    match :[]
        },
     
    resetPasswordToken: {
        type:String,
        default:"0"
    },
    //     avatar:{
    //         type:Object,
    //         default:{
    //             fileId:"",
    //             url:"https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //         }

    //     },

    },
    { timestamps: true
    
}
)


userModel.pre("save",function(next){

    if(!this.isModified("password")){
        return ;
    }
    let salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password,salt)
    next()
})

userModel.methods.comparePassword = function(pass){
    return bcrypt.compareSync(pass,this.password)
  }


  userModel.methods.getjwttoken =function(){
    return jwt.sign({id:this._id},process.env.jwtSecret,{
        expiresIn:process.env.expiresIn
    })
}

const user = mongoose.model("user", userModel)
module.exports = user

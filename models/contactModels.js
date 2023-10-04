const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    name:{
        type:String,
    required:[true,"plese add the contact name="],
    },
    email:{
        type:String,
        required:[true,"Plese ad the Email no"],
   
    },

    phone:{
        type:String,
        required:[true,"Plese add the phone no"],
    },
},{timestamp:true});

module.exports=mongoose.model("Contact",contactSchema);
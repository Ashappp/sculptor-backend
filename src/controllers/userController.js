const User = require('../models/userModels');
const bcrypt = require('bcrypt');

module.exports.newUser = (req,res) => {
const data = {
    email:req.body.email,
    password:req.body.password
}
const newUser = new User(data)
newUser.save((err,doc)=>{
    if(err){
        res.json({
            success:false,
            message:err.message
        })
    }

     if(doc) res.status(201).json({
        success:true,
        message:"user created successfully",
    });

    if(!doc) res.status(204).json({
        success:false,
        message:"user not  created",
    });

});
}

module.exports.login = async (req,res) => {
    const email = req.body.email
   
      try{
        const user = await User.findOne({email},(err,user)=>{
            if(!user){
                return res.status(400).json({
                    message:"user not found"
                })
            }
            res.status(200).json({
            user:{
                id:user.id,
                token:"sdgfsdg"
            },
            'success': true,
            "message":"User in DB"
            })

      })} catch(err){
        res.json({
            'success': false,
            "message":"User don't in DB"
        })

    }}

module.exports.logout = ((req,res) => {
    res.json({
        message: "User successfully Logout"
    });
})


module.exports.updatePassword = ((req,res)=>{
    const id = req.body.id
    const password = req.body.password
    const email = req.body.email
    const user = User.findOneAndUpdate({email},{password:password},{new:true},(err,doc)=>{
        if(err) console.log(err);
        bcrypt.hash(doc.password,12,(err, hash)=>{
                if(err) return console.log(err);
                doc.password = hash
                res.json(doc.password)})
        })
    });
    
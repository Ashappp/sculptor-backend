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
    res.json(doc);
});
}

module.exports.login = async (req,res) => {
    const email = req.body.email

    const user = await User.findOne({email})
    .lean()
    .exec()
    console.log(user)
    res.status(200).send("sdfsd")
}

module.exports.logout = ((req,res) => {
    res.json({
        message: "User successfully Logout"
    });
})


module.exports.updatePassword = ((req,res)=>{
    const id = req.body.id
    const user = User.findByIdAndUpdate({ _id: id },{password:'sdf34342'},{new:true},(err,doc)=>{
        if(err) console.log(err);
        bcrypt.hash(doc.password,12,(err, hash)=>{
                if(err) return console.log(err);
                doc.password = hash
                res.json(doc.password)})
        })
    });
    
const User = require('../models/userModels');

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

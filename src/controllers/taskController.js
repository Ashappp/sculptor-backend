const Goal = require('../models/goalModal');


module.exports.updateTask = (req,res)=> {
   
    const id = "5cb5d2e38efc66158ceaf2d0";
    const taskElementId = "5cb5d2e38efc66158ceaf2d3"
    Goal.updateOne(
        { _id: id,"goalTasks._id":taskElementId},
        { $set:{"goalTasks.$.taskTitle": "PIHAEM 1"}  },
        {new:true,upsert:true},
        (err,doc)=>{
            if(err){ return console.log(err)}
            console.log(doc);
            res.json(doc)
        }
        )
}



module.exports.addTask =  async (req,res)=>{
    try{
       const goal = new Goal(req.body);
       await goal.save();
        res.json({
            success:true,
            message:"ok"
        })
    } catch(err){
        res.json({
            success:false,
            message:"no"
        })
    }
};


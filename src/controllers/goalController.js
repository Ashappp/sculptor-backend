const Goal = require("../models/goalModal.js")

module.exports.createNewGoal = async (req,res)=>{
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

module.exports.getAllGoalsByUserId = async (req,res)=>{
try{
    const Id = req.body.Id;
    const userGoals = await Goal.find({ownerId:Id});
    if(!userGoals){
        res.status(404).json({
            success:false,
            message:"not fave data"
        })
    }
    console.log(userGoals);
    res.json(userGoals)
} catch(err){
    res.status(500).send(err)
}
};

module.exports.deleteGoal = async(req,res)=>{
try{
const goalToDelete = await Goal.findByIdAndDelete(req.body.id);
res.send(goalToDelete)
} catch(err){
    res.send(err)
}
};

module.exports.updateGoal = async(req,res)=>{
    const goalId = req.body.goalId;
    const tasks = req.body.task;
    try{
        const updateGoal = await Goal.findByIdAndUpdate(goalId,{$push:{goalTasks:tasks}},{new:true})
        res.status(202).json(updateGoal)
    } catch(err){
        res.json(err)
    }
}

const {bollywood,technology,hollywood,food,fitness, home} = require('../dummyData')

const technologyController= (req,res)=>{
    return res.send(technology)
}

const hollywoodController= (req,res)=>{
    return res.send(hollywood)
}

const bollywoodController= (req,res)=>{
    
    return res.send(bollywood)
}

const foodController= (req,res)=>{
    return res.send(food)
}

const fitnessController= (req,res)=>{
    return res.send(fitness)
}

const homeController= (req,res)=>{
    return res.send(home)
}


module.exports={technologyController,hollywoodController,bollywoodController,foodController,fitnessController,homeController}
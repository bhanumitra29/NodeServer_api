const {technologyController,hollywoodController,bollywoodController, foodController, fitnessController, homeController} = require('../NODE 2/controller/categoeryController')
const categoryRouter = require('express').Router();
categoryRouter.get('/technology',technologyController)
categoryRouter.get('/hollywood',hollywoodController)
categoryRouter.get('/bollywood',bollywoodController)
categoryRouter.get('/food',foodController)
categoryRouter.get('/fitness',fitnessController)
categoryRouter.get('/home',homeController)

module.exports = {categoryRouter};
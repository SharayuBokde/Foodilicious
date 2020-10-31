const express = require('express');
const authController = require('../controllers/auth');
const dataController = require('../controllers/data');
const FBAuth = require('../FBAuth');

const router = express.Router();

router.post('/register',authController.register);
router.post('/login',authController.login);
router.get('/subCategory/:id',dataController.subCategory);
router.post('/addReview', dataController.addReview);
router.get('/viewReview/:id', dataController.viewReview);
router.get('/UserReviews/:id', dataController.allUserReviews);
router.get('/RestaurantReviews/:id', dataController.allRestaurantReviews);
router.get('/allReviews', dataController.allReviews);
module.exports = router; 

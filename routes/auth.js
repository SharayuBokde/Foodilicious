const express = require('express');
const authController = require('../controllers/auth');
const dataController = require('../controllers/data');
const FBAuth = require('../FBAuth');

const router = express.Router();

router.post('/register',authController.register);
router.post('/login',authController.login);
router.get('/subCategory/:id',dataController.subCategory);
router.post('/postReview', dataController.postReview);
router.get('/getReview/:id', dataController.getReview);
module.exports = router; 
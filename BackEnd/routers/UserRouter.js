const express = require('express');
const router = express.Router();
const user = require('../controllers/UserController');


router.post('/signup',user.signup);
router.post('/signin',user.signin);
router.get('/details',user.UserDetails);
router.get('/list',user.UserList);

module.exports = router;
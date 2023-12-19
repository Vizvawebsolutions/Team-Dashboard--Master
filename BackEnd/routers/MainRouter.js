const express = require('express');
const router = express.Router();
const userRoute = require('../routers/UserRouter');
const candidateRoute = require('../routers/CandidateRouter');
const adminRoute = require('../routers/AdminRouter');

router.use('/user',userRoute);
router.use('/candidate',candidateRoute);
router.use('/admin',adminRoute);


module.exports = router
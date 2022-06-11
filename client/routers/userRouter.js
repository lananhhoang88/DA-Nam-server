const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl.js');

router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)

module.exports = router;
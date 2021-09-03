const express = require('express');

const router = express.Router()
const user = require('../controllers/user.controller')
const travel = require('../controllers/travel.controller')
const event = require('../controllers/travelEvent.controller')
const secure = require('../middlewares/secure.mid')
const travels = require('../middlewares/travel.mid')

router.post('/register', secure.isNotAuthenticated, user.create)
router.post('/login', secure.isNotAuthenticated, user.login)
router.post('/logout', secure.isAuthenticated, user.logout)
router.patch('/me', secure.isAuthenticated, user.edit)
router.get('/user/:id', secure.isAuthenticated, user.profile)

router.post('/my-travels', travel.create)
router.get('/my-travels', travels.areOwned, travel.list)
router.get('/travels', secure.isAuthenticated, travel.listAll)
router.get('/my-travels/:id', travels.exits, travel.detail)
router.patch('/my-travels/:id', travels.exits, travels.isOwned, travel.edit)
router.delete('/my-travels/:id', travels.exits, travels.isOwned, travel.delete)

router.post('/my-travels/:id', travels.exits, event.create)



module.exports = router
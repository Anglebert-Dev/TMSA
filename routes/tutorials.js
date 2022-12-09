const { Router } = require('express')
const express = require('express')


const {
    deleteTutorial,
    deleteAllTutorials,
    updateTutorial,
    createTutorial ,
    findOneTutorial , 
    findAllTutorials , 
    findAllPublishedTutorials,
} = require('../controllers/tutorial.controller')

const router = express.Router()

router
.route('/tutorial')
.get(findAllTutorials)
.post(createTutorial)
.delete(deleteAllTutorials)

router
.route('/tutorial/:id')
.delete(deleteTutorial)
.put(updateTutorial)

router
.route('/tutorial/find/:id')
.get(findOneTutorial)   

router
.route('/published-tutorials')
.get(findAllPublishedTutorials)

module.exports = router
const express = require('express')
const router = require('express').Router()

router.use('/', require('./news'))
router.use('/', require('./comments'))

module.exports = router
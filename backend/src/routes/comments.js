const express = require('express')
const router = require('express').Router()


router.get('/comments/:postid', (req, res) => {
    res.json({
        text: 'Primeiro comentario',
        date: '12/03/2021',
        author: 'E quem sabe?'
        
    })
})


module.exports = router
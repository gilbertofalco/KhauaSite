const express = require('express')
const router = require('express').Router()


router.get('/news', (req, res) => {
    res.json({
        postid: 'um',
        title: 'Primeira notícia',
        subtitle: 'Este é o subtítulo',
        date: '12/03/2021',
        text: 'Conteudo da notícia',
        author: 'Gilberto Falco'
        
    })
})


module.exports = router
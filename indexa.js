const express = require('express')
const {Router} = express

const app = express()
const router = Router()

app.get('/productos', (req, res) => {
    res.send()
})














app.use('/api', router)

app.listen(process.env.PORT || 8080)
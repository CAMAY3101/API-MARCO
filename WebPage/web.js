const express = require('express')
const app = express()
const port = 3005
const axios = require('axios')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res, next) => {
    res.send('Pagina Principal Admin')
})

//Routes

const VguiaRouter = require('./src/routes/RvisitaG')
app.use('/VisitaGuiada', VguiaRouter)

const ExposRouter = require('./src/routes/Rexpo')
app.use('/Exposiciones', ExposRouter)

const CapsRouter = require('./src/routes/Rcap')
app.use('/Capsulas', CapsRouter)

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`))
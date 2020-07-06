const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) //allow any host or cloent to accsess. Need this to have a server hosted on a diferent domain, and want clients around to wrold do hit server.Might not be needed for PDB. security rist to have enabletd

app.get('/status', (req, res) => {
     res.send({
         message: "hello world!"
     })
})

app.listen(process.env.PORT || 8081)
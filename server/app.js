'use strict'
const express = require('express')
const path = require('path')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Serve built client in production (optional)
app.use('/client', express.static(path.join(__dirname, '../client')))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/documents', require('./routes/documents'))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

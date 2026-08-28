// Package imports
const app = require('express')

// Server Set up
const server = app()
const PORT = 1009
const HOSTNAME = '0.0.0.0'
server.listen(PORT, HOSTNAME, () => {
    console.log(`server is running im ${HOSTNAME} ${PORT}` )
})

let data = [
    {
        id: 1,
        name: 'Dog',
    },
    {
        id: 2,
        name: 'Cat',
    },
    {
        id: 3,
        name: 'Fish',
    },
]

server.get('/api/data', (req, res) => {
    return res.json(data)
})
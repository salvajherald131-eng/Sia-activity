// Package imports
const app = require('express')

// Server Set up
const server = app()
server.listen(1009, "192.168.2.59", () => {
    console.log('server is running...')
})
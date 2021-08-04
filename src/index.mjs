#! /usr/bin/env zx

import { createServer } from 'http'

const server = createServer()


server.listen(1337, () => {
    console.log('listening on 1337')
})
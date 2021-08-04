#! /usr/bin/env zx

import { createServer } from 'http'
import { stopAll } from './task/index.mjs'

const server = createServer()

setTimeout(() => {
    stopAll()
}, 2000000);

server.listen(1337, () => {
    console.log('listening on 1337')
})
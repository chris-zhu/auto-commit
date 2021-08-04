#! /usr/bin/env zx

import { createServer } from 'http'
import { stopAll } from './task/index.mjs'

const server = createServer()

setTimeout(() => {
    stopAll()
}, 20000);

server.listen(1337, () => {
    console.log('listening on 1337')
})
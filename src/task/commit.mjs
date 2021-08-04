#!/usr/bin/env zx

import { SimpleIntervalJob, AsyncTask } from 'toad-scheduler'
import fs from 'fs'
import path from 'path'

const config = {
    taskName: 'commit_task',
    schedule: { seconds: 8, runImmediately: true }
}

const task = new AsyncTask(config.taskName, work)
export const job = new SimpleIntervalJob(config.schedule, task)
let count = 1
async function work() {
    console.log('work start')
    await read2write()
    await handleGit()
}

export function stop() {
    job.stop()
}

/**
 * 文件读写 I/O
 */
async function read2write() {
    let data = await fs.readFileSync(path.resolve(__dirname, '../test.txt'), { encoding: 'utf-8' })
    data += `\r\n this is my ${count++} commit`
    await fs.writeFileSync(path.resolve(__dirname, '../test.txt'), data)
}

/**
 * 处理git commit push
 */
async function handleGit() {
    await $`git add .`
    await $`git commit -m 'this is my ${count} commit'`
    await $`git push`
    console.log('down')
}

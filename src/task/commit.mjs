import { SimpleIntervalJob, AsyncTask } from 'toad-scheduler'

const config = {
    taskName: 'commit_task',
    schedule: { seconds: 2, }
}

const task = new AsyncTask(config.taskName, work)
export const job = new SimpleIntervalJob(config.config, task)

async function work() {
    console.log('dosomething')
}

export function stop() {
    job.stop()
}

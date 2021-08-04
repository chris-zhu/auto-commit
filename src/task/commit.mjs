import { ToadScheduler, SimpleIntervalJob, Task } from 'toad-scheduler'



const scheduler = new ToadScheduler()

const task = new Task('commit_task', () => { console.log('task doing') })

const task2 = new AsyncTask(
    'simple task',
    () => { return db.pollForSomeData().then((result) => { /* continue the promise chain */ }) },
)


const job = new SimpleIntervalJob({ seconds: 2, }, task)
const job2 = new SimpleIntervalJob({ seconds: 2, }, task2)

scheduler.addSimpleIntervalJob(job)
scheduler.addSimpleIntervalJob(job2)

console.log(task)
console.log(job)
console.log(scheduler)

setTimeout(() => {
    scheduler.stop()
    console.log('task stop')
}, 20000);
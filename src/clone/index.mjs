#!/usr/bin/env zx

// 获取仓库列表
let [, , , user] = process.argv
user = user || process.env.npm_package_config_user
const data = await fetch(`https://api.github.com/users/${user}/repos`)
const urls = await data.json()
const repos = urls.filter(info => !info.fork).map(info => info.git_url)

console.log(repos)

// 创建文件夹
// await $`rm -rf backups`
// await $`mkdir backups`
// cd('./backups')
// 克隆拉取
// Promise.all(repos.map((url) => $`git clone ${url}`))
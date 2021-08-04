# 自动提交脚本
意味保持GitHub常绿的脚本命令

## 自动提交


## 克隆任意用户的代码仓库

### 修改配置文件
到`package.json`中切换需要克隆地址的用户名
```
"config": {
    "port": "1111",
    "user": "CHANGE YOUR GITHUB_USERNAME"
}
```

Then，使用脚本命令

```
npm run clone

// or

yarn run clone
```

### 使用脚本命令传参
通过命令传参的方式注入
```
npm run clone -- xxx // xxx is your github_username

or

yarn run clone -- xxx // xxx is your github_username

```

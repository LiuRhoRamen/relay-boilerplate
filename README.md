## 使用
克隆仓库：
```
$ git clone git@gitlab.ucloudadmin.com:jamie.liu/sf-relay-demo.git
$ cd sf-relay-demo
```
安装全部依赖：
```
$ yarn install
```
运行服务端：
```
$ yarn server
```
运行前端Dev Server：
```
$ yarn start
```
在浏览器端输入 http://localhost:3000 打开前端Dev Server，输入 http://localhost:8080 进入GraphiQL进行开发调试。

## 项目结构
````
├── client  - 前端Relay代码
│   ├── build
│   ├── index.ejs - 页面模版
│   ├── index.js - 前端JS入口
│   ├── index.less - 公共样式
│   ├── js
│   ├── public
│   └── theme.config.js
├── server  - GraphQL服务端代码
│   ├── data
│   ├── database
│   ├── index.js - Server入口
│   └── scripts
├── server-compiled -服务端编译后代码（转ES5）
│   ├── data
│   ├── database
│   ├── index.js
│   └── scripts
├── webpack.config.js
├── config.json
└── package.json
```



## 技术栈

react@16.0 + redux@3.7.2 + react-router@3.2.0 + webpack@3.10.0 + fetch@2.0.3 + less@2.7.1 + antd@3.1.3



## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，建议使用 node 最新LTS版

```
git clone https://github.com/lty0099/km 

cd react （进入当前的项目）

npm install  (安装依赖包)

npm start (运行本地开发环境)

npm run build (打包)















## 项目结构

```tree
├── .babelrc
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── _config.yml
├── _gitattributes
├── app
│   ├── actions
│   │   ├── common.js
│   │   ├── house.js
│   │   └── tabList.js
│   ├── api
│   │   ├── common.js
│   │   ├── house.js
│   │   └── index.js
│   ├── base
│   │   ├── header.js
│   │   ├── index.js
│   │   ├── nav.js
│   │   └── tabList.js
│   ├── client.js
│   ├── config.js
│   ├── history.js
│   ├── iconfont
│   │   ├── iconfont.eot
│   │   ├── iconfont.svg
│   │   ├── iconfont.ttf
│   │   └── iconfont.woff
│   ├── images
│   │   ├── default.png
│   │   ├── leftBg.jpg
│   │   └── navcontrol.png
│   ├── index.html
│   ├── middleware
│   │   ├── index.js
│   │   ├── logger.js
│   │   └── router.js
│   ├── pages
│   │   ├── chat
│   │   │   └── index.js
│   │   ├── login.js
│   │   ├── menu
│   │   │   ├── index.js
│   │   │   └── table.js
│   │   ├── register.js
│   │   └── welcome.js
│   ├── reducers
│   │   ├── common.js
│   │   ├── house.js
│   │   ├── index.js
│   │   └── tabList.js
│   ├── routes.js
│   ├── store
│   │   └── configureStore.js
│   ├── style
│   │   ├── RichEditor.less
│   │   ├── base.less
│   │   ├── im.less
│   │   └── theme.less
│   └── utils
│       ├── ajax.js
│       └── index.js
├── package-lock.json
├── package.json
├── readme.md
├── scripts
│   ├── webpack.base.config.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
└── yarn.lock



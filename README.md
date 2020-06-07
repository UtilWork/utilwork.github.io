# utilwork.github.io
About Web, Java, Security, AI and son on...

# 搭建BLOG
## 创建仓库名称：{{accunt}}.github.io
accunt: 须和账号一样
自动生成readme文件
访问https://{{accunt}}.github.io 即可展示redme的内容（Markdown格式）

## 显示index页面
要想显示index页面，需要在代码仓的最外层创建index.html文件。

# 本地启动基于nodejs的服务器
1、验证基于服务器运行的ji脚本是否可行

## 安装yarn: npm install yarn -g
设置仓库：
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

## 添加express服务器：yarn add express --save

# 安装TypeScript
yarn global add typescript

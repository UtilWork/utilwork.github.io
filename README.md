# utilwork.github.io
About Web, Java, Security, AI and son on...

# 搭建BLOG
## 创建仓库名称：{{accunt}}.github.io
accunt: 须和账号一样
自动生成readme文件
访问https://{{accunt}}.github.io 即可展示redme的内容（Markdown格式）

## 显示index页面
要想显示index页面，需要在代码仓的最外层创建index.html文件。

# 使用git命令行推送代码，ssh互信一定要注意id_rsa的名字不要变
# 本地启动基于nodejs的服务器
1、验证基于服务器运行的ji脚本是否可行

## 安装yarn: npm install yarn -g
设置仓库：
yarn config set registry https://registry.npm.taobao.org -g
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

## 添加express服务器：yarn add express --save
用express创建一个服务器（见server/express.js）,然后用node运行该文件（node ./server/express.js）。
可以将此脚本放到npm的scripts里。

# 安装TypeScript: yarn global add typescript
typescript只是进行了编码，不会进行模块加载


# 安装webpack: yarn add webpack --save
webpack的打包能力能够将ts编译后的文件打包成最终文件（该导入的模块直接加进来）
配置打包脚本：webpack.config.jss
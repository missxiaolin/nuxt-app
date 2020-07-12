# nuxt-app

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

### Nuxt.js 默认的配置涵盖了大部分使用情形，可通过 nuxt.config.js 来覆盖默认的配置，下面介绍一下nuxt.config.js文件中相关配置项。

- （1）build Nuxt.js 允许你在自动生成的 vendor.bundle.js 文件中添加一些模块，以减少应用 bundle 的体积。
- （2）css 该配置项用于定义应用的全局（所有页面均需引用的）样式文件、模块或第三方库。
-  (3）dev 该配置项用于配置 Nuxt.js 应用是开发还是生产模式。
- （4）env 该配置项用于定义应用客户端和服务端的环境变量。
- （5）generate 该配置项用于定义每个动态路由的参数，Nuxt.js 依据这些路由配置生成对应目录结构的静态文件。
- （6）head 该配置项用于配置应用默认的meta标签。
- （7）loading 该配置项用于个性化定制 Nuxt.js 使用的加载组件。
- （8）plugins 该配置项用于配置那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
- （9）modules 该配置项允许您将Nuxt模块添加到项目中。
- （10）axios 该配置项用于Axios模块的配置。
- （11）buildModules 该配置项用来开发过程中需要的模块。
- （12）mode 该配置项表明应用的渲染方式，值为universal（SRR）和single page application（SPA）。
- （13）modulesDir 该配置项允许您定义Nuxt.js应用程序的node_modules文件夹。
- （14）rootDir 该配置项用于配置 Nuxt.js 应用的根目录。
- （15）srcDir 该配置项用于配置应用的源码目录路径。
- （16）dir 此选项允许您配置Nuxt.js应用程序的自定义目录。
- （17）router 该配置项可用于覆盖 Nuxt.js 默认的 vue-router 配置。
- （18）server 此选项允许您配置Nuxt.js应用程序的服务器实例变量。
- （19）transition 该配置项用于个性化配置应用过渡效果属性的默认值。

### 移动端适配

下载 flexible.js https://github.com/amfe/lib-flexible

配置 postcss-pxtorem

~~~
cnpm install postcss-pxtorem
~~~

### 配置文件

~~~
https://github.com/nuxt-community/dotenv-module
~~~

### 运行原理

<img src="http://missxiaolin.com/gw2.png" />

### 搜索引擎优化

http://www.soshoulu.com/sousuotijiao/baidu/
https://ziyuan.baidu.com/linksubmit/index

### 明天全国哀悼日，一段css让全站变灰

~~~
body {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(1);
}
~~~

## 线上部署

<img src="http://missxiaolin.com/gs3.jpg" />

### 打包

~~~
npm run build
~~~

### 安装node_modules

~~~
npm install -g cnpm --registry=https://registry.npm.taobao.org
~~~

### 设置nginx 方向代理（记得gz压缩配置）

~~~
server{
	gzip on;
        gzip_static on;
        gzip_min_length 1k;
        gzip_buffers 16 64k;
        gzip_http_version 1.1;
        gzip_comp_level 9;
        gzip_types text/plain application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
        gzip_vary on;

	listen  80;
	server_name  域名;

	location / {
		root /Users/web/miss/nuxt-app;
		proxy_pass http://0.0.0.0:8011;
    }


}
~~~

### pm2 守护进程

### 安装pm2

~~~
cnpm i pm2 -g
~~~

### 项目创建pm2.jsom

~~~
pm2 start pm2.json
~~~

### 常用pm2 指令

~~~
pm2 start app.js # 启动应用
pm2 start app.js --name="demo" # 启动应用名为demo
pm2 start app.js --watch # 当文件发送变化自动重启应用
pm2 start script.sh # 启动 bash 脚本
pm2 list # 列出PM2启动的应用列表
pm2 show [app-name] # 显示应用的所有信息
pm2 logs # 显示所有应用的程序日志
pm2 logs [app-name] # 显示指定应用程序的日志
pm2 stop all # 停止所有的应用程序
pm2 stor 0 # 停止id为0的应用
pm2 restart all # 重启所有应用
pm2 restart 0 # 重启id为0的应用
pm2 delete all # 关闭删除所有应用
~~~

### 开启eslint检查

在nuxt.config.js的build属性下添加:

~~~
build: {
    extend (config, ctx) {
        // Run ESLint on save
        if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
        })
        }
    }
}
~~~

### 静态文件的处理

根目录下有个/static文件夹，我们希望这里面的文件可以直接通过url访问，需要在/server/index.js中加入一句：

~~~
const express = require('express')
const app = express()

app.use('/static', express.static('static'))
~~~






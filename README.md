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

### 线上部署

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


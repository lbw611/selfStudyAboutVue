<!--
 * @Author: Liangbw
 * @Date: 2022-04-06 17:38:38
 * @LastEditors: Liangbw
 * @LastEditTime: 2022-04-06 17:49:40
 * @Description: test add
-->
# StudyAboutVue
```
路由框架参照https://github.com/nickiwen/vue-permission-demo 。
```
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```

### 本地服务器3300启动
```
cd mock
node index.js
```

### 路由权限的业务
    1.定义好全部的路由地址
    2.通过用户不同像后台请求不同的用户权限数据
    3.对用户权限做对比：请求数据 == 全部的路由  取出来作为路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from "../pages/login"
import Home from "../pages/home"
import NotFound from "../pages/errorPage/404"
import Forbidden from "../pages/errorPage/403"
import Layout from "../pages/layout"

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]
/* 
    addRouter() 添加路由
*/
//准备动态加载的路由
export const DynamicRoutes = [
  {//根目录 重定向到首页
    path: "",
    component: Layout,
    name: 'container',
    redirect: "home",
    meta: {
      requiresAuth: true,//true登录后才能进入，没有这个属性就不需要登录都能进
      name: "首页"
    },
    children: [
      {
        path: "home",
        component: Home,
        name: "home",
        meta: {
          //meta里的name用于匹配规则
          name: "首页",
          icon: "icon-name"
        }
      }
    ]
  },
  {
    path: "/403",
    component: Forbidden
  },
  {
    path: "*",
    component: NotFound
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

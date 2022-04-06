/* 权限处理 */
import router from "./index"
import store from "../store/index"

router.beforeEach((to, from, next) => {
    //判断是否登录
    if (!store.state.UserToken) {
        //未登录,判断要去的页面是否需要登录，判断meta中的requiresAuth
        if (to.matched.length > 0 && !to.matched.some(record => record.meta.requiresAuth)) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        //已经登录 ，需要判断路由访问权限
        if (!store.state.permission.permissionList) {
            //没有权限就需要获取权限
            store.dispatch('permission/FETCH_PERMISSION').then(() => {
                next({ path: to.path })
            })
        } else {
            // store存在权限
            if (to.path !== "/login") {
                next();
            } else {
                console.log(from);
                next(from.fullPath)
            }
        }
    }
})
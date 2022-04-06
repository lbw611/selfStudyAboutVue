//获取后台的权限数据
import { fetchPermission } from "../../api/index"
import router, { DynamicRoutes } from "../../router/index"
import dynamicRouter from "../../router/dynamic-router"
import { recursionRouter, setDefaultRoute } from "../../utils/recursion-router"
export default {
    //指定适用范围
    namespaced: true,
    state: {
        permissionList: null,
        siderbarMenu: [],//导航菜单
        currentMenu: "",//高亮菜单
    },
    getters: {
    },
    mutations: {
        //设置权限
        SET_PERMISSION(state, routes) {
            state.permissionList = routes
        },
        CLEAR_PERMISSION(state) {
            state.permissionList = null
        },
        // 设置菜单
        SET_MENU(state, menu) {
            state.siderbarMenu = menu;
        },
        CLEAR_MENU(state) {
            state.siderbarMenu = []
        }
    },
    //异步访问
    actions: {
        async FETCH_PERMISSION({ commit, state }) {
            let permissionList = await fetchPermission()
            //筛选
            let routes = recursionRouter(permissionList, dynamicRouter);
            //因为{ DynamicRoutes }是根目录，所有页   
            let MainContainer = DynamicRoutes.find(v => v.path === "");
            let children = MainContainer.children;
            children.push(...routes)


            //生成菜单
            commit("SET_MENU", children);

            //设置默认路由
            setDefaultRoute([MainContainer])
            //初始化路由
            let initialRoutes = router.options.routes //也就是一进来的页面，比如login
            router.addRoutes(DynamicRoutes);
            commit("SET_PERMISSION", [...initialRoutes, ...DynamicRoutes])
        }
    }
}
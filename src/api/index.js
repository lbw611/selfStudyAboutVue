import axios from "../utils/http"
import store from "../store"

//根据用户身份 获取权限
export function fetchPermission() {
    return axios.get("/api/permission?user=" + store.state.UserToken);

}

// 需解决跨域问题
export function login(user) {
    return axios.get("/api/login?user=" + user)
}
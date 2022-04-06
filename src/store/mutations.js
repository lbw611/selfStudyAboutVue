export default {
    //使用操作  
    LOGIN_IN(state, token) {
        state.UserToken = token;
    },
    LOGIN_OUT(state) {
        state.UserToken = ""
    }
}
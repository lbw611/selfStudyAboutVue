export default {
    //读取操作
    get UserToken() {
        return localStorage.getItem('token');
    },
    set UserToken(value) {
        localStorage.setItem('token', value)
    }
}
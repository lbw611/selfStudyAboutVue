module.exports = {
    // 解决跨域问题
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3300',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development', // eslint-loader 是否在保存的时候检查  
  devServer: {
    port: 8686
  },
}

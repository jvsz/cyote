// webpack.dev.conf.js
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/cyote/' : '/',
  devServer: {
    port: 7777,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
  },
  // pluginOptions: {
  //   browserSync: {
  //     port: 7778,
  //     watchOptions: {
  //       usePolling: true,
  //     },
  //     // ... BrowserSync options
  //   },
  // },
}

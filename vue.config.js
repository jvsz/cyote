// webpack.dev.conf.js
module.exports = {
  lintOnSave: false,
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

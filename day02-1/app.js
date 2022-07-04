// app.js
App({
  onLaunch() {
    wx.getLocation({
      success(e) {
        console.log(e)
      },
      fail(e) {
        console.log(e)
      }
    })
  }
})

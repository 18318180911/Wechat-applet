// app.js
App({
  //  触发时机： 💥启动小程序时， 全局只触发一次
  //  使用场景: 获取初始数据， 如用户的地理问题， 获取用户的信息
  onLaunch: function () {
    wx.getLocation({})
  },
   // 小程序启动，或从后台进入前台显示时触发
   onShow: function() {
     console.log('显示')
   },
   // 小程序从前台进入后台时触发
   onHide: function() {
     console.log('隐藏')
   },
   onError(e) {
     console.log('15',e)
   }
})

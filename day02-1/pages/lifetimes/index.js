// pages/lifetimes/index.js
let timerId;
Page({
  data: {
    list: [],
  },
  onLoad: function() {
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
      success: (res) => {
        console.log(res)
        this.setData({list: res.data.message})
      }
    })
  },
  onReady() {
    timerId = setInterval(() => {
      console.log('的事情开始')
    }, 500)
  },
  onUnload() {
    clearInterval(timerId);
  },
  onShow() {
    console.log("显示")
  },
  onHide() {
    console.log('隐藏')
  }
})
// pages/navigator/navigator.js
Page({
  data: {
    msg: "hello",
    count: 10,
  },
  handlerTap() {
    this.setData({msg: "hi", count: 8})
  }
})
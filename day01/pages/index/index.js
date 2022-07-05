
Page({
  data: {
    count: 0,
    msg: 'hi'
  },
  btnTapHandler(e) {
    // console.log(e)
  },
  add() {
    // 调用方法
    // console.log('增加')
    this.setData({
      count: this.data.count + 1
    })
  },
  add1(e) {
    // console.log(e)
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  inputHandle(e) {
    // console.log(23, e.detail.value)
  },
  inputHandle1(e) {
    3.
    console.log(e.detail.value)
    // 4.
    this.setData({
      msg: e.detail.value
    })
  }
})

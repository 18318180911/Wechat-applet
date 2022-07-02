// event/event/index.js
Page({
  data:{
    msg: "hellow 小程序",
    count: 1,
    list: ['哈1', '哈2', '哈3']
  },
  btnFn() {
    console.log('hi')
  },
  btnFn1(e) {
    console.log(e.target.dataset.name)
    console.log(e.target.dataset.id)
  },
  "btnFn2(10)":function () {
    console.log("btnFn2(10)")
  },
  btnFn3() {
    this.setData({msg: "hellow"})
    this.setData({msg: "hellow1", count: 10})
  },
  handlerAdd() {
    this.data.list.push('儿子')
    this.setData({list: this.data.list})
  },
  handlerAdd1() {
    const { list } = this.data;
    const newList = [...list, "ha"]
    this.setData({list: newList})
  },
  handIerInput(e) {
    this.setData({msg: e.detail.value})
  },
  handlerSubmit(e) {
    console.log(this.data.msg)
  },
  handleReset() {
    this.setData({msg: ""})
  }
})

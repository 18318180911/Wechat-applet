// case/case/case.js
Page({
  data: {
    // 声明数据，绑定到value记得插值
    msg: "",
    // 声明数据
    list: ['苹果', '葡萄', '芒果']
  },
  // 监听输入事件input，将用户输入的内容更新数据
  handlerInput(e) {
    this.setData({msg: e.detail.value})
  },
  addFn() {
    const {list, msg} = this.data;
    const newList = [...list, msg]
    // 同时跟新两个数据变量
    this.setData({list: newList, msg: ""})
  }
})
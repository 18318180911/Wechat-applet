// pages/practice/practice.js
Page({
  data: {
    currentIndex: 0,
    list: ['苹果', '香蕉', '龙眼', '雪梨', '榴莲', '西瓜', '蓝莓', '草莓', '芒果']
  },
  headlerClick(e) {
    console.log(e)
    this.setData({
      currentIndex: e.target.dataset.index
    })
  }
})
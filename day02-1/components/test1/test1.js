// components/test1/test1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: String,
      value: 'hello'
    }
  },

  /**
   * 组件的初始数据
   */
  // data: {

  // },

  /**
   * 组件的方法列表
   */
  methods: {
    changFn() {
      console.log('hi')
      this.triggerEvent('hi', {name: 'lisi'})
    }
  }
})


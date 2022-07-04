Page({
  data: {
    htmlStr: '<h1 class="color" id="h1">大标题<h1>'
  },
  phoneNumber(e) {
    console.log(e)
    // 怎么拿到:e.detail.code(code:是通过加密的手机号)
  }
})

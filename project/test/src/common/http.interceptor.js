const install = (Vue, vm) => {
    // 此为自定义配置参数，具体参数见上方说明
    Vue.prototype.$u.http.setConfig({
      // 基地址
      baseUrl: 'https://api-hmugo-web.itheima.net/api/public/v1',
      // 发送请求过程中 提示文字
      loadingText: '努力加载中~',
      // 发送请求的时候 过了800毫秒 才显示加载中
      loadingTime: 800,
    });
  };
  
  export default {
    install,
  };
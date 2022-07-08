// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'
  // 引入 购物车模块
import cart from '@/store/modules/cart';
Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state:{
        //存放状态
	},
    // 子模块
    modules: {
        cart,
      },
})
export default store
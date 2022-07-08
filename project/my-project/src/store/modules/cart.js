export default {
    namespaced: true,
    state: {
      // 数组
      goodsList: [],
    },
    getters: {},
    mutations: {
        // 添加数据到购物车数组中
        cartAddGoods(state, payload) {
            state.goodsList.push(payload);
            console.log(12, state.goodsList);
        }
    },
    actions: {},
  };
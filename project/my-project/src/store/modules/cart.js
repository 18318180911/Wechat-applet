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
            // state.goodsList.push(payload);
            const index = state.goodsList.findIndex(
                (goods) => goods.goods_id === playload.goods_id
            );
            if (index !== -1) {
                state.goodsList[index].nums++;
            } else {
                // 不存在
                state.goodsList.push(playload)
            }
            console.log(12, state.goodsList);
        }
    },
    actions: {},
  };
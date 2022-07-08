export default {
    namespaced: true,
    state: {
      // 数组
      goodsList: [],
    },
    getters: {
        // 总商品的购买数量
        goodsTotalNums(state) {
            // 数组方法reduce
            return state.goodsList.reduce((s, i) => (s += i.nums), 0)
        }
    },
    mutations: {
        // 添加数据到购物车数组中
        cartAddGoods(state, payload) {
            // state.goodsList.push(payload);
            const index = state.goodsList.findIndex(
                (goods) => goods.goods_id === payload.goods_id
            );
            if (index !== -1) {
                state.goodsList[index].nums++;
            } else {
                // 不存在
                state.goodsList.push(payload)
            }
            console.log(12, state.goodsList);
        }
    },
    actions: {},
  };
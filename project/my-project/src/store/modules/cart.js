export default {
    namespaced: true,
    state: {
      // 数组
    //   goodsList: [
        goodsList: uni.getStorageSync('goodsList') || [],
    //   ],
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
             // 存一份数据到 本地存储中
            uni.setStorageSync('goodsList', state.goodsList);
        },
        // 根据id寻找对应的元素 切换选中状态
    // 对象格式
    changeGoodsChecked(state, { goods_id }) {
        /* 
        回到 vuex-cart 接收id 编写业务
        1 接收id
        2 根据id查找数组中对应元素的下标
        3 数组[下标].checked = !数组[下标].checked;
        4 存一份到本地存储中 
         */
  
        const index = state.goodsList.findIndex(
          (item) => item.goods_id === goods_id
        );
        state.goodsList[index].checked = !state.goodsList[index].checked;
        uni.setStorageSync('goodsList', state.goodsList);
      },
      // 根据id 修改购买的数量
    changeGoodsNum(state, { goods_id, unit }) {
        const index = state.goodsList.findIndex(
          (item) => item.goods_id === goods_id
        );
        state.goodsList[index].nums += unit;
        // 存一份数据到 本地存储中
        uni.setStorageSync('goodsList', state.goodsList);
      },
    },
    actions: {},
  };
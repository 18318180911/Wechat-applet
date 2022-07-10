export default {
    namespaced: true,
    state: {
      // 数组
      goodsList: uni.getStorageSync('goodsList') || [],
    },
    getters: {
      // 总商品的购买数量
      goodsTotalNums(state) {
        // 数组方法 reduce
        return state.goodsList.reduce((s, i) => (s += i.nums), 0);
      },
    },
    mutations: {
      // 添加数据到购物车数组
      cartAddGoods(state, payload) {
        /* 
        1 判断当前这个商品是否存在于数组中  数组方法 findIndex  
        2 已经存在
          获取到数据 属性 nums + 1 
        3 不存在
          数组 push 
        
         */
        // 业务后续修改
  
        const index = state.goodsList.findIndex(
          (goods) => goods.goods_id === payload.goods_id
        );
  
        if (index !== -1) {
          // 已经存在  index
          state.goodsList[index].nums++;
        } else {
          // 不存在
          state.goodsList.push(payload);
        }
  
        // console.log(state.goodsList);
  
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
      // 根据id 来删除数组对应的元素
      deleteGoods(state, { goods_id }) {
        // 1 根据id 找到 数组中对应的下标
        const index = state.goodsList.findIndex(
          (item) => item.goods_id === goods_id
        );
        // 2 数组删除元素 splice(下标,删几个)
        state.goodsList.splice(index, 1);
        // 3 存一份到本地存储中
        uni.setStorageSync('goodsList', state.goodsList);
      },
    },
    actions: {},
  };
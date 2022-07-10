<template>
  <view class="cart">
    <!-- 1 列表 -->
    <view class="cart-list" v-if="goodsList.length">
      <u-swipe-action 
			v-for="item in goodsList" :key="item.goods_id"
			:options="options"
      @click="(row, index) => {handleSwipeClick(row, index, item.goods_id);}"
		>
      <view class="cart-item" >
        <!-- 1 复选框 -->
        <view class="goods-chk">
          <u-checkbox
            :value="item.checked"
            shape="circle"
            active-color="red"
            @change="handleGoodsChange(item.goods_id)"
          ></u-checkbox>
        </view>
        <!-- 2 图片 -->
        <view class="goods-img">
          <u-image
            width="191rpx"
            height="191rpx"
            :src="item.goods_small_logo"
          ></u-image>
        </view>
        <!-- 3 信息 -->
        <view class="goods-info">
          <!-- 名称 -->
          <view class="goods-name u-line-2">{{ item.goods_name }}</view>
          <!-- 价格和数量 -->
          <view class="goods-price-num">
            <view class="goods-price">￥{{ item.goods_price }}</view>
            <view class="goods-num-tool">
              <view
                class="num-btn"
                @click="handleChangeNum(item.goods_id, -1, item.nums)"
                >-</view
              >
              <view class="goods-num">{{ item.nums }}</view>
              <view
                class="num-btn"
                @click="handleChangeNum(item.goods_id, 1, item.nums)"
                >+</view
              >
            </view>
          </view>
        </view>
      </view>
      </u-swipe-action>
    </view>
    <view v-else>
      <u-image
        width="100%"
        mode="widthFix"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huabanimg.com%2Fa4064bdab5f6c800ed664014f3eb7d13a4dd25b3138d0-hYHe07_fw658&refer=http%3A%2F%2Fhbimg.huabanimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660018046&t=e237a4269f24da4ba5c75624f25b326a"
      ></u-image>
    </view>
    <!-- 2 统计 -->
    <view class="statistics">
      <view class="all-chk">
        <u-checkbox shape="circle" active-color="red">全选</u-checkbox>
      </view>
      <view class="all-price"> 合计: <text>￥xxx</text> </view>
      <view class="all-count">
        <u-button type="error" shape="circle">去结算(xxx)</u-button>
      </view>
    </view>
  </view>
</template>

<script>
// 引入辅助函数 方便我们获取数据
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 滑动
      options: [
					{
						text: '收藏',
						style: {
							backgroundColor: '#007aff'
						}
					},
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
    }
  },
  computed: {
    // 获取vuex中的数据
    ...mapState("cart", ["goodsList"]),
  },
  methods: {
    ...mapMutations("cart", [
      "changeGoodsChecked",
      "changeGoodsNum",
      "deleteGoods",
    ]),

    // 复选框 切换选中
    handleGoodsChange(goods_id) {
      /* 
     1 获取当前被修改的商品的id 
     2 把id 传入vuex中cart模块  mutations  changeGoodsChecked
      1 回到 vuex中定义 mutations
      2 在组件中 mapMutations 来获取到 函数
      3 最后组件直接 使用 
     3 回到 vuex-cart 接收id 编写业务
      1 接收id
      2 根据id查找数组中对应元素的下标
      3 数组[下标].checked = !数组[下标].checked;
      4 存一份到本地存储中 
      */
      // console.log(goods_id);

      // 切换当前元素的选中状态
      this.changeGoodsChecked({ goods_id });
    },
    // 修改商品数量
    async handleChangeNum(goods_id, unit, nums) {
      /* 
      1 获取商品的id 和 增加和减少多少
      1.5 根据当前的数量 和点击  “-”  做额外处理！！！
         1 当数量为 1 同时 你点击 "-"  弹出窗口询问用户 是否确定删除
         2 点击取消 什么都不做
         2 点击确定  删除数据的业务！！！ 
            deleteGoods mutations
      
      
      
      2 把id和增加 或者 减少数量  发送给 vuex-cart-mutations - changeGoodsNum
      3 vuex-cart-mutations - changeGoodsNum 接收数据 goods_id 和 +1 -1 
        1 根据id 获取到数组对应的 下标
        2 数组[下标].nums += unit
        3 存一份到本地存储中 
      
       */
      // console.log(goods_id, unit);

      // uniapp 返回值 改造 返回 数组

      if (unit === -1 && nums === 1) {
        // 弹出窗口。。。
        console.log("弹出窗口。。。");
        const [err, { confirm }] = await uni.showModal({
          title: "警告",
          content: "您舍得删除吗😶",
        });
        // 判断 要删除还是不要
        confirm && this.deleteGoods({ goods_id });
      } else {
        // 数量编辑
        this.changeGoodsNum({ goods_id, unit });
      }
    },
    // 点击滑动菜单按钮
    async handleSwipeClick(row, index, goods_id) {
      console.log(row, index, goods_id)
    }
  },
};
</script>

<style lang="scss">
.cart {
  padding-bottom: 111rpx;
  .cart-list {
    .cart-item {
      display: flex;
      padding: 10rpx;
      border-bottom: 1rpx solid #ccc;
      .goods-chk {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .goods-img {
        flex: 2;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .goods-info {
        color: #666;
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .goods-price-num {
          display: flex;
          justify-content: space-between;
          .goods-price {
            color: #eb4450;
          }

          .goods-num-tool {
            width: 140rpx;
            height: 40rpx;

            display: flex;
            justify-content: space-between;
            .num-btn {
              border: 1rpx solid #ccc;
              border-radius: 50%;
              width: 40rpx;
              height: 40rpx;
              text-align: center;
              line-height: 40rpx;
            }
          }
        }
      }
    }
  }
  .statistics {
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    border-top: 1rpx solid #ccc;
    display: flex;
    align-items: center;
    padding: 15rpx;

    .all-price {
      flex: 1;
      color: #666;
    }
  }
}
</style>
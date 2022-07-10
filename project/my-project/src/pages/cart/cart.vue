<template>
  <view class="cart">
    <!-- 1 列表 -->
    <view class="cart-list">
      <view class="cart-item" v-for="(item, index) in goodsList" :key="item.goods_id">
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
          <view class="goods-name u-line-2">{{item.goods_name}}</view>
          <!-- 价格和数量 -->
          <view class="goods-price-num">
            <view class="goods-price">￥{{item.goods_price}}</view>
            <view class="goods-num-tool">
              <view class="num-btn">-</view>
              <view class="goods-num">{{item.nums}}</view>
              <view class="num-btn">+</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 2 统计 -->
    <view class="statistics">
      <view class="all-chk">
        <u-checkbox
          shape="circle"
          active-color="red"
        >全选</u-checkbox>
      </view>
      <view class="all-price"> 合计: <text>￥xxx</text> </view>
      <view class="all-count">
        <u-button
          type="error"
          shape="circle"
        >去结算(xxx)</u-button>
      </view>
    </view>
  </view>
</template>

<script>
// 引入辅助函数
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    // 获取vuex中的数据
    ...mapState("cart", ["goodsList"])
  },
  methods: {
    ...mapMutations("cart", ["changeGoodsChecked"]),
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
  }
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
        .goods-name {
        }

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
    .all-chk {
    }

    .all-price {
      flex: 1;
      color: #666;
      text {
      }
    }

    .all-count {
    }
  }
}
</style>
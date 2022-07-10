<template>
  <view class="cart">
    <!-- 1 列表 -->
    <view class="cart-list">
      <view class="cart-item">
        <!-- 1 复选框 -->
        <view class="goods-chk">
          <u-checkbox
            value=""
            shape="circle"
            active-color="red"
          ></u-checkbox>
        </view>
        <!-- 2 图片 -->
        <view class="goods-img">
          <u-image
            width="191rpx"
            height="191rpx"
          ></u-image>
        </view>
        <!-- 3 信息 -->
        <view class="goods-info">
          <!-- 名称 -->
          <view class="goods-name u-line-2"></view>
          <!-- 价格和数量 -->
          <view class="goods-price-num">
            <view class="goods-price">￥xxx</view>
            <view class="goods-num-tool">
              <view class="num-btn">-</view>
              <view class="goods-num">xxx</view>
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
export default {};
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
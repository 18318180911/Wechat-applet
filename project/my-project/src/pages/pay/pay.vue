<template>
  <view class="pay">
    <!-- 1 收货地址 -->
    <view class="address u-p-20">
      <view class="address-btn u-flex u-row-center">
        <u-button
          shape="circle"
          type="error"
          plain
          size="medium"
          :custom-style="{ backgroundColor: '#fff!important' }"
        >获取收货地址</u-button>
      </view>

      <view class="address-detail">
        <view class="address-detail">xxx</view>
        <view class="address-user">xxx</view>
      </view>
    </view>

    <u-line color="#eee"></u-line>

    <!-- 2 已选商品 -->
    <view class="goods-list u-p-15">
      <view class="goods-list-title">已选商品</view>
      <view class="goods-list-content">
        <view class="cart-item">
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
            <view class="goods-name u-line-2">xxx</view>
            <!-- 价格和数量 -->
            <view class="goods-price-num">
              <view class="goods-price">￥xxx</view>
              <view class="goods-num-tool">
                <view class="goods-vnum">Xxxx</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 2 统计 -->
    <view class="statistics">
      <view class="all-price"> 合计: <text>￥xxx</text> </view>
      <view class="all-count">
        <u-button
          type="error"
          shape="circle"
        >去支付(xxx)</u-button>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.pay {
  padding-bottom: 111rpx;
}
.cart-item {
  display: flex;
  padding: 10rpx;
  border-bottom: 1rpx solid #ccc;

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
        justify-content: flex-end;

        .goods-vnum {
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
    text {
    }
  }

  .all-count {
  }
}
</style>
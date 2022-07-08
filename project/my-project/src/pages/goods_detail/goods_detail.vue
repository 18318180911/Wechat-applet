<template>
  <view v-if="detailList">
    <!-- 1.轮播图 -->
    <u-swiper
      :list="detailList.pics"
      name="pics_big"
      height="497"
      img-mode="aspectFit"
      bg-color="#fff"
      @click="handlePreviewImage"
    ></u-swiper>
    <!-- 2.商品价格 -->
    <view class="goods-price u-p-10">￥{{ detailList.goods_price }}</view>
    <!-- 3.商品名称 -->
    <view class="goods-name u-line-2 u-m-10"
      >{{ detailList.goods_name }}</view
    >
    <!-- 图片详情 -->
     <u-parse :html="detailList.goods_introduce"></u-parse>
     <!-- 4 购物车工具栏 -->
    <view class="navigation">
      <view class="left">
        <view class="item">
          <u-icon
            name="server-fill"
            :size="40"
            :color="$u.color['contentColor']"
          ></u-icon>
          <view class="text u-line-1">客服</view>
        </view>
        <view class="item">
          <u-icon
            name="home"
            :size="40"
            :color="$u.color['contentColor']"
          ></u-icon>
          <view class="text u-line-1">店铺</view>
        </view>
        <view class="item car">
          <u-badge
            class="car-num"
            :count="9"
            type="error"
            :offset="[-3, -6]"
          ></u-badge>
          <u-icon
            name="shopping-cart"
            :size="40"
            :color="$u.color['contentColor']"
          ></u-icon>
          <view class="text u-line-1">购物车</view>
        </view>
      </view>
      <view class="right">
        <view class="cart btn u-line-1">加入购物车</view>
        <view class="buy btn u-line-1">立即购买</view>
      </view>
    </view>
  </view>
</template>

<script>
import { option } from "@dcloudio/vue-cli-plugin-uni/packages/postcss/tags";
export default {
  data() {
    return {
      // 商品详情对象
      detailList: null,
    };
  },
  computed: {
    // username() {
    //   return this.$store.state.username;
    // },
  },
  onLoad(option) {
    const goods_id = option.goods_id || 43984;
    console.log(17, goods_id);
    this.getDetail(goods_id);
  },
  methods: {
    // 获取商品详情数据
    async getDetail(goods_id) {
      const result = await this.$u.get("/goods/detail", { goods_id });
      console.log(15, result);
      this.detailList = result.message;
    },
    // 点击轮播图
    // index 点击 第几张图片 下标
    handlePreviewImage(index) {
      const urls = this.detailList.pics.map((item) => item.pics_big);
      uni.previewImage({
        // 数组构造即可
        // 需要轮播图图书数组
        urls,
        // 你要先显示谁
        current: urls[index],
      });
    },
  },
};
</script>

<style lang="scss">
.navigation {
  position: fixed;
  left: 0;
  bottom: 0;
  // 块级元素加固定或者绝对定位后  行内块 宽度 由内容撑开
  width: 100%;

  display: flex;
  margin-top: 100rpx;
  border: solid 2rpx #f2f2f2;
  background-color: #ffffff;
  padding: 16rpx 0;
  .left {
    display: flex;
    font-size: 20rpx;
    .item {
      margin: 0 30rpx;
      &.car {
        text-align: center;
        position: relative;
        .car-num {
          position: absolute;
          top: -10rpx;
          right: -10rpx;
        }
      }
    }
  }
  .right {
    display: flex;
    font-size: 28rpx;
    align-items: center;
    .btn {
      line-height: 66rpx;
      padding: 0 30rpx;
      border-radius: 36rpx;
      color: #ffffff;
    }
    .cart {
      background-color: #ed3f14;
      margin-right: 30rpx;
    }
    .buy {
      background-color: #ff7900;
    }
  }
}
</style>
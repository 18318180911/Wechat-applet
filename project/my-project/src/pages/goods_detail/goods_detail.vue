<template>
  <view v-if="goodsDetail">
    <!-- 1 轮播图 -->
    <u-swiper
      :list="goodsDetail.pics"
      name="pics_big"
      height="497"
      img-mode="aspectFit"
      bg-color="#fff"
      @click="handlePreviewImage"
    ></u-swiper>

    <!-- 2 商品价格 -->
    <view class="goods-price u-p-10">￥{{goodsDetail.goods_price}}</view>
    <view class="goods-name u-line-2 u-m-10">{{goodsDetail.goods_name}}</view>
    <!-- 3 图文详情 -->
    <!-- <rich-text :nodes="goodsDetail.goods_introduce"></rich-text>
    <view v-html="goodsDetail.goods_introduce"></view> -->
    <u-parse :html="goodsDetail.goods_introduce"></u-parse>

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
            :count="goodsTotalNums"
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
        <view
          class="cart btn u-line-1"
          @click="handleAddCart"
        >加入购物车</view>
        <view class="buy btn u-line-1">立即购买 </view>
      </view>
    </view>
  </view>
</template>

<script>
/* 
0 在商品详情页面 购物车工具栏 显示 购买的所有的商品的总数量 

1 给加入购物车按钮 绑定点击事件

2 获取到 需要购买商品信息 

3 把数据传递到 vuex中cart数组中 mutation-同步   action-异步
  辅助函数 map。。。


 */

// 引入 vuex辅助函数
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      // 商品详情对象
      goodsDetail: null,
    };
  },
  computed: {
    ...mapGetters("cart", ["goodsTotalNums"]),
  },
  onLoad(option) {
    // 43984 直接打开详情页面时候，没有人给我们传递商品id 自己构造一个 方便页面调试
    // goods_id=53945
    const goods_id = option.goods_id || 53945;

    // 根据商品id  获取商品详情
    this.getGoodsDetail(goods_id);
  },
  methods: {
    // 陌生
    ...mapMutations("cart", ["cartAddGoods"]),

    // 根据id获取商品详情
    async getGoodsDetail(goods_id) {
      const result = await this.$u.get("/goods/detail", { goods_id });
      console.log(result);
      this.goodsDetail = result.message;
    },
    // 点击轮播图
    // index 点击 第几张图片 下标
    handlePreviewImage(index) {
      // console.log(index);
      // console.log(this.goodsDetail.pics);
      const urls = this.goodsDetail.pics.map((item) => item.pics_big);
      uni.previewImage({
        // 数组构造即可
        // 需要轮播图图书数组
        urls,
        // 你要先显示谁
        current: urls[index],
      });
    },
    // 加入购物车
    handleAddCart() {
      // console.log(this.goodsDetail);
      // 需要自己添加两个属性 选中状态 和 购买的数量
      this.cartAddGoods({ ...this.goodsDetail, checked: true, nums: 1 });
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
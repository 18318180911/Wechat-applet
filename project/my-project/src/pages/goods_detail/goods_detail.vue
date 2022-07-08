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
  </view>
</template>

<script>
import { option } from "@dcloudio/vue-cli-plugin-uni/packages/postcss/tags";
export default {
  data() {
    return {
      // 商品详情对象
      detailList: [],
    };
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

<style>
</style>
<template>
  <view>
    <!-- 1.轮播图 -->
    <u-swiper
      :list="detailList.pics"
      name="pics_big"
      height="497"
      img-mode="aspectFit"
      bg-color="#fff"
    ></u-swiper>
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
  onLoad() {
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
  },
};
</script>

<style>
</style>
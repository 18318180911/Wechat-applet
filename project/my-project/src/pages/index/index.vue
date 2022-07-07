<template>
  <view>
    <!-- 1.搜索框 -->
    <YgSearch></YgSearch>
    <!-- 2.轮播图 -->
    <u-swiper :list="swiperList" name="image_src" height="340"></u-swiper>
    <!-- 导航栏 -->
    <view class="nav u-flex">
      <navigator v-for="item in catitemsList" :key="item.name" class="u-flex-1 u-p-20">
        <u-image :src="item.image_src" width="100%" mode="widthFix"></u-image>
      </navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 轮播图
      swiperList: [],
      // 导航栏
      catitemsList: []
    };
  },
  onLoad() {
    // 获取轮播图
    this.getSwiperData();
    // 获取导航栏
    this.getcatItems();
  },
  methods: {
    // 获取轮播图
    async getSwiperData() {
		const result = await this.$u.get("/home/swiperdata")
		// console.log(result)
		this.swiperList = result.message;
    },
    // 获取导航栏数据
    async getcatItems() {
		const result = await this.$u.get("/home/catitems")
		console.log(42, result)
		this.catitemsList = result.message;
    },
  },
};
</script>

<style>
</style>

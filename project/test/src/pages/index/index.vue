<template>
	<view>
		<YgSearch></YgSearch>
		<u-swiper :list="swiperList" name="image_src" height="340"></u-swiper>
	</view>
</template>

<script>
	export default {
  data() {
    return {
      swiperList: [],
    };
  },
  onLoad() {
    // 获取轮播图
    this.getSwiperData();
  },
  methods: {
    async getSwiperData() {
    //   const [err, data] = await uni.request({
    //     url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
    //   });
    //   console.log(err);
    //   console.log(data);
    //   this.swiperList = data.data.message;
	const result = await this.$u.get("/home/swiperdata")
    console.log(result)
    this.swiperList = result.message;
    },
  },
};
</script>

<style>
</style>

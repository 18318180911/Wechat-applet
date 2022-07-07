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
    <!-- 楼层 -->
    <view class="floor">
      <!-- 4.1 一层遍历 -->
      <view
        class="floor-item"
        v-for="item1 in floorDatas"
        :key="item1.floor_title.name"
      >
        <view class="floor-title">
          <!-- uview 默认宽度和高度  -->
          <u-image
            width="100%"
            mode="widthFix"
            :src="item1.floor_title.image_src"
          ></u-image>
        </view>
        <view class="product-list">
          <!-- 2 层遍历 -->
          <navigator
            v-for="item2 in item1.product_list"
            :key="item2.name"
          >
            <u-image
              width="100%"
              height="100%"
              mode="scallToFill"
              :src="item2.image_src"
            ></u-image>
          </navigator>
        </view>
      </view>
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
      catitemsList: [],
      // 楼层
      floorDatas: []
    };
  },
  onLoad() {
    // 获取轮播图
    this.getSwiperData();
    // 获取导航栏
    this.getcatItems();
    // 楼层
    this.getfloorData()
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
    // 获取楼层的数据
    
    async getfloorData() {
		const result = await this.$u.get("/home/floordata")
		console.log(54, result)
		this.floorDatas = result.message;
    },
  },
};
</script>

<style lang="scss">
.product-list {
  // 清除浮动
  overflow: hidden;
  // 公共样式
  navigator {
    // 750rpx 250rpx     100vw
    width: 232rpx;
    float: left;

    margin: 0 8.6rpx;
    margin-bottom: 8.6rpx;
  }
  // 第一个 导航标签 高度
  navigator:first-child {
    height: 386rpx;
  }
  // 后四个导航标签 的高度
  navigator:nth-last-child(-n + 4) {
    height: 188rpx;
  }
}
</style>

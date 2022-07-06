<template>
  <view>
    <!-- 搜索框 -->
    <YgSearch></YgSearch>
    <!-- 轮播图 -->
    <u-swiper :list="swiperList" name="image_src" height="340"></u-swiper>
    <!-- 导航栏模块 -->
    <view>
      <u-grid :col="4">
        <u-grid-item v-for="(item, index) in navigationList" :key="index">
          <view class="grid-text">
            <image :src="item.image_src" mode="aspectFit" class="navigation" />
          </view>
        </u-grid-item>
      </u-grid>
    </view>
    <!-- 楼层模块 -->
    <view class="box-big">
      <view class="fashion">时尚</view>
      <view class="box">
        <view>
          <u-grid :col="1" border>
            <u-grid-item>
              <view class="grid-text1">图片</view>
            </u-grid-item>
          </u-grid>
        </view>
        <view>
          <u-grid :col="2" border>
            <u-grid-item>
              <view class="grid-text2">锁头</view>
            </u-grid-item>
            <u-grid-item>
              <view class="grid-text2">沙漏</view>
            </u-grid-item>
            <u-grid-item>
              <view class="grid-text3">锁头</view>
            </u-grid-item>
            <u-grid-item>
              <view class="grid-text3">沙漏</view>
            </u-grid-item>
          </u-grid>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 获取轮播图
      swiperList: [],
      // 获取导航图片
      navigationList: [],
      // 获取楼层图片
      floorList: [],
    };
  },
  onLoad() {
    // 获取轮播图
    this.getSwiperData();
    // 获取导航图片
    this.getNavigationData();
    // 获取楼层图片
    this.getFloorData();
  },
  methods: {
    // 获取轮播图
    async getSwiperData() {
      const result = await this.$u.get("/home/swiperdata");
      //   console.log(result);
      this.swiperList = result.message;
    },
    // 获取导航图片
    async getNavigationData() {
      const result = await this.$u.get("/home/catitems");
      // console.log(45, result)
      this.navigationList = result.message;
    },
    // 获取楼层的图片
    async getFloorData() {
      const result = await this.$u.get("/home/floordata");
      console.log(58, result);
    },
  },
};
</script>

<style scoped lang="scss">
.grid-text {
  font-size: 28rpx;
  margin-top: 4rpx;
  color: $u-type-info;
}
.navigation {
  height: 140rpx;
  width: 128rpx;
}
.box-big {
  border: 1px solid blue;
}
.box {
	display: flex;
}
.fashion {
  border: 1px solid red;
  height: 59rpx;
}
.grid-text1 {
  border: 1px solid yellowgreen;
  width: 232rpx;
  height: 386rpx;
}
.grid-text2 {
  border: 1px solid green;
  width: 233rpx;
  height: 188rpx;
}
.grid-text3 {
  border: 1px solid green;
  width: 233rpx;
  height: 188rpx;
  margin-top: -25px;
}
</style>

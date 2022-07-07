<template>
  <view>
    <!-- 1.搜索框 -->
    <YgSearch></YgSearch>
    <!-- 2 内容 -->
    <view class="main">
      <view class="menu">
        <view :class="['menu-item',index===0&&'active']" v-for="(item, index) in menuList" :key="item">{{item}}</view>
      </view>
      <view class="content">2</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 左边标题数组
      menuList: []
    }
  },
  onLoad() {
    this.getCategories()
  },
  methods:{
    async getCategories() {
      const result = await this.$u.get("/categories")
      console.log(25, result)
      // this.menuList = result.message
      this.menuList = result.message.map((item) => item.cat_name);
    }
  }

}
</script>

<style lang="scss">
.main {
  height: calc(100vh - 94rpx);
  display: flex;
  .menu {
    width: 182rpx;
    overflow: auto;
    .menu-item {
      height: 70rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28rpx;
      color: #585858;
    }
    .active {
      color: #ea4350;
      position: relative;
      &::before {
        content: "";
        width: 5rpx;
        height: 60%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #ea4350;
      }
    }
  }
  .content {
    flex: 1;
    overflow: auto;
  }
}
</style>
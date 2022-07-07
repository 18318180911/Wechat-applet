<template>
  <view>
    <!-- 1.搜索框 -->
    <YgSearch></YgSearch>
    <!-- 2 内容 -->
    <view class="main">
      <view class="menu">1</view>
      <view class="content">2</view>
    </view>
  </view>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main {
  height: calc(100vh - 94rpx);
  display: flex;
  .menu {
    width: 182rpx;
    overflow: auto;
  }
  .content {
    flex: 1;
    overflow: auto;
  }
}
</style>
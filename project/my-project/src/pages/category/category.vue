<template>
  <view>
    <!-- 1.搜索框 -->
    <YgSearch></YgSearch>
    <!-- 2 内容 -->
    <view class="main">
      <!-- 左边 -->
      <view class="menu">
        <view
          :class="['menu-item', index === current && 'active']"
          v-for="(item, index) in menuList"
          :key="item"
          @click="handleSelectMenu(index)"
          >{{ item }}</view
        >
      </view>
      <!-- 右边 -->
      <view class="content">
        <view class="goods-group" v-for="item1 in contents" :key="item1.cat_id">
          <view class="goods-group-title">{{ item1.cat_name }}</view>
          <view class="goods-group-list">
            <navigator v-for="item2 in item1.children" :key="item2.cat_id" :url="'/pages/goods_list/goods_list?cid='+ item2.cat_id">
              <u-image
                width="100%"
                :src="item2.cat_icon"
                mode="widthFix"
              ></u-image>
              <view>{{ item2.cat_name }}</view>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      // 左边标题数组
      menuList: [],
      // 右边商品数组
      contents: [],
      // 控制左侧菜单选中下标
      current: 0,
    };
  },
  onLoad() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      const result = await this.$u.get("/categories");
      console.log(25, result);
      // this.menuList = result.message
      this.dataList = result.message;
      // 左边的数据
      this.menuList = this.dataList.map((item) => item.cat_name);
      // 右边的数据
      this.contents = this.dataList[0].children;
    },
    // 左侧菜单点击事件
    handleSelectMenu(index) {
      this.current = index;
      // 右侧 商品数组
      this.contents = this.dataList[index].children;
    },
  },
};
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
    .goods-group {
      .goods-group-title {
        height: 70rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28rpx;
        color: #585858;
        &::before {
          content: "/";
          margin-right: 30rpx;
        }
        &::after {
          content: "/";
          margin-left: 30rpx;
        }
      }
      .goods-group-list {
        display: flex;
        flex-wrap: wrap;

        navigator {
          width: 33.33%;
          padding: 10rpx 30rpx;
          .cat_name {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
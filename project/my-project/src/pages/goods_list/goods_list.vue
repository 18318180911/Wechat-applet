<template>
  <view>
    <!-- 1.搜索框 -->
    <YgSearch></YgSearch>
    <view>
      <u-tabs
        bar-width="100"
        active-color="#eb4450"
        inactive-color="#000000"
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
      ></u-tabs>
    </view>
    <view>
      <view v-if="current === 0" class="content">
        <navigator v-for="item in goods" :key="item.goods_id">
          <view class="goods-img">
            <u-image
              width="100%"
              mode="widthFix"
              :src="item.goods_small_logo"
            ></u-image>
          </view>
          <view class="goods-info">
            <view class="goods-name u-line-2">{{ item.goods_name }}</view>
            <view class="goods-price">￥{{ item.goods_price }}</view>
          </view>
        </navigator>
      </view>
      <view v-if="current === 1">销售内容</view>
      <view v-if="current === 2">价格内容</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchList: [],
      list: [
        {
          name: "综合",
        },
        {
          name: "销量",
        },
        {
          name: "价格",
        },
      ],
      current: 0,
      // 商品列表
      goods: [],
    };
  },
  onLoad(option) {
    const cid = option.cid || 5;
    console.log(34, cid);
    this.getGoods(cid);
  },
  methods: {
    // 获取商品列表数据
    async getGoods(cid) {
      const result = await this.$u.get("/goods/search?cid=5", { cid });
      console.log(21, result);
      this.goods = result.message.goods;
    },
    change(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss" >
.content {
  navigator {
    display: flex;
    border-top: 1rpx solid #eee;
    .goods-img {
      flex: 1;
      padding: 15rpx;
    }
    .goods-info {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .goods-name {
      }
      .goods-price {
      }
    }
  }
}
</style>
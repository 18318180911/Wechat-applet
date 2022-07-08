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
        <navigator
          v-for="item in goods"
          :key="item.goods_id"
          :url="'/pages/goods_detail/goods_detail?goods_id=' + item.goods_id"
        >
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
  // 形参来获取到 参数 cid
  onLoad(option) {
    // const cid = option.cid || 5;
    // console.log(34, cid);
    // this.getGoods(cid);
    // 全局变量 接口参数
    this.params = {
      // 否	string	关键字
      query: "",
      // 否	string	分类id
      cid: "",
      // 否	number	页码
      pagenum: 1,
      // 否	number	页容量
      pagesize: 20,
    };
    this.params.cid = option.cid || 5;
    this.getGoods();
  },
  onReachBottom() {
    if (this.total > this.goods.length) {
      console.log("还有下一页数据");
      this.params.pagenum++;
      this.getGoods();
    } else {
      console.log("没有下一页数据");
      // 弹窗提示框
      uni.showToast({ title: "没有更多数据啦", icon: "none" });
    }
  },
  //  页面下拉刷新
  async onPullDownRefresh() {
    this.params.pagenum = 1;
    this.goods = [];
    await this.getGoods();
    // 关闭下拉刷新
    uni.stopPullDownRefresh();
  },
  methods: {
    // 获取商品列表数据
    async getGoods() {
      const result = await this.$u.get("/goods/search", this.params);
      console.log(21, result);
      // this.goods = result.message.goods;
      this.goods = [...this.goods, ...result.message.goods];
      // 获取total
      this.total = result.message.total;
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
      // .goods-name {
      // }
      // .goods-price {
      // }
    }
  }
}
</style>
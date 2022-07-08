<template>
  <view>
  </view>
</template>

<script>
import { option } from '@dcloudio/vue-cli-plugin-uni/packages/postcss/tags'
export default {
    data() {
        return {
            detailList: []
        }
    },
    onLoad() {
        const goods_id = option.goods_id || 5
        console.log(17, goods_id)
        this.getDetail(goods_id)
    },
    methods: {
        // 获取商品详情数据
        async getDetail(goods_id) {
            const result = await this.$u.get("/goods/detail?cid=5", {goods_id})
            console.log(15, result)
            this.detailList = result.message.detailList
        }
    }
}
</script>

<style>

</style>
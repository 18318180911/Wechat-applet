<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view v-for="item in list" :key="item">{{item}}</view>
		<navigator url="/pages/cart/index">购物车</navigator>
		<MyHeader></MyHeader>
		<MyTest></MyTest>
		<u-button>默认按钮</u-button>
    <u-button type="primary">主要按钮</u-button>
    <u-button type="success">成功按钮</u-button>
    <u-button type="info">信息按钮</u-button>
    <u-button type="warning">警告按钮</u-button>
    <u-button type="error">危险按钮</u-button>
	</view>
</template>

<script>
// import MyHeader from '@/components/MyHeader/MyHeader'
	export default {
		// 注册组件
		// components: {
		// 	// MyHeader
		// },
		data() {
			return {
				title: 'Hello',
				list: ['a', 'b', 'c', 'd']
			}
		},
		onLoad() {
			// 发送网络请求
			uni.request({
				url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
			}).then((result) => {
				console.log(result)
			})
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

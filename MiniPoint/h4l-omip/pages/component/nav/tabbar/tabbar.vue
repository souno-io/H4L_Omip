<!--本文件由FirstUI授权予叶兴（手机号：18 798     7 915  4 9，身份证尾号：05   5  916）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Tabbar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Tabbar 标签栏，用于在不同功能模块之间进行切换。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" width="400rpx" height="84rpx" text="基础演示" bold :margin="['24rpx','0','0']"
				@click="href(1)">
			</fui-button>
			<fui-button type="gray" width="400rpx" height="84rpx" text="使用案例一" bold :margin="['24rpx']"
				@click="href(2)">
			</fui-button>
			<fui-button type="gray" width="400rpx" height="84rpx" text="使用案例二" bold @click="href(3)">
			</fui-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			href(type) {
				let url = '../tabbar-A/tabbar-A';
				if (type !== 1) {
					url = type == 2 ? '../tabbar-B/tabbar-B' : '../tabbar-C/tabbar-C'
				}

				this.fui.href(url)
			}
		}
	}
</script>

<style>
	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
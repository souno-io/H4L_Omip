<!--本文件由FirstUI授权予叶兴（手机号： 1879   8 79 154    9，身份证尾号：  0 55 9 16）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Result <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Result 结果页，在页面中组织图标、文字等内容，向用户反馈操作结果。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" width="400rpx" height="84rpx" text="成功 success" bold :margin="['24rpx']"
				@click="href(1)">
			</fui-button>
			<fui-button type="gray" width="400rpx" height="84rpx" text="警告 warning" bold @click="href(2)">
			</fui-button>
			<fui-button type="gray" width="400rpx" height="84rpx" text="失败 fail" bold :margin="['24rpx']"
				@click="href(3)">
			</fui-button>
			<fui-button type="gray" width="400rpx" height="84rpx" text="等待 waiting" bold @click="href(4)">
			</fui-button>
			<fui-button type="gray" width="400rpx" height="84rpx" text="自定义图标" bold :margin="['24rpx']"
				@click="href(5)">
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
				this.fui.href(`../result-eg/result-eg?type=${type}`)
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
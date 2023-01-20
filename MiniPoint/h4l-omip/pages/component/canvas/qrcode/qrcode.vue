<!--本文件由FirstUI授权予叶兴（手机号：  187987    91  5  49，身份证尾号： 0 559   16）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Qrcode <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Qrcode 二维码，主要用于存储网址、名片、文本信息、特定代码等信息。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-textarea__box">
				<fui-textarea v-model="val"></fui-textarea>
			</view>
			<fui-button type="gray" width="400rpx" height="84rpx" text="生成" bold :margin="['32rpx','0','64rpx']"
				@click="qrcode">
			</fui-button>
			<fui-qrcode :value="value" @ready="ready"></fui-qrcode>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: 'https://doc.firstui.cn',
				value: ''
			}
		},
		onLoad() {
			this.value = this.val
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			qrcode() {
				this.value = this.val
			},
			ready(e){
				console.log(e)
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-page__bd {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.fui-textarea__box {
		width: 100%;
	}
</style>
<!--本文件由FirstUI授权予叶兴（手机号：18 7   98 7 9  154  9，身份证尾号：  0   55916）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SingleInput <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SingleInput 单输入框，每个输入框只允许输入一个字符，可自定义样式，可设置输入长度。</view>
		</view>
		<view class="fui-page-bd">
			<fui-single-input type="number" isFocus @input="onInput" @complete="onComplete"></fui-single-input>
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
			onInput(e) {
				//e.detail.value
				console.log(e)
			},
			onComplete(e) {
				//e.detail.value
				console.log(e)
				this.fui.toast(`您输入的验证码为：${e.detail.value}`)
			},
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
</style>
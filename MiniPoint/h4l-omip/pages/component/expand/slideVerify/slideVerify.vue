<!--本文件由FirstUI授权予叶兴（手机号： 1  87  987    9 1549，身份证尾号：0559    1 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">SlideVerify <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">SlideVerify 滑动验证码，根据提示进行行为验证。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">基础使用</view>
			<fui-slide-verify @success="success" @fail="fail"></fui-slide-verify>
			<view class="fui-section__title">调整样式</view>
			<fui-slide-verify background="rgba(9, 190, 79, .05)" activeBgColor="#09BE4F" passColor="#09BE4F"
				lineColor="#FFB703" @success="success" @fail="fail"></fui-slide-verify>
			<view class="fui-section__title">重置验证</view>
			<fui-slide-verify ref="sv" @success="success" @fail="fail"></fui-slide-verify>
			<view class="fui-btn__box">
				<fui-button type="gray" width="400rpx" height="84rpx" text="重置验证" bold :margin="['40rpx']"
					@click="reset">
				</fui-button>
			</view>
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
			success() {
				this.fui.toast('验证通过！')
			},
			fail() {
				this.fui.toast('验证失败！')
			},
			reset() {
				this.$refs.sv && this.$refs.sv.reset()
				this.fui.toast('重置成功！')
			}
		}
	}
</script>

<style>
	.fui-btn__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
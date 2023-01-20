<!--本文件由FirstUI授权予叶兴（手机号： 1 8 7987  9    1 549，身份证尾号：055   91  6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-header">
			<view class="fui-title__text">PageC：模板</view>
			<view class="fui-desc__text">由于Nvue端Android下内容超出会强制隐藏，所以App-Nvue暂不支持中间凸起图标，可使用原生tabbar配置。</view>
		</view>
		<view class="fui-body">

		</view>
	</view>
</template>

<script>
	export default {
		name: "pageC",
		data() {
			return {

			};
		}
	}
</script>

<style>
	.fui-header {
		width: 100%;
		padding: 52rpx 32rpx;
		box-sizing: border-box;
	}

	.fui-body {
		width: 100%;
		padding-bottom: 64rpx;
	}


	.fui-title__text {
		text-align: left;
		font-size: 36rpx;
		font-weight: 600;
	}

	.fui-desc__text {
		margin-top: 8rpx;
		color: #B2B2B2;
		text-align: left;
		font-size: 28rpx;
		font-weight: 400;
		word-break: break-all;
	}
</style>
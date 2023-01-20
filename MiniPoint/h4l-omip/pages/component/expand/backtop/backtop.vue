<!--本文件由FirstUI授权予叶兴（手机号：1  87 98 791 5  4   9，身份证尾号： 05   5 916）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Backtop <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Backtop 回到顶部，返回页面顶部的操作按钮。</view>
		</view>
		<view class="fui-page__bd">
			<fui-button type="gray" width="400rpx" height="84rpx" text="默认样式" bold :margin="['24rpx']"
				@click="onChange(1)"></fui-button>
			<fui-button type="gray" width="400rpx" height="84rpx" text="修改图标" bold @click="onChange(2)">
			</fui-button>
			<fui-button type="gray" width="400rpx" height="84rpx" text="调整样式" bold :margin="['24rpx']"
				@click="onChange(3)">
			</fui-button>
		</view>
		<fui-backtop :scrollTop="scrollTop" :name="name" :background="background" :color="color"></fui-backtop>

		<!-- 自定义图标 设置custom 属性为true，然后在插槽内放置图标-->
		<!-- <fui-backtop custom :scrollTop="scrollTop">
			<fui-icon name="up" :size="52"></fui-icon>
		</fui-backtop> -->

		<view style="width: 2px;height: 1000px;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: 'top',
				background: '#FFFFFF',
				color: '#333333',
				scrollTop: 0
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			onChange(type) {
				if (type == 1) {
					this.name = 'top'
					this.background = '#FFFFFF'
					this.color = '#333333'
				} else if (type == 2) {
					this.name = 'turningup'
				} else {
					this.background = '#465CFF'
					this.color = '#FFFFFF'
				}
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style>
	.fui-page__bd {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
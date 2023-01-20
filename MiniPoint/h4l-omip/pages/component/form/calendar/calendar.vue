<!--本文件由FirstUI授权予叶兴（手机号：187    9  8791  5  49，身份证尾号：  05 59 1 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Calendar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Calendar 日历，用于选择日期区间。支持单选、多选、区间选择。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">单个日期选择</view>
			<fui-calendar @change="change"></fui-calendar>
			<view class="fui-section__title">多个日期选择/显示农历</view>
			<fui-calendar type="2" showLunar @change="change1"></fui-calendar>
			<view class="fui-section__title">设置默认值/范围/仅展示不可选择</view>
			<fui-calendar type="2" language="en" :value="value" disabled minDate="2021-01-01" maxDate="2023-12-31">
			</fui-calendar>
			<view class="fui-section__title">区间选择/底部弹出选择</view>
			<view class="fui-flex__center">
				<fui-button type="gray" width="400rpx" height="84rpx" text="日期区间选择" bold :margin="['48rpx','0','0']"
					@click="btnSelect"></fui-button>
			</view>
			<view class="fui-result">您的选择为：{{result}}</view>
			<fui-bottom-popup :show="show">
				<view class="fui-scroll__wrap">
					<view class="fui-calendar-title">请选择日期</view>
					<fui-calendar type="3" showLunar showBtn @change="change2"></fui-calendar>
					<view class="fui-icon__close" @tap.stop="closePopup">
						<fui-icon name="close" :size="48"></fui-icon>
					</view>
				</view>
			</fui-bottom-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//默认值，多选
				value: ['2021-01-06', '2021-01-16', '2021-01-26', '2021-02-08', '2022-01-08', '2022-01-10', '2022-01-20'],
				//区间选择默认值设置
				// value2:['2021-12-06', '2021-12-31'],
				show: false,
				result: ''
			}
		},
		onLoad() {
			uni.showLoading({
				title:'请稍候...'
			})

			setTimeout(()=>{
				uni.hideLoading()
			},500)
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			change(e) {
				console.log(e)
				this.fui.toast(e.value)
			},
			change1(e) {
				console.log(e)
				this.fui.toast(e.value.join(','))
			},
			btnSelect() {
				this.show = true
			},
			closePopup() {
				this.show = false
			},
			change2(e) {
			   this.result=JSON.stringify(e)
			   this.closePopup()
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 64rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
		box-sizing: border-box;
	}

	.fui-result {
		width: 100%;
		padding: 64rpx 32rpx 32rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		font-weight: normal;
		word-break: break-all;
	}

	.fui-scroll__wrap {
		padding-top: 30rpx;
		position: relative;
	}

	.fui-calendar-title {
		font-size: 30rpx;
		font-weight: bold;
		text-align: center;
		padding-bottom: 24rpx;
	}

	.fui-icon__close {
		position: absolute;
		top: 24rpx;
		right: 24rpx;
	}
</style>
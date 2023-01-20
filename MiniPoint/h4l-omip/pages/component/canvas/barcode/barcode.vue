<!--本文件由FirstUI授权予叶兴（手机号：1879   87     91 5 49，身份证尾号：0 5 59  1 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Barcode <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Barcode 条形码，用于展现条形码信息。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-input__box">
				<fui-input v-model="val" maxlength="13" type="number"></fui-input>
				<view class="fui-tips">请输入13位条码信息，扫描只能识别有效的条形码。</view>
			</view>
			<fui-button type="gray" width="400rpx" height="84rpx" text="生成" bold :margin="['32rpx','0','64rpx']"
				@click="barcode">
			</fui-button>
			<fui-barcode ref="barcode" :value="val"></fui-barcode>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				val: '6937147252044'
			}
		},
		onReady() {
			setTimeout(()=>{
				this.barcode()
			},50)
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			barcode() {
				if(this.val.length===13){
					this.$refs.barcode.draw()
				}else{
					this.fui.toast('请输入13位条形码！')
				}
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

	.fui-input__box {
		width: 100%;
	}
	.fui-tips{
		width: 100%;
		font-size: 24rpx;
		color: #7F7F7F;
		font-weight: 400;
		padding: 24rpx;
		box-sizing: border-box;
	}
</style>
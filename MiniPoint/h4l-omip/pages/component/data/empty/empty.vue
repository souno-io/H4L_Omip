<!--本文件由FirstUI授权予叶兴（手机号：  1  8  7  9 879 1549，身份证尾号：05 5 9   16）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title">Empty</view>
			<view class="fui-page__desc">Empty 缺省页，页面的信息内容为空或信息响应异常的状态。</view>
		</view>
		<view class="fui-page__bd">
			<fui-empty :src="`${resUrl}/component/empty/img_data_3x.png`" title="暂无数据" descr="功能开发中，敬请期待！">
				<fui-button text="返回首页" :size="28" width="336rpx" height="84rpx" radius="100rpx" background="#fff"
					:margin="['64rpx','0']" borderColor="#465CFF" color="#465CFF" @click="goIndex"></fui-button>
			</fui-empty>
			<fui-empty :src="`${resUrl}/component/empty/img_news_3x.png`" title="暂无新消息" marginTop="64"></fui-empty>
			<fui-empty :src="`${resUrl}/component/empty/img_address_3x.png`" title="暂无地址信息" marginTop="64">
			</fui-empty>
			<fui-empty :src="`${resUrl}/component/empty/img_network_3x.png`" title="请检查网络设置！" marginTop="64">
			</fui-empty>
			<fui-empty :src="`${resUrl}/component/empty/img_order_3x.png`" title="暂无订单" marginTop="64"></fui-empty>
			<fui-empty :src="`${resUrl}/component/empty/img_search_3x.png`" title="没有找到搜索的内容额~" marginTop="64">
			</fui-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resUrl: this.fui.resUrl()
			}
		},
		methods: {
			goIndex() {
				this.fui.href('/pages/tabbar/index/index', true)
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
</style>
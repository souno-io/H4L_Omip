<!--本文件由FirstUI授权予叶兴（手机号：18 79   87 9    154 9，身份证尾号： 0  5 591 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Table <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Table 表格，用于展示多条结构类似的数据。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-table :itemList="tableData" :header="headerData"></fui-table>
			<view class="fui-section__title">横向铺满/斑马纹</view>
			<fui-table full stripe :itemList="tableData" :header="headerData" @rowClick="rowClick"></fui-table>
			<!-- #ifndef APP-NVUE -->
			<view class="fui-section__title">行列固定</view>
			<fui-table fixed height="600" :itemList="itemList" :header="header" @click="detail"></fui-table>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	import data from './tableData.js'
	export default {
		data() {
			return {
				tableData: data.table,
				itemList: data.itemList,
				//基础使用 表头
				headerData: [{
					prop: 'name',
					label: '名称'
				}, {
					prop: 'province',
					label: '省份'
				}, {
					prop: 'city',
					label: '城市'
				}],
				header: [{
					prop: 'date',
					label: '日期',
					fixed: true,
				}, {
					prop: 'name',
					label: '名称'
				}, {
					prop: 'province',
					label: '省份'
				}, {
					prop: 'city',
					label: '城市'
				}, {
					prop: 'address',
					label: '地址',
					width: 320
				}, {
					label: '操作',
					fixed: 'right',
					type: 3,
					width: 160,
					buttons: [{
						text: '详情',
						color: '#465CFF',
						// size: 30,
						fontWeight: 600
					}]
				}]
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			//行点击
			rowClick(e){
				console.log(e)
			},
			detail(e) {
				console.log(e)
				this.fui.toast(e.item.name)
			}
		}
	}
</script>

<style>
	.fui-wrap {
		padding-bottom: 120rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}
</style>
<!--本文件由FirstUI授权予叶兴（手机号：     18798 7 9 1  549，身份证尾号： 0 55   916）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<fui-index-list isSelect :listData="lists" @init="init" @click="itemClick">
		<fui-search-bar @search="search"></fui-search-bar>

		<!--解构插槽使用，自定义内容 custom属性 设为true时生效-->
		<!-- #ifdef H5-->
		<!-- <template v-slot:item="slotProps">
			<fui-list-cell>
				{{slotProps.model.text}}
			</fui-list-cell>
		</template> -->
		<!-- #endif -->

		<!-- #ifndef H5 -->
		<!-- <template slot-scope="{ model, idx, index }" slot="item">
			<fui-list-cell>
				{{model.text}}
			</fui-list-cell>
		</template> -->
		<!-- #endif -->

		<template v-slot:footer>
			<fui-loadmore v-if="!show"></fui-loadmore>
			<fui-divider text="已加载全部数据" v-if="show"></fui-divider>
		</template>
	</fui-index-list>
</template>

<script>
	import lists from './index.list.js'
	export default {
		data() {
			return {
				lists: lists,
				show: false
			}
		},
		onLoad() {
			// setTimeout(() => {
			// 	this.show = true;
			// }, 500)
		},
		methods: {
			init() {
				this.show = true;
			},
			search(e) {
				this.fui.toast(`搜索：${e.detail.value}`)
				//相关逻辑自行处理
				// ...
			},
			itemClick(e) {
				console.log(e)
				//相关逻辑自行处理，如限制选择数，选择后操作等
				let obj = this.lists[e.index].data[e.subIndex]
				this.$set(obj, 'checked', !obj.checked)
				// ...
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}
</style>
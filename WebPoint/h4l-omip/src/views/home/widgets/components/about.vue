<template>
	<el-card shadow="hover" header="关于项目" class="item-background">
		<p>数字化 / 精准 / 健康管理。数字化管理，精准医疗，健康管理一步到位！</p>
		<p>
			<a href='https://github.com/souno-io/H4L_Omip' target="_blank">
				<img src='https://img.shields.io/badge/%E4%BD%9C%E8%80%85-Souno-red' alt='star' style="vertical-align: middle">
			</a>
		</p>
	</el-card>
</template>

<script>
	export default {
		title: "关于项目",
		icon: "el-icon-setting",
		description: "点个星星支持一下",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.item-background p {color: #999;margin-top:10px;line-height: 1.8;}
</style>

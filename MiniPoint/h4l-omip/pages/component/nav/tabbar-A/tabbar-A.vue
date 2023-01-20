<!--本文件由FirstUI授权予叶兴（手机号：187  9  8 7 9 1  5 49，身份证尾号：  055 9 1 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Tabbar <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Tabbar 标签栏，用于在不同功能模块之间进行切换，小图标建议尺寸84*84。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar2" :current="current" @click="itemClick"></fui-tabbar>
			<view class="fui-section__title">纯文本</view>
			<fui-tabbar :isFixed="false" background="rgba(0,0,0,.5)" color="rgba(255,255,255,.7)" selectedColor="#fff"
				size="32" font-weight="500" :tabBar="tabBar" :current="current" @click="itemClick"></fui-tabbar>
			<view class="fui-section__title">纯图标</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar3" :current="current" @click="itemClick"></fui-tabbar>
			<view class="fui-section__title">中间使用图标</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar4" :current="current2" @click="itemClick2"></fui-tabbar>
			<!-- #ifndef APP-NVUE -->
			<!-- Nvue暂不支持 -->
			<view class="fui-section__title">中间大图标（凸出）</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar5" :current="current2" @click="itemClick2"></fui-tabbar>
			<!-- #endif -->
			<view class="fui-section__title">带角标</view>
			<fui-tabbar :isFixed="false" :tabBar="tabBar6" :current="current" @click="itemClick"></fui-tabbar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabBar: ["首页", "朋友", "消息", "我"],
				current: 0,
				current2: 0,
				tabBar2: [{
						text: "组件",
						iconPath: "/static/images/tabbar/assembly_default_3x.png",
						selectedIconPath: "/static/images/tabbar/assembly_selected_3x.png"
					},
					{
						text: "布局",
						iconPath: "/static/images/tabbar/layout_default_3x.png",
						selectedIconPath: "/static/images/tabbar/layout_selected_3x.png"
					},
					{
						text: "模板",
						iconPath: "/static/images/tabbar/mod_default_3x.png",
						selectedIconPath: "/static/images/tabbar/mod_selected_3x.png"
					},
					{
						text: "我的",
						iconPath: "/static/images/tabbar/my_default_3x.png",
						selectedIconPath: "/static/images/tabbar/my_selected_3x.png"
					}
				],
				tabBar3: [{
						iconPath: "/static/images/tabbar/assembly_default_3x.png",
						selectedIconPath: "/static/images/tabbar/assembly_selected_3x.png"
					},
					{
						iconPath: "/static/images/tabbar/layout_default_3x.png",
						selectedIconPath: "/static/images/tabbar/layout_selected_3x.png"
					},
					{
						iconPath: "/static/images/tabbar/mod_default_3x.png",
						selectedIconPath: "/static/images/tabbar/mod_selected_3x.png"
					},
					{
						iconPath: "/static/images/tabbar/my_default_3x.png",
						selectedIconPath: "/static/images/tabbar/my_selected_3x.png"
					}
				],
				tabBar4: [{
						text: "组件",
						iconPath: "/static/images/tabbar/assembly_default_3x.png",
						selectedIconPath: "/static/images/tabbar/assembly_selected_3x.png"
					},
					{
						text: "布局",
						iconPath: "/static/images/tabbar/layout_default_3x.png",
						selectedIconPath: "/static/images/tabbar/layout_selected_3x.png"
					},
					{
						iconPath: "/static/images/common/icon_plus_3x.png",
						midButton: true,
						width: 96,
						height: 96
					},
					{
						text: "模板",
						iconPath: "/static/images/tabbar/mod_default_3x.png",
						selectedIconPath: "/static/images/tabbar/mod_selected_3x.png"
					},
					{
						text: "我的",
						iconPath: "/static/images/tabbar/my_default_3x.png",
						selectedIconPath: "/static/images/tabbar/my_selected_3x.png"
					}
				],
				tabBar5: [{
						text: "组件",
						iconPath: "/static/images/tabbar/assembly_default_3x.png",
						selectedIconPath: "/static/images/tabbar/assembly_selected_3x.png"
					},
					{
						text: "布局",
						iconPath: "/static/images/tabbar/layout_default_3x.png",
						selectedIconPath: "/static/images/tabbar/layout_selected_3x.png"
					},
					{
						text: "发布",
						iconPath: "/static/images/common/icon_plus_3x.png",
						midButton: true,
						width: 126,
						height: 126,
						bottom: 26
					},
					{
						text: "模板",
						iconPath: "/static/images/tabbar/mod_default_3x.png",
						selectedIconPath: "/static/images/tabbar/mod_selected_3x.png"
					},
					{
						text: "我的",
						iconPath: "/static/images/tabbar/my_default_3x.png",
						selectedIconPath: "/static/images/tabbar/my_selected_3x.png"
					}
				],
				tabBar6: [{
						text: "首页",
						iconPath: "/static/images/component/tabbar/icon_home.png",
						selectedIconPath: "/static/images/component/tabbar/icon_home_fill.png",
						badge: 1
					},
					{
						text: "分类",
						iconPath: "/static/images/component/tabbar/icon_classify.png",
						selectedIconPath: "/static/images/component/tabbar/icon_classify_fill.png",
						badge: 2,
						dot: true
					},
					{
						text: "我的",
						iconPath: "/static/images/component/tabbar/icon_my.png",
						selectedIconPath: "/static/images/component/tabbar/icon_my_fill.png"
					}
				]
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			itemClick(e) {
				console.log(e)
				this.current = e.index
			},
			itemClick2(e) {
				console.log(e)
				if (e.index == 2) {
					this.fui.toast('您点击了大图标~')
				} else {
					this.current2 = e.index
				}
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
	}
</style>
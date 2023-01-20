<!--本文件由FirstUI授权予叶兴（手机号： 1 87   9 8 79   1549，身份证尾号：   055  916）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">FormItem<image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">FormItem 表单项，主要用于表单组件相关布局使用。</view>
		</view>
		<view class="fui-page__bd">
			<view class="fui-section__title">基础使用</view>
			<fui-form-item label="活动名称">
				<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入活动名称"></fui-input>
			</fui-form-item>
			<fui-form-item label="手机号码">
				<input class="fui-page__input" placeholder="请输入手机号码" placeholder-style="color:#ccc;" />
			</fui-form-item>
			<fui-form-item label="即时配送">
				<fui-switch :scaleRatio="0.9"></fui-switch>
			</fui-form-item>
			<fui-form-item label="活动性质">
				<fui-checkbox-group>
					<fui-label inline>
						<fui-checkbox value="1"></fui-checkbox>
						<fui-text :size="28" text="地推活动" :padding="['0','30rpx','0','16rpx']"></fui-text>
					</fui-label>
					<fui-label inline>
						<fui-checkbox value="2"></fui-checkbox>
						<fui-text :size="28" text="美食活动" :padding="['0','16rpx']"></fui-text>
					</fui-label>
				</fui-checkbox-group>
			</fui-form-item>
			<fui-form-item label="特殊资源">
				<fui-radio-group>
					<fui-label>
						<fui-radio value="1"></fui-radio>
						<fui-text :size="28" text="线上品牌方赞助" :padding="['0','30rpx','0','16rpx']"></fui-text>
					</fui-label>
					<fui-label :margin="['32rpx','0','0']">
						<fui-radio value="2"></fui-radio>
						<fui-text :size="28" text="线下场地免费" :padding="['0','16rpx']"></fui-text>
					</fui-label>
				</fui-radio-group>
			</fui-form-item>
			<fui-form-item label="评分">
				<fui-rate></fui-rate>
			</fui-form-item>
			<fui-form-item label="上传图片" :padding="['28rpx','32rpx','8rpx']">
				<fui-upload></fui-upload>
			</fui-form-item>
			<view class="fui-section__title">必填星号</view>
			<fui-form-item label="姓名" asterisk>
				<fui-input :borderBottom="false" :padding="[0]" placeholder="请输入姓名"></fui-input>
			</fui-form-item>
			<fui-form-item label="手机号码" asterisk>
				<input class="fui-page__input" placeholder="请输入手机号码" placeholder-style="color:#ccc;" />
			</fui-form-item>
			<view class="fui-section__title">选择</view>
			<fui-form-item label="活动时间" asterisk arrow highlight>
				<fui-input :borderBottom="false" :padding="[0]" placeholder="请选择时间" disabled
					backgroundColor="transparent"></fui-input>
			</fui-form-item>
			<fui-form-item label="地区" arrow highlight>
				<input class="fui-page__input" placeholder="请选择地区" placeholder-style="color:#ccc;" disabled />
			</fui-form-item>
			<view class="fui-section__title">其他</view>
			<fui-form-item label="是否推送">
				<template v-slot:right>
					<fui-switch></fui-switch>
				</template>
			</fui-form-item>
			<fui-form-item label="体重">
				<fui-input type="digit" :borderBottom="false" :padding="['0','16rpx']" placeholder="请输入体重" textRight>
				</fui-input>
				<template v-slot:right>
					<fui-text text="kg"></fui-text>
				</template>
			</fui-form-item>
			<fui-form-item label="验证码">
				<input class="fui-page__input" placeholder="请输入验证码" placeholder-style="color:#ccc;" maxlength="6" />
				<template v-slot:right>
					<fui-button type="gray" bold width="200rpx" height="64rpx" :size="28" text="获取验证码"></fui-button>
				</template>
			</fui-form-item>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radioItems: [{
						name: '18~28岁',
						value: '1',
						checked: true
					},
					{
						name: '29~40岁',
						value: '2',
						checked: false
					}
				],
				checkboxItems: [{
					name: '篮球',
					value: '1',
					checked: true
				}, {
					name: '乒乓球',
					value: '2',
					checked: false
				}]
			}
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			}
		}
	}
</script>

<style>
	page {
		font-weight: normal;
	}

	.fui-wrap {
		padding-bottom: 96rpx;
	}

	.fui-section__title {
		margin-left: 32rpx;
	}

	.fui-page__input {
		font-size: 32rpx;
	}
</style>
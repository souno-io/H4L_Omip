<!--本文件由FirstUI授权予叶兴（手机号： 1   879 87  915   49，身份证尾号：05 5   91 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<view class="fui-page__hd">
			<view class="fui-page__title fui-align__center" @tap="vip">Upload <image
					src="/static/images/index/light/icon_member_3x.png"></image>
			</view>
			<view class="fui-page__desc">Upload 图片上传，用于选择或拍照进行上传图片。</view>
		</view>
		<view class="fui-page__bd fui-page__spacing">
			<view class="fui-section__title">自动上传</view>
			<fui-upload :max="5" immediate :url="url" ref="upload" @success="success" @error="error" @complete="complete"
				@preview="preview">
			</fui-upload>
			<view class="fui-section__title">手动上传</view>
			<view class="fui-btn__box">
				<fui-button type="gray" width="400rpx" height="84rpx" text="开始上传" bold @click="startUpload">
				</fui-button>
			</view>
			<fui-upload background="#333" addColor="#d1d1d1" :fileList="fileList" :url="url" ref="upload2" @success="success2" @error="error2"
				@complete="complete2" @preview="preview">
			</fui-upload>
		</view>
		<!--previewImage：百度小程序只支持预览网络路径图片，这里为了做兼容-->
		<!-- #ifdef MP-BAIDU -->
		<fui-gallery :show="show" :current="current" :urls="preUrls" @hide="hideGallery"></fui-gallery>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// #ifdef MP-BAIDU
				//预览图片列表
				preUrls: [],
				show: false,
				current: 0,
				// #endif
				//上传接口地址
				url: 'https://ffa.firstui.cn/api/example/upload-file',
				//上传状态，用于保存或其他操作时做判断
				status: '',
				//上传的图片地址列表
				urls: [],
				//上传状态，用于保存或其他操作时做判断
				status2: '',
				//初始化已上传的图片列表
				fileList: ['https://res.firstui.cn/static/images/common/logo.png'],
				//上传的图片地址列表
				urls2: []
			}
		},
		onLoad() {
			this.urls2 = this.fileList
		},
		methods: {
			vip() {
				this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
			},
			success(e) {
				console.log(e)
				//上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
				let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}")
				this.status = e.status
				if (res.data.url) {
					//处理结果返回给组件
					//data.url为上传成功后返回的图片地址
					//e.index为图片索引值
					this.$refs.upload.result(res.data.url, e.index)
				}
			},
			error(e) {
				this.status = e.status
			},
			complete(e) {
				this.status = e.status
				this.urls = e.urls
				if (this.status === 'success' && e.action === 'upload') {
					this.fui.toast('上传完成！')
					//已上传完成的图片列表 this.urls
					console.log(this.urls)
				}
			},
			preview(e) {
				// #ifdef MP-BAIDU
				this.preUrls = e.urls;
				this.current = e.index;
				setTimeout(() => {
					this.show = true;
				}, 50)
				// #endif
			},
			hideGallery() {
				this.show = false;
			},
			success2(e) {
				console.log(e)
				//上传成功回调，处理服务器返回数据【此处根据实际返回数据进行处理】
				let res = JSON.parse(e.res.data.replace(/\ufeff/g, "") || "{}")
				this.status = e.status
				if (res.data.url) {
					//处理结果返回给组件
					//data.url为上传成功后返回的图片地址
					//e.index为图片索引值
					this.$refs.upload2.result(res.data.url, e.index)
				}
			},
			error2(e) {
				this.status2 = e.status
				uni.showModal({
					content: JSON.stringify(e)
				})
			},
			complete2(e) {
				this.status2 = e.status
				this.urls2 = e.urls
				if (this.status2 === 'success' && e.action === 'upload') {
					this.fui.toast('上传完成！')
					//已上传完成的图片列表 this.urls
					console.log(this.urls)
				}
			},
			startUpload() {
				if (!this.status2 || this.status2 !== 'preupload') {
					this.fui.toast('请选择需要上传的图片！')
					return
				}
				//开始上传
				this.$refs.upload2.start()
			}
		}
	}
</script>

<style>
	.fui-btn__box {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding-bottom: 64rpx;
	}
</style>
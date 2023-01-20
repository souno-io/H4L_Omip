<!--本文件由FirstUI授权予叶兴（手机号：  18  798  79   15 49，身份证尾号：0 559   1 6）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<view class="fui-wrap">
		<fui-list-cell bottom-right="32" :highlight="false">
			<text class="fui-title">First UI {{version}}（{{date}}）</text>
		</fui-list-cell>
		<view class="fui-content">
			<view class="fui-p" v-for="(item,index) in logs" :key="index">
				<text class="fui-sign" v-if="logs.length>1">-</text>
				<text>{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: '',
				date: '',
				logList: {
					'V1.0.0': [
						'First UI 正式上线，本次更新如下：',
						'新增 Color 色彩，First UI用色指南',
						'新增 Icon 图标组件，First UI字体图标库',
						'新增 Button 按钮组件',
						'新增 Footer 页脚组件',
						'新增 Animation 动画组件',
						'新增 StatusBar 状态栏占位组件',
						'新增 Layout 栅格布局组件（fui-row和fui-col）',
						'新增 Grid 宫格组件（fui-grid和fui-grid-item）',
						'新增 List 列表组件（fui-list和fui-list-cell）',
						'新增 Card 卡片组件',
						'新增 Input 输入框组件',
						'新增 InputNumber 数字输入框组件',
						'新增 Label 标签组件',
						'新增 FormField 表单数据传递组件',
						'新增 Radio 单选框组件',
						'新增 Checkbox 复选框组件',
						'新增 Switch 开关组件',
						'新增 Textarea 多行输入框组件',
						'新增 Loading 加载组件',
						'新增 LoadAni 加载动画组件（VIP组件）',
						'新增 Badge 徽章组件',
						'新增 Alert 警告框组件',
						'新增 Divider 分割线组件',
						'新增 LoadMore 加载更多组件',
						'新增 Clipboard 复制文本组件（VIP组件）',
						'新增 Request 网络请求组件（VIP组件）',
						'新增 Utils 工具类组件',
						'新增 Poster 绘制分享海报组件（VIP组件）'
					],
					'V1.1.0': [
						'调整组件对vue3支持与uni-app官方一致',
						'新增 Panel 面板 组件（VIP组件）',
						'新增 Preview 表单预览 组件（VIP组件）',
						'新增 Empty 缺省页 组件',
						'新增 SegmentedControl 分段器 组件',
						'新增 Pagination 分页器 组件',
						'新增 NavBar 导航栏 组件（VIP组件）',
						'新增 Tabs 标签页 组件',
						'新增 Tag 标签 组件',
						'新增 Backdrop 遮罩层 组件',
						'新增 Result 结果页 组件（VIP组件）',
						'新增 Avatar 头像 组件',
						'新增 Form 表单校验 组件（VIP组件）',
						'新增 Validator 表单验证（JS）组件（VIP组件）',
						'新增 SingleInput 单输入框 组件（VIP组件）',
						'新增 IndexList 索引列表 组件（VIP组件）',
						'新增 SearchBar 搜索栏 组件（VIP组件）',
						'新增 登录（A）模板（物料）',
						'新增 登录（B）模板（物料）',
						'新增 登录（C）模板（物料）',
						'新增 登录（D）模板（物料）',
						'优化若干已知问题'
					],
					'V1.2.0': [
						'新增 Tabbar 标签栏 组件（VIP组件）',
						'新增 ActionSheet 上拉菜单 组件',
						'新增 Toast 轻提示 组件',
						'新增 Dialog 对话框 组件',
						'新增 DropdownMenu 下拉菜单 组件',
						'新增 DropdownList 下拉菜单 组件',
						'新增 Modal 模态框 组件（VIP组件）',
						'新增 Landscape 压屏窗 组件（VIP组件）',
						'新增 Message 消息提示 组件（VIP组件）',
						'新增 BottomPopup 底部弹出层 组件',
						'新增 TopPopup 顶部弹出层 组件',
						'新增 Drawer 抽屉 组件',
						'新增 NoticeBar 通告栏 组件（VIP组件）',
						'新增 TimeAxis 时间轴 组件（VIP组件）',
						'新增 Steps 步骤条 组件（VIP组件）',
						'新增 Progress 进度条 组件（VIP组件）',
						'新增 Collapse 折叠面板 组件',
						'新增 SwiperDot 轮播图指示点 组件（VIP组件）',
						'新增 DigitalRoller 数字滚轮 组件（VIP组件）',
						'新增 DigitalKeyboard 数字键盘 组件（VIP组件）',
						'新增 LicensePlate 车牌号键盘 组件（VIP组件）',
						'新增 CountdownVerify 验证码倒计时 组件(VIP组件)',
						'新增 Sticky 吸顶容器 组件（VIP组件）',
						'新增 Fab 浮动按钮 组件（VIP组件）',
						'新增 ShareSheet  分享面板 组件（VIP组件）',
						'新增 FilterBar 筛选栏 组件（VIP组件）',
						'新增 SwipeAction 滑动菜单 组件',
						'新增 Picker 选择器 组件（VIP组件）',
						'新增 DatePicker 日期时间选择器 组件（VIP组件）',
						'新增 门户模板（物料）',
						'优化掉部分组件中对头条小程序做兼容的冗余代码',
						'优化若干已知问题'
					],
					'V1.3.0': [
						'新增 Calendar 日历 组件（VIP组件）',
						'新增 Cascader 级联选择器 组件（VIP组件）',
						'新增 Slider 滑块 组件（VIP组件）',
						'新增 Rate 评分 组件（VIP组件）',
						'新增 Select 选择器 组件（VIP组件）',
						'新增 Upload 图片上传 组件（VIP组件）',
						'新增 Gallery 画廊 组件（VIP组件）',
						'新增 BubbleBox 气泡框 组件（VIP组件）',
						'新增 BottomNavbar 底部导航栏 组件（VIP组件）',
						'新增 CountDown 倒计时 组件（VIP组件）',
						'新增 CopyText 长按复制 组件（VIP组件）',
						'新增 Timer 计时器 组件（VIP组件）',
						'新增 Qrcode 二维码 组件（VIP组件）',
						'新增 Barcode 条形码 组件（VIP组件）',
						'新增 Autograph 手写签名 组件（VIP组件）',
						'修复 Textarea 多行输入框 组件回车无法换行的问题',
						'优化 Request 网络请求 组件，新增加载中提示信息配置项',
						'优化 Icon 图标 组件，新增部分图标',
						'优化若干已知问题'
					],
					'V1.4.0': [
						'新增 Circle 圆形进度条 组件（VIP组件）',
						'新增 Skeleton 骨架屏 组件（VIP组件）',
						'新增 CubicBezier 贝塞尔曲线 组件（VIP组件）',
						'新增 SlideVerify 滑动验证 组件（VIP组件）',
						'新增 RotateVerify 旋转验证 组件（VIP组件）',
						'新增 SliderCaptcha 滑块拼图验证 组件（VIP组件）',
						'新增 OverflowHidden 内容超出隐藏 组件（VIP组件）',
						'新增 Backtop 回到顶部 组件（VIP组件）',
						'新增 Lazyload 图片懒加载 组件（VIP组件）',
						'新增 Waterfall 瀑布流 组件（VIP组件）',
						'优化部分组件在vue3下显示异常，控制台报出警告的问题',
						'优化 Upload 上传 组件。新增属性设置删除图片时是否弹框确认；图片上传数到达限制数max时隐藏选择框',
						'修复 Preview 表单预览 组件改变数据页面不更新的bug',
						'优化 Button 按钮 组件在Nvue以及PC中的点击效果',
						'优化 Card 卡片 组件在Nvue中样式显示不正确的问题',
						'优化 Message 消息提示 组件，部分props属性可在show方法中传值覆盖',
						'优化 Select 选择器 组件，修复单选时设置默认选中项无效的问题',
						'优化 CountDown 倒计时 组件，修复初始化传0触发倒计时结束事件的问题',
						'修复 Layout 栅格布局 组件属性gutter不生效的bug',
						'修复 InputNumber 数字输入框 组件在vue3下 blur 事件未在emits中申明的问题',
						'优化若干已知问题'
					],
					'V1.5.0': [
						'新增 Vtabs 纵向选项卡 组件（VIP组件）',
						'新增 PuzzleVerify 滑块拼图验证 组件（VIP组件），此组件为 SliderCaptcha 滑块拼图验证 组件的功能补充。[详见](https://forum.firstui.cn/d/48)',
						'新增 Drag 拖拽排序 组件（VIP组件）',
						'新增 ImageCropper 图片裁剪 组件（VIP组件）',
						'新增 Table 表格 组件（VIP组件）',
						'Utils 工具 类组件新增函数节流方法使用案例',
						'Badge 徽章 组件优化，新增max属性，当值超过max时使用+号代替，仅为数字时有效',
						'SingleInput 单输入框组件优化，新增清空方法重置输入值（结合原生键盘时使用）',
						'Button 按钮 组件优化，修复微信小程序端@click事件中调用wx.getUserProfile无效的问题以及在subNVue中点击事件失效的问题',
						'Form 表单校验 示例新增其他表单元素，满足更多表单需求',
						'Icon 图标 组件优化，新增支持自定义图标，详见文档说明',
						'DropdownMenu 下拉菜单 组件优化，支持nvue',
						'Input 输入框 组件优化 ，新增 number 属性，修复v-model.number在小程序平台值未转化为Number类型问题',
						'修复 Grid 宫格 组件 ref 被误删除导致报错的问题',
						'修复并优化 Circle 圆形进度条 组件在nvue端出错的问题',
						'修复vue2下使用wxs初始化时可能报错的问题',
						'ActionSheet 上拉菜单 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'BottomNavbar 底部导航栏 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'BottomPopup 底部弹出层 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'DigitalKeyboard 数字键盘 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'Footer 页脚 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'Gallery 画廊 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'LicensePlate 车牌号键盘 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'Select 选择器 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'ShareSheet 分享面板 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'Tabbar 标签栏 组件优化，新增属性 safeArea 控制是否需要适配底部安全区域',
						'BottomPopup 底部弹出层 组件优化，优化Nvue下设置顶部圆角值时IOS底部偶尔出现圆角的问题',
						'优化若干已知问题'
					],
					'V1.6.0': [
						'新增组件全局配置，目前仅针对部分常用组件处理，详见文档 [全局配置]',
						'新增 Text 文本组件',
						'新增 spin 旋转动画组件（VIP组件）',
						'新增 SafeArea 底部安全区域组件（VIP组件）',
						'新增 DataTag 标签选择组件（VIP组件）',
						'新增 SubmitBar 提交订单栏 布局内容（VIP）',
						'新增 GoodsBar 商品导航栏 布局内容（VIP）',
						'新增 ChatBar 聊天栏 布局内容（VIP）',
						'新增 RollNews 滚动消息 布局内容（VIP）',
						'新增 CardSwiper 卡片轮播 布局内容（VIP）',
						'BubbleBox 气泡框 组件优化，新增内容插槽（content），可自定义气泡框内容；新增属性 padding，用于调整气泡框内置内容item项padding值',
						'LoadMore 加载更多 组件优化，新增属性 state 控制组件显示状态',
						'Backdrop 遮罩层 组件优化，Nvue端去除v-if使用，修复fixed定位时遮挡位置靠后的fixed元素问题；Nvue端新增属性full，当组件放置根元素下且为absolute定位时可设置遮罩铺满屏幕',
						'Poster 绘制分享海报 组件优化，修复编译到微信小程序功能失效的问题',
						'Qrcode 二维码 组件优化，修复编译到微信小程序功能失效的问题',
						'Barcode 条形码 组件优化，修复编译到微信小程序功能失效的问题',
						'Autograph 手写签名 组件优化，修复编译到微信小程序功能失效的问题',
						'Table 表格 组件优化，修复设置图片类型显示错误的问题',
						'Textarea 多行输入框组件优化，调整maxlength设为-1时，双向绑定不生效的问题',
						'Button 按钮 组件优化，默认调整为细边框（0.5px）',
						'Picker 选择器 组件优化，修复已知问题',
						'DatePicker 日期时间选择器 组件优化，修复已知问题',
						'Badge 徽章 组件优化，修复Nvue端可能出现文本被截断的情况',
						'优化若干已知问题'
					],
					'V1.7.0': [
						'新增 WATERFALL 瀑布流加载 布局内容（VIP）',
						'新增 TOP TAB 顶部选项卡 布局内容（VIP）',
						'新增 NEWS LIST 新闻列表 布局内容（VIP）',
						'新增 PRODUCT LIST 商品列表 布局内容（VIP）',
						'新增 MAP 地图 布局内容-线路规划（VIP）',
						'新增 ROLL HORIZONTAL 横向滚动 布局内容（VIP）',
						'新增 UploadVideo 视频上传 组件（VIP）',
						'新增 FormItem 表单项 组件（VIP）',
						'Label 标签 组件优化',
						'Card 卡片 组件优化，新增footerLine属性',
						'InputNumber 数字输入框 组件优化，修复最小值设为负数不生效的问题，新增type属性当设值为text则可输入负号小数点等',
						'Panel 面板 组件优化，新增属性配置数据源键值（key）',
						'Preview 表单预览 组件优化，新增属性配置数据源键值（key），修复部分兼容问题',
						'Input 输入框 组件优化，新增min和max属性，当type=number、type=digit、number属性为true时生效',
						'LicensePlate 车牌号键盘 组件优化，新增方法 changeKeyboard 切换键盘显示',
						'ImageCropper 图片裁剪 组件优化，修复已知bug',
						'Grid 宫格 组件优化',
						'Textarea 多行输入框组件已知问题优化',
						'Input 输入框 组件已知问题优化',
						'Text 文本 组件优化，新增部分属性（props）',
						'Button 按钮 组件优化，修复nvue端样式background加!important报错的问题',
						'Waterfall 瀑布流 组件优化，请参考【布局-瀑布流】示例做加载刷新操作',
						'DatePicker 日期时间选择器 组件优化，修复type=1时设置默认值失效的问题，修复区间选择设置起始日期文本出错的问题',
						'Landscape 压屏窗 组件优化，新增属性支持absolute定位，以便用于其他组件内',
						'Validator 表单验证（JS）组件优化，支持校验所有元素并返回所有错误信息',
						'Form 表单校验 组件优化，支持校验所有元素并返回所有错误信息',
						'Radio 单选框 组件优化，修复Nvue端vue3下可能显示不正确的问题',
						'Checkbox 复选框 组件优化，修复Nvue端vue3下可能显示不正确的问题',
						'Switch 开关 组件优化，修复Nvue端vue3下可能显示不正确的问题',
						'OverflowHidden 内容超出隐藏 组件优化，新增部分属性',
						'Lazyload 图片懒加载 组件优化，新增部分属性',
						'修复部分已知问题'
					]
				},
				logs: []
			}
		},
		onLoad(e) {
			this.date = e.date || '2021-07-26';
			this.version = e.version || 'V1.0.0';
			this.logs = this.logList[this.version] || ['开发中~'];
		}
	}
</script>

<style>
	page {
		font-weight: normal;
		background-color: #fff;
	}

	.fui-title {
		font-weight: 600;
	}

	.fui-content {
		width: 100%;
		padding: 32rpx;
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.fui-p {
		width: 100%;
		padding-bottom: 32rpx;
		word-break: break-all;
		display: flex;
		line-height: 44rpx;
	}

	.fui-sign {
		padding-right: 8rpx;
	}
</style>
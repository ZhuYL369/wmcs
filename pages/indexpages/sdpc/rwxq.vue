<template>
	<view>
	<uni-nav-bar left-icon="back" @click-left="click_left" @click-right="click_right" right-text="修改" title="任务详情"></uni-nav-bar>
	<image src="../../../static/index/timg3.jpg"></image>
	<view class="box">
		<view class="list_group">
			<label>区县</label>
			<input v-model="qx" disabled/>
		</view>
		<view class="list_group">
			<label>点位类型</label>
			<input  v-model="dwlx" disabled/>
		</view>
		<view class="list_group">
			<label>点位名称</label>
			<view v-if="xg">
				<input  v-model="dwmc" style="background-color: #C8C8CD;"/>
			</view>
			<view v-else>
				<input  v-model="dwmc" disabled/>
			</view>
		</view>
		<view class="list_group">
			<label>点位地址</label>
			
			<view v-if="xg">
				<input  v-model="dwdz" style="background-color: #C8C8CD;"/>
			</view>
			<view v-else>
				<input  v-model="dwdz" disabled/>
			</view>
		</view>
		<view class="list_group">
			<label>点位状态</label>
			<input  v-model="dezt" disabled/>
		</view>
		<view v-if="xg">
			<button type="primary" style="margin: 10px;" @click="qrxg">确认修改</button>
		</view>
		<view v-else>
			<button type="primary" style="margin: 10px;" @click="kspc">开始评测</button>
		</view>
	</view>
	
	</view>
</template>

<script>
	var _self;
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				xg:false,
				qx:'凉州区',
				dwlx:'爱国主义教育基地',
				dwmc:'金塔县林园',
				dwdz:'凉州区金塔县1987号',
				dezt:'未进行'
			}
		},
		onLoad(option) {
			_self=this;
			console.log(option);
		},
		methods:{
			kspc(){
				uni.navigateTo({
					url:'kspc'
				})
			},
			qrxg(){
				console.log(_self.dwmc);
				console.log(_self.dwdz);
			},
			click_left(e){
				uni.navigateBack({delta:1});
			},
			click_right(e){
				setTimeout(function(){
					_self.xg=true;
				},500);
				
			}
		}
		
	}
</script>

<style>
.box{
	position: relative;
	top: 160px;
	background: #F5F5F5;
	margin: 0px 10px;
}
.list_group{
	display: flex;
	justify-content:space-between;
	border-bottom: 1px #DCDCDC solid;
	margin: 10px 6px;
	padding: 10px;
}
image{
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 200px;
}
label{
	font-size: 10pt;
}
input{
	text-align: right;
	font-size: 8pt;
}
</style>

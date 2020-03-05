<template>
	<view>
		<uni-nav-bar left-icon="back" @click-left="click_left" @click-right="click_right" right-text="新建" title="实时监管"></uni-nav-bar>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4cd964"></uni-segmented-control>
		<view class="content">
		    <view v-show="current === 0">
		       <view class="fcjgbox">
				   <view class="jgitem" v-for="(item) in fcjg" :key="item.id" @click="itemtap(item.id)">
					   <view class="jghead">
						   <view class="jgheadimg">
								<image :src="item.headimg"></image>
						   </view>
						   <view class="jgxx">
							   <text class="jgname">{{item.name}}</text>
							   <text class="jgdate">{{item.fcdate}}</text>
						   </view>
						   <view class="jgstatus">
							   <label v-if="item.status==1" class="jglabel-wzg">未整改</label>
							   <label v-if="item.status==2" class="jglabel-yzg">已整改</label>
						   </view>
					   </view>
					   <view class="jgbzxx">
					   		<text>{{item.jgbzxx}}</text>
					   </view>
				   </view>
				   
			   </view>
		    </view>
		    <view v-show="current === 1">
				
		    </view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
		components: {uniNavBar,uniSegmentedControl},
		data() {
			return {
				items: ['发出监管(0)','接受监管(0)'],
				current: 0,
				fcjg:[{
					id:1,
					headimg:'../../../static/index/timg1.jpg',
					name:'测试01',
					fcdate:'2019-08-05 11:35:14',
					status:2,
					jgbzxx:'监管备注信息测试'
				},
				{
					id:2,
					headimg:'../../../static/index/timg2.jpg',
					name:'测试01',
					fcdate:'2019-08-05 11:35:14',
					status:1,
					jgbzxx:'监管备注信息测试'
				},
				{
					id:3,
					headimg:'../../../static/index/timg3.jpg',
					name:'测试01',
					fcdate:'2019-08-05 11:35:14',
					status:1,
					jgbzxx:'监管备注信息测试'
				}
				]
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			click_left(e){
				uni.navigateBack({delta:1});
			},
			click_right(){
				uni.navigateTo({
					url:"./xjjg"
				})
			},
			itemtap(e){
				console.log(e);
			}
			
		}
	}
</script>

<style>
.fcjgbox{
	display: flex;
	flex-wrap:wrap;
	margin: 10px 6px;
	width: 97%;
	background-color: #fff;
}
.jghead{
	display: flex;
}
.jgheadimg{
}
.jgheadimg image{
	height: 40px;
	width: 40px;
	border-radius:50%
}
.jgitem{
	display: column;
	width: 100%;
	margin: 10px 2px;
	padding: 5px 5px;
	background-color:#F8F8F8;
}
.jgxx{
	margin: 0px 6px;
}
text{
	display: block;
}
.jgname{
	font-size: 12pt;
}
.jgdate{
	font-size: 10pt;
	color: #3F536E;
}
.jgstatus{
	position: relative;
	left: 26%;
	top: 10px;
}
.jgbzxx {
	margin: 5px 0px;
}
.jgbzxx text{
	font-size: 11pt;
}
.jglabel-wzg{
	font-size: 10pt;
	padding: 4px 8px;
	color: #fff;
	background-color: #09BB07;
	border-radius: 5px;
}
.jglabel-yzg{
	font-size: 10pt;
	padding: 4px 8px;
	color: #fff;
	background-color:#2A62FF;
	border-radius: 5px;
}
</style>

<template>
	<view>
		<view class="lxrxx_head">
			<image :src="info_item.headimg" mode="scaleToFill"></image>
			<text>{{info_item.name}}</text>
		</view>
		<view class="lxrxx_body">
			<view class="lxrxx_item">
				<text>职务</text>
				<text class="lxrxx_cent">{{info_item.duty}}</text>
			</view>
			<view class="lxrxx_item">
				<text>所属</text>
				<text class="lxrxx_cent">{{info_item.department}}</text>
			</view>
			<view class="lxrxx_item">
				<text>联系电话</text>
				<view>
					<text class="lxrxx_phone" @click="call_phone(info_item.phone)">{{info_item.phone}}</text>
					<van-icon name="phone" color="#BA55D3" size="18px"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self;
	import uniIcon from "@/components/uni-icon/uni-icon.vue"
	export default {
		components: {uniIcon},
		data(){
			return{
				info_item:{
					id:0,
					name:'',
					department:'',
					duty:'',
					phone:'',
					headimg:'../../../static/index/user2.png'
				}
			}
		},
		methods:{
			call_phone(phone){
				plus.device.dial(phone, true);
			}
		},
		onLoad(option) {
			_self=this;
			let obj=JSON.parse(option.data);
			_self.info_item=obj;
		}
		
	}
</script>

<style>
	text{
		font-size: 12pt;
	}
	.lxrxx_head{
		display: flex;
		flex-direction: column;
		align-items:center;
		height: 100px;
		padding: 60px 0px;
	}
	.lxrxx_head  image{
		height: 80px;
		width: 70px;
		border-radius:50%
	}
	.lxrxx_head text{
		margin-top: 10px;
	}
	.lxrxx_body{
		padding: 0px 6px;
	}
	.lxrxx_item{
		display: flex;
		justify-content:space-between;
		margin: 10px 10px;
		border-bottom: #DCDCDC 1px solid;
		padding-bottom: 5px;
	}
	.lxrxx_cent{
		color: #2C405A;
	}
	.lxrxx_phone{
		color: #2A62FF;
	}
	.lxrxx_item view van-icon{
		margin-left: 5px;
	}
</style>

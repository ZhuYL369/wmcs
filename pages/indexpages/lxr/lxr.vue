<template>
	<view>
		<uni-nav-bar left-icon="back" @click-left="click_left" @click-right="click_right" :right-text="quanxuan" title="联系人"></uni-nav-bar>
		<view>
			<van-search :value="search" @change="onSchange"  @focus="onFocus" @blur="onBlur" placeholder="请输入搜索关键词" />
		</view>
		<view>
			<van-collapse v-for="(item,index) in info" :key="item.id" :value="activeNames" @change="onChange" accordion>
				<van-collapse-item :title="item.group" :name="item.id">
					<view v-for="(lists,indexs) in item.list" :key="lists.id" class="list_call" @click="onClick(lists)">
						<view class="list_call_info">
							<image :src="lists.headimg" mode="scaleToFill"></image>
							<text>{{lists.name}}</text>
						</view>
						<view v-if="checkbok">
							 <checkbox-group @change="ItemOnChange">
								<checkbox :value="JSON.stringify(lists)"  style="transform:scale(0.7)" />
							 </checkbox-group>
						</view>
					</view>
				</van-collapse-item>
			</van-collapse>
		</view>
		<view class="search_res_list">
			<view v-if="searchinfo" v-for="(lists,indexs) in searchinfo" :key="indexs" class="list_call" @click="onClick(lists)">
				<view class="list_call_info">
					<image :src="lists.headimg" mode="scaleToFill"></image>
					<text>{{lists.name}}</text>
				</view>
				<view v-if="checkbok">
					 <checkbox-group @change="ItemOnChange">
						<checkbox :value="JSON.stringify(lists)"  style="transform:scale(0.7)" />
					 </checkbox-group>
				</view>
			</view>
		</view>
		<view v-if="checkbok" style="padding: 5px 15px;">
			 <button type="primary">确定</button>
		</view>
	</view>
</template>

<script>
	var _self;
	var yssj,judt=false;
	var searchstr=null;
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				quanxuan:'',
				checkbok:false,
				search:'',
				activeNames: "0",
				searchinfo:false,
				info:[{
					id:1,
					group:'测试1组',
					list:[{
						id:1,
						name:'张三',
						department:'测试1组',
						duty:'测试员',
						phone:'12345678901',
						headimg:'../../../static/index/user1.png'
					},
					{
						id:2,
						name:'李四',
						department:'测试1组',
						duty:'测试员',
						phone:'12345678902',
						headimg:'../../../static/index/user2.png'
					},
					{
						id:3,
						name:'王五',
						department:'测试1组',
						duty:'测试员',
						phone:'12345678902',
						headimg:'../../../static/index/user1.png'
					}]
				},
				{
					id:2,
					group:'测试2组',
					list:[{
						id:1,
						name:'张飞',
						department:'测试2组',
						duty:'测试员',
						phone:'12345678901',
						headimg:'../../../static/index/user2.png'
					},
					{
						id:2,
						name:'关羽',
						department:'测试2组',
						duty:'测试员',
						phone:'12345678902',
						headimg:'../../../static/index/timg.jpg'
					},
					{
						id:3,
						name:'刘备',
						department:'测试2组',
						duty:'测试员',
						phone:'12345678902',
						headimg:'../../../static/index/user2.png'
					}]
				}
				]
			}
		},
		methods: {
			onChange(event) {
			   _self.activeNames=event.detail;
			},
			onSchange(e){
				searchstr=e.detail;
				if(searchstr.length==0){
					_self.info=null;
					return;
				}
				let res=_Search(searchstr,yssj);
				if(res.length >= 0){
					_self.searchinfo=res;
				}
				
			},
			onClick(obj){
				if(_self.quanxuan!=''){
					return;
				}
				let params=JSON.stringify(obj);
				uni.navigateTo({
					url:"./lxrxx?data="+params
				})
			},
			onFocus(){
				if(!judt){
					yssj=_self.info;
					judt=true;
				}
				_self.info=null;
			},
			onSearch(e){
				console.log(e);
			},
			onBlur(e){
				if(searchstr.length==0){
					_self.info=yssj;
					_self.searchinfo=false;
				}
			},
			
			click_left(e){
				uni.navigateBack({delta:1});
			},
			click_right(){
				
			},
			ItemOnChange(e){
				console.log(e);
			}
			
		},
		onLoad(option) {
			_self=this;
			if(option.data=='choice'){
				_self.quanxuan='全选';
				_self.checkbok=true;
			}
		}
	}
	
	function _Search(str,info){
		let resinfo=new Array();
		if(str.length == 0){
			return resinfo;
		}
		if(typeof info == 'object'){
			for ( var i = 0; i < info.length; i++){
				for (var s=0;s<info[i].list.length;s++){
					let name=info[i].list[s].name;
					if(name.indexOf(str)!=-1){
						resinfo.push(info[i].list[s]);
					}
				}
			}
		}
		return resinfo;
	}
</script>

<style>
.list_call{
	display: flex;
	justify-content:space-between;
	border-bottom:1px solid #DCDCDC;
	margin: 0px 10px;
	padding: 8px 0px;
}
.list_call_info{
	display: flex;
	align-items:center;
}
.list_call_info image{
	height: 30px;
	width: 30px;
	margin-right: 10px;
	border-radius:50%;
}
.list_call_info text{
	
}
van-collapse-item{
	padding-top: -20px;
}
.search_res_list{
	padding: 0px 6px;
}
</style>

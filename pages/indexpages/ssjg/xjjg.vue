<template>
	<view>
		<view>
			<van-cell-group>
				<van-cell title="收件人" is-link value="" arrow-direction="down"  link-type="navigateTo" url="../../../pages/indexpages/lxr/lxr?data=choice"/>
			</van-cell-group>
			<van-cell-group>
				<van-cell title="点位名称" :value="data.dwmc" is-link  arrow-direction="down" />
				<van-cell title="点位地址" :value="data.dwdz" />
				<van-cell title="责任人" :value="data.zrr" />
				<van-cell title="责任人电话" :value="data.zrrdh" />
				<van-cell title="标题">
					<input v-model="data.bt"/>
				</van-cell>
				<van-cell title="发生时间">
					<input v-model="data.fssj" disabled @click="select_date"/>
				</van-cell>
			</van-cell-group>
			<van-cell-group>
				<van-cell title="内容" :border="border"/>
				<view class="neirong">
					<textarea v-model="data.nr" placeholder="请输入内容"></textarea>
				</view>
				<van-cell icon="photo" is-link value="图片" arrow-direction="down" />
				<van-cell icon="video" is-link value="视频" arrow-direction="down" />
			</van-cell-group>
		</view>
		<view>
			<button type="primary" style="margin: 10px;" @click="kspc">上报</button>
		</view>
		<view v-show="dateSelect" class="dateselect">
			<van-datetime-picker
			  type="datetime"
			  :value="date"
			  @input="onInput"
			  @confirm="confirm"
			  @cancel="cancel"
			  :loading="dateSelect"
			  :show-toolbar="dateSelect"
			  title="选择发生时间"
			/>
		</view>
	</view>
</template>
<script>
	var _self,_date;
	export default {
		data(){
			return{
				date:null,
				dateSelect:false,
				border:false,
				data:{
					sjr:'',
					dwmc:'凉州陶瓷艺术博物馆',
					dwdz:'武威市凉州区环路99号8栋附10',
					zrr:'测试001',
					zrrdh:'12345678901',
					bt:'新建监管标题测试',
					fssj:'',
					nr:''
				}
			}
		},
		methods:{
			select_date(){
				_self.dateSelect=true;
			},
			onInput(e){
				let date=transformTime(e.detail); 
				_self.data.fssj=date;
			},
			cancel(e){
				_self.dateSelect=false;
			},
			confirm(e){
				_self.dateSelect=false;
			}
		
		},
		onLoad() {
			_self=this;
			_date=new Date().getTime();
			_self.data.fssj=transformTime(_date);
			_self.date=_date;
		}
		
		
	}
	
	function transformTime(timestamp = +new Date()) {
	    if (timestamp) {
	        var time = new Date(timestamp);
	        var y = time.getFullYear();
	        var M = time.getMonth() + 1;
	        var d = time.getDate();
	        var h = time.getHours();
	        var m = time.getMinutes();
	        var s = time.getSeconds();
	        //return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) + ':' + addZero(s);
			return y + '-' + addZero(M) + '-' + addZero(d) + ' ' + addZero(h) + ':' + addZero(m) ;
	      } else {
	          return '';
	      }
	}
	function addZero(m) {
	    return m < 10 ? '0' + m : m;
	}
</script>

<style>
	.list_group{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 2px 10px;
		margin: 10px 0px;
	}
	.list_group_column{
		padding: 2px 10px;
		display: flex;
		flex-direction: column;
	}
	input{
		text-align: right;
		font-size: 14px;
		color: #666666;
	}
	textarea{
		height: 70px;
		font-size: 14px;
	}
	label{
		font-size: 14px;
	}
	.neirong{
		display:-webkit-flex;
		display:flex;
		padding:10px 15px;
	}
	.dateselect{
		width: 100%;
		position: absolute;
		bottom: 0px;
		z-index: 9;
	}
</style>

<template>
	<view>
		<view>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
			<swiper class="swiper-box" @change="change" @click="lbdj" :autoplay="autoplay" :interval="interval">
				<swiper-item v-for="(item ,index) in info" :key="index">
					<view class="swiper-item">
					<image style="width: 100%; height: 200px; background-color: #eeeeee;" mode="scaleToFill" :src="item.content"
						@error="imageError"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		</view>
		<view class="warp">
			<uni-grid :column="4" :show-border="false" :square="false" @change="select">
				<uni-grid-item>
					<image class="image" src="../../static/index/ico/sdpc.jpg" />
					<text class="text">实地测评</text>
				</uni-grid-item>
				<uni-grid-item >
					<image class="image" src="../../static/index/ico/fbtz.jpg" mode="aspectFill" />
					<text class="text">发布通知</text>
				</uni-grid-item>
				<uni-grid-item>
					<image class="image" src="../../static/index/ico/ssjg.jpg" mode="aspectFill" />
					<text class="text">实时监管</text>
				</uni-grid-item>
				<uni-grid-item>
					<image class="image" src="../../static/index/ico/bzck.jpg" mode="aspectFill" />
					<text class="text">标准参考</text>
				</uni-grid-item>
				<uni-grid-item>
					<image class="image" src="../../static/index/ico/dwjh.jpg" mode="aspectFill" />
					<text class="text">点位集合</text>
				</uni-grid-item>
				<uni-grid-item>
					<image class="image" src="../../static/index/ico/qjdt.jpg" mode="aspectFill" />
					<text class="text">点位云图</text>
				</uni-grid-item>
				<uni-grid-item>
					<image class="image" src="../../static/index/ico/lxr.jpg" mode="aspectFill" />
					<text class="text">联系人</text>
				</uni-grid-item>
				<uni-grid-item>
					<image class="image" src="../../static/index/ico/gd.jpg" mode="aspectFill" />
					<text class="text">更多</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view>
			<uni-card title="文明资讯" thumbnail="../../static/index/zixun.png" extra="更多 >" @click.self="wmzxgd">
				<view  v-for="(item,index) in zixun"  :key="item.id">
					<view class="zixun" @click.stop="wmzx_1(item.url)">
						<view class="zixun_img" >
							<image style="width: 210upx; height:170upx; background-color: #eeeeee;" mode="scaleToFill" :src="item.image"
							@error="imageError"></image>
						</view>
						<view class="zixun_cent">
							<text class="zixun_bt">{{item.tit}}</text>
							<text class="zixun_ms">{{item.conter}}</text>
							
						</view>
					</view>
				</view>
			</uni-card>
		</view>
		<view>
			<uni-card title="问卷调查" thumbnail="../../static/index/wjdc.png" extra="更多 >">
					<swiper class="swiper" previous-margin="1px" next-margin="100px">
						<swiper-item class="swiper-item-css">
							<view >
								<image style="width: 430upx; height:300upx; background-color: #eeeeee;" mode="scaleToFill" src="../../static/index/timg.jpg"
								@error="imageError"></image>
								<text class="wjdc_bt">创建全国文明城市问卷调查</text>
							</view>
						</swiper-item>
						<swiper-item >
							<view class="wjdc_img">
								<image style="width: 430upx; height:300upx; background-color: #eeeeee;" mode="scaleToFill" src="../../static/index/timg5.jpg"
								@error="imageError"></image>
								<text class="wjdc_bt">创建全国文明城市问卷调查</text>
							</view>
						</swiper-item>
					</swiper>
			</uni-card>
		</view>
		<!--
		<view>
			<uni-card title="材料报送" thumbnail="../../static/index/clbs.png" extra="更多 >">
				<view class="clbsbox">
					<view class="clbs_img">
						<image style="width: 100%;height:220upx; background-color: #eeeeee;margin: 0px;padding: 0px;" mode="scaleToFill" src="../../static/index/timg4.jpg"
		                @error="imageError"></image>
					</view>
					<view class="clbs_img">
						<image style="width: 100%;height:220upx; background-color: #eeeeee;margin: 0px;padding: 0px;" mode="scaleToFill" src="../../static/index/timg4.jpg"
					    @error="imageError"></image>
					</view>
				</view>
			</uni-card>
		</view>
		-->
	</view>
</template>

<script>
	var _self;
	import uniSwiperDot from "../../components/uni-swiper-dot/uni-swiper-dot.vue"
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	import uniCard from "@/components/uni-card/uni-card"
	export default {
		components: {
           uniSwiperDot,uniGrid,uniGridItem,uniList,uniListItem,uniCard
        },
		data() {
			return {
				info: [{
						content: '../../static/index/timg1.jpg'
					}, {
						content: '../../static/index/timg2.jpg'
					}, {
						content: '../../static/index/timg3.jpg'
					}],
				current: 0,
				mode: 'long',
				autoplay: true,
				interval:3000,
				//文明咨询
				zixun:[{
					id:1,
					tit:'武威市凉州城区文明校园建设工作现场观摩推进会召开',
					image:'../../static/index/zixun/1-1ZG62051132P.jpg',
					conter:'7月16日，武威市凉州城区文明校园建设工作现场观摩推进会在武威第十五中学召开。本次会议旨在对6月20至21日开展的凉州城区中小学文明校园建设工作现场观摩成果进行总结与交流，以充分发挥先进经验和典型的带动示范辐射作用，进一步推动全市中小学文明校园建设工作深入开展，不断提升学校办学内涵和办学水平，为我市创建全国文明城市助力加油',
					url:'http://wwwmw.gov.cn/articles/2019/07/17/article_45_80238_1.html'
				},
				{
					id:2,
					tit:'市政府机关大院：拆墙透绿 还路于民',
					image:'../../static/index/zixun/00300001822_66c5dd49.jpg',
					conter:'加大拆临拆违和环境整治力度，助推全国文明城市创建，实现拆墙透绿、还路于民，近日，市政府办公室决定对市政府机关大院大门东西两侧和大院东侧占压道路红线的建筑物进行拆除。4月14日上午，记者在市政府机关大院看到，施工人员设置了长长的围挡，挖掘机、推土机、除尘车正在有序工作，加紧清理拆除后的建筑垃圾。',
					url:'http://wwwmw.gov.cn/articles/2019/07/10/article_45_80230_1.html'
				},
				{
					id:3,
					tit:'誓让沙漠变绿洲 八步沙·六老汉·三代人',
					image:'http://www.godppgs.gov.cn/pic/003/000/018/00300001828_60ff84a2.jpg',
					conter:'3月20日中午，河西走廊迎来了今春的第一个沙尘天气。呼啸的北风刮到八步沙，被连片的树枝撕裂出了尖利的呼叫声。站在沙丘上，今年51岁的古浪县土门镇台子村王兴禄无限感慨：“八步沙的风再也卷不起大地上的沙了，这得亏了六老汉三代人38年的坚守啊！”',
					url:'http://www.wwwmw.gov.cn/articles/2019/04/08/article_56_80098_1.html'
				}
				]
				
					
			}
		},
		onLoad() {
			_self=this;
		},
		methods:{
			change(e) {
				this.current = e.detail.current;
			},
			select(e){
				let {
					index
				} = e.detail
				index=parseInt(index);
				console.log(index)
				switch(index){
					case 0:
						urlto('../indexpages/sdpc/sdpc');
						break;
					case 1:
						urlto('../indexpages/fbtz/fbtz');
						break;
					case 2:
						urlto('../indexpages/ssjg/ssjg');
						break;
					case 4:
						urlto('../indexpages/dwjh/dwjh');
						break;
					case 5:
						urlto('../indexpages/qjdt/qjdt');
						break;
					case 6:
						urlto('../indexpages/lxr/lxr');
						break;
				}
			},
			//点击轮播图
			lbdj(e){
				let lb=_self.current;
				//console.log(lb);
				webview('http://wwwmw.gov.cn/articles/2019/07/31/article_54_80251_1.html');
			},
			//文明咨询更多
			wmzxgd(e){
				console.log('wmzxgd');
				webview('http://wwwmw.gov.cn/channels/channel_45_1.html');
			},
			//
			wmzx_1(url){
				//console.log(url);
				webview(url);
			}			
		},
		onShow() {
			plus.screen.lockOrientation('portrait'); //锁死屏幕方向为竖屏 
		}
	}
	
	function urlto(url){
		uni.navigateTo({
			url:url
		})
	}
	function webview(turl){
		uni.navigateTo({
			url:'../indexpages/webview/webview?url='+turl
		})
	}
</script>

<style>
/* 	@import url("../../static/css/sunUI.css"); */
	swiper-item{}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.warp{
		margin: 50upx 0upx;
		background-color:#F8F8F8;
	}
	.image {
		width: 50upx;
		height: 50upx;
	}

	.text {
		font-size: 26upx;
		margin-top: 10upx;
	}
	.zixun{
		display: flex;
		margin-bottom: 20upx;
	}
	.zixun_cent{
		display: flex;
		flex-direction:column;
		margin-left:20upx ;
	}
	.zixun_bt{
		display: block;
		font-size: 13pt;
		width: 220px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.zixun_ms{
		font-size: 10pt;
		color: #808080;
		height: 134upx;
		width: 100%;
		overflow:hidden;
		text-overflow: ellipsis;
		display: block;
	}
	.wjdcbox{
		display: flex;
		width: 100%;
	}
	.clbsbox{
		width: 100%;
		padding: 0px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.wjdc_img{
		margin-right: 20upx;
	}
	.clbs_img{
		width: 100%;
		margin: 0px;
		padding: 0px;
	}
	.wjdc_bt{
		position: absolute;
		bottom: 10px;
		z-index: 99; 
		font-size: 10pt; 
		color: #fff;
		padding: 0px 5px;
		width: 200px;
		white-space: nowrap;
		overflow:hidden;
		text-overflow: ellipsis;
	}
</style>

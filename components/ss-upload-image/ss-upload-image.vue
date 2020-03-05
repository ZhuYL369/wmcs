<template>
  <view class="upload">
    <view class="list">
      <view class="item interval" v-for="(item,index) in fileList" :key="index">
        <image :src="item" v-if="item" @click="imagepreview(item)"></image>
        <view class="icon-close" @click.stop="handleRemove(index)">
		  <image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADk0lEQVRYR8WX3W8UVRjGn2d25ywiXilQbHcoTUp3bk2MWpKK91wSucFg/MB4Z5DPGwFvRBoIV0aIhmCMiQH+BqGEKvgH7BaSBWZ27Zd32tie2Z3XzLS77rY7O6fbEudqN3nf5/mdr/e8h/ifP67Hv/hqdpQZHgbwupDbCekTQR3kPEXmATwE5aeCV7tvqpsK8GQQWxZr9se0eAzAoKHwE0Cu5Kzg2p6nWOyW0xVgyrGPiGAc5HZD4/YwkXkSJ0a84EZSfiJA0VHnCJztyXhVkgBfup7uqNURoOjYVwke3QzzhoZArrle8MlqzTUAJUddAHBqM81btL4uePp0q3YbQClvfwDy++dkviwbykeFStD0aALEu71uV0i+/FwBRP58UQInX8E/kU8ToJjPHiet8U7mAkxbkFsCHAK4ozugzBH4OQQPEtjVUU/C465fu9QO4KhpAn0JAPEufuRgqA57kuDOznEym0EwutdDueio8wS+SNCbcT0dw8Uz8LjffrOe4a9JIxPgWW5RvzE0h9kIIhQ1AaK/LV5QtajHIvPyDuxc2qIeENidpJmpy1vD1eC3GKDkqIsATqSsfVkt6tEIorwLu3VW3W9CCKqqpvcNTePZ1AD6xVITAIZS9C4WPH1qGSBv/wJyv8HmKzPUYyMVVJsQAFrNQ6pJEk6qlsidgh+8EwMU8+oRieHUJAAi8CzRoxFEsQ+DOUIaIzc2X9Z57Pp67wqAvUByqwlAFNMKEf2PZmMpqyaMRr5iIiILrh9sawD8RXLbegByNT0WjXwDAH+7fvDShpcgAnBn8DTafBtZgjsk3zaYgU3bhCJy1/WD/T0dwzW1oLdjOF7w9MnlJYharazVrY1q1oDEari6EOXUvW4nS2rhPveP2mQMIABLjqom1u6VhmJdpThvv0/yetLdUvB0PwFpXkZT+ewxoRVfEKs/AWYgcpvAu+ntmcyJ4CbIA0mlmBJ+PuLXLjfvguiHP4AXFmh7IF8x2Iy9hyRdx3FJHrA/hMXvelc3yExqSBqpxQH1FS20tU0GskYhEuKCW9FnWoM7NqWlvP0NyE+NVE2DRL4t+MEazcS2fMpRZwU4Z6rfLU6A866nO2qlPUzeE8Gl9J3f2V4gsxZwcsQLfkgCNHqaLYX2UYCfAdhjOCPx0yzjBVeHgaVuOakArclRxUSWRyh4rfE4hSAUcm7lcfq71OXHqMIZgv7XFZsmbHbcvwRHvTDGr4z0AAAAAElFTkSuQmCC"></image>
        </view>
      </view>
    <view class="item" @click="chooseImage" v-if="fileList.length<limit">
		<image style="height: 67px;width: 67px;" src="data:image/png;base64,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"></image>
    </view>
    </view>
	<view>
		<button type="primary" @click="startupload">开始上传</button>
	</view>
  </view>
  
</template>

<script>
  export default {
    props: {
      limit: {
        type: Number,
        default: 5
      },
      url: {
        type: String,
        required: true
      },
      name: {
        type: String,
        default: 'file'
      },
      formData: {
        type: Object,
        default () {
          return {}
        }
      },
      header: {
        type: Object,
        default () {
          return {}
        }
      },
      fileList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data() {
      return {
	  }
    },
    methods: {
      chooseImage() {
		let imgnum=this.fileList.length;
		if(imgnum>=this.limit){
			return ;
		}
		let count=this.limit-imgnum;
        uni.chooseImage({
		  count:count,
          success: (chooseImageRes) => {
			/*
            const uploadTask = uni.uploadFile({
              url: this.url,
              name: this.name,
              filePath: chooseImageRes.tempFilePaths[0],
              formData: this.formData,
              header: this.header,
              success: (uploadFileRes) => {
                this.$emit('on-success', JSON.parse(uploadFileRes.data))
              },
              fail: (err) => {
                this.$emit('on-error', err)
              }
            })
			
            uploadTask.onProgressUpdate((res) => {
              this.$emit('on-process', res)
            })
			*/
		   //console.log(chooseImageRes);
		   //this.fileList.push(chooseImageRes.tempFilePaths[0]);
		   chooseImageRes.tempFilePaths.forEach(item => {
			   //console.log(item);
			   this.fileList.push(item);
		   });
		   //console.log("this.fileList: " + JSON.stringify(this.fileList));
		   this.$emit('on-choose',this.fileList);
          }
        })
      },
      handleRemove(index) {
        this.$emit('on-remove', index)
      },
	  startupload(){
		  console.log(this.fileList);
	  },
	  imagepreview(imgsrc){
		  let imgarray=new Array();
		  imgarray.push(imgsrc);
		  uni.previewImage({
		  	current:0,
			urls:imgarray
		  })
	  }
    }
  }
</script>

<style lang="scss" scoped>
  .upload {
    .list {
      display: flex;
      flex-wrap: wrap;
      .item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 140upx;
        height: 140upx;
        border-radius: 8upx;
        border: 2upx solid #D9D9D9;
        background-color: #f3f3f3;
        margin-bottom: 20upx;
        &.interval {
          margin-right: 16upx;
          border: none;
        }
        image {
          width: 100%;
          height: 100%;
          border-radius: 8upx;
          margin: 0;
        }
        .icon-close {
          position: absolute;
          top: 0;
          right: 0;
          width: 32upx;
          height: 32upx;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0 8upx 0 0;
        }
        .icon {
          width: 48upx;
          height: 48upx;
        }
      }
    }
  }
</style>

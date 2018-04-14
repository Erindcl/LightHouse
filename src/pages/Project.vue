<template>
<div>
  <div class="box_center">
    <div class="go_back" @click="goBack()">
      <div class="back_icon"><img src="../../static/icons/triangle.png" class="image_auto" alt=""/></div>
      <div class="back_text">返回</div>
    </div>
    <div class="project_box">
      <div class="project_title">{{project.title}}</div>
      <div class="one_module">
        <div class="type_label">需求</div>
        <div class="describe_box" v-html="project.needed"></div>
      </div>
      <div class="one_module">
        <div class="type_label">知识点</div>
        <div class="describe_box" v-html="project.knowledge"></div>
      </div>
      <div class="btn_box" style="justify-content:center;">
        <div class="func_btn" v-show="nowStatus == 0" @click="startDo">开始实践</div>
        <div class="func_btn" v-show="nowStatus == 1" @click="changeModelStatus('open')">上传结果</div>
        <div class="func_btn" v-show="nowStatus == 2">查看作品</div>
      </div>
      <!-- <div class="btn_box">
        <div class="func_btn">查看作品</div>
      </div> -->
    </div>
  </div>
  <!-- 项目上传模态框 -->
  <div class="upload_model" v-show="showModel" :style="{ width: clientWidth + 'px', height: clientHeight + 'px' }">
    <div class="center_box">
      <div class="level_box" style="margin-top:35px">
        <div class="step_title"><span>*</span>github(源码)地址：</div>
        <div class="step_content">
          <input type="text" class="github_scr" v-model="myproject.githubSrc" name="githubsrc" />
        </div>
      </div>
      <div class="level_box">
        <div class="step_title"><span>*</span>文字描述：</div>
        <div class="step_content">
          <textarea name="textdescribe" v-model="myproject.textDescribe" class="text_describe" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="level_box">
        <div class="step_title">选择演示文件类型：</div>
        <div class="step_content">
          <span class="radio_input"><input type="radio" @click="changeFileType('image')" name="fileType" value="图片" checked /> 图片</span>
          <span class="radio_input"><input type="radio" @click="changeFileType('video')" name="fileType" value="视频" /> 视频</span>
          <a href="javascript:;" class="file_input_box">
            <input type="file" id="input_file" accept="image/png,image/gif,image/jpg,video/mp4" @change="uploadFile" multiple="multiple"/>选择演示文件
          </a>
        </div>
      </div>
      <div class="level_box">
        <div class="step_title" style="width: 148px;">
        </div>
        <div class="step_content" id="show_files_box">
          <div class="upload_file">
            <img src="../../static/icons/file_notKnow.png" alt="">
            <span>还未上传任何文件</span>
          </div>
        </div>
      </div>
      <div class="level_box" style="justify-content: center;height: 68px;">
        <div class="close_btn" @click="changeModelStatus('close')">取 消</div>
        <div class="submit_btn" style="margin-left: 50px;" @click="uploadProject">上 传</div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        project: {
          title: '项目名称项目名称',
          needed: '企业要明确的需求不可单一理解为明确要管理什么，而是对要管理的目标怎样实现。整个过程强调的是管理的目标的项目规划时，企业经常会得到来自很多方面的意见，以指导企业在选型的初期应该怎样做。其中，肯定会有共同和管理的方法之间的关系，只有立足在这个关系的基础上，才可以保证做到真正明确需求。 当企业有信息化方面的项目规划时，企业经常会得到来自很多方面的意见，以指导企业在选型的初期应该怎样做。其中，肯定会有共同的一条，那就是“明确需求”。由此可见，明确自己的需求在信息化选型的初期阶段是多么重要。',
          knowledge: '企业要明确的需求不可单一理解为明确要管理什么，而是对要管理的目标怎样实现。整个过程强调的是管理的目标的项目规划时，企业经常会得到来自很多方面的意见，以指导企业在选型的初期应该怎样做。其中，肯定会有共同和管理的方法之间的关系，只有立足在这个关系的基础上，才可以保证做到真正明确需求。 当企业有信息化方面的项目规划时，企业经常会得到来自很多方面的意见，以指导企业在选型的初期应该怎样做。其中，肯定会有共同的一条，那就是“明确需求”。由此可见，明确自己的需求在信息化选型的初期阶段是多么重要。'
        },
        nowStatus: 0,
        // nowTime: '',
        showModel: false,
        clientWidth: 0,
        clientHeight: 0,
        myproject: {
          githubSrc: '',
          textDescribe: '',
          fileType: 'image',
          filesSrc: []
        }
      }
    },
    methods: {
      goBack () {
        window.history.go(-1);
      },
      startDo () {
        this.nowStatus = 1;
        // this.nowTime = new Date();
        // console.log(this.nowTime); // 后期需将开始的时间传给后台记录
      },
      changeModelStatus (str) {
        if (str == 'open') {
          this.showModel = true;
        } else {
          this.showModel = false;
        }
      },
      // 添加当前上传文件的类型
      changeFileType (str) {
        this.myproject.fileType = str;
      },
      // 上传项目信息
      uploadProject () {
        console.log('项目地址' + this.myproject.githubSrc);
        console.log('项目描述' + this.myproject.textDescribe);
        console.log('演示文件' + this.myproject.filesSrc);
        this.showModel = false;
        this.nowStatus = 2;
      },
      //获取文件路径和文件名保存在我的项目对象里
      uploadFile () {
        //  文件名放入div中显示出已上传的文件  ？？？
        let showFiles = document.getElementById('show_files_box');
        // let outStr = '';
        let fileList = event.target.files;
        showFiles.innerHTML = '';
        console.log(fileList);
        for (let i = 0; i < fileList.length; i++) {
          // image  video
          let thisFileType = fileList[i].type.split('/')[0];
          let oDiv = document.createElement("div");
          // console.log(thisFileType);
          if (thisFileType ==  this.myproject.fileType) {
            if (thisFileType == 'image') {
              oDiv.innerHTML = `<img style="height: 20px;vertical-align: middle;margin-right: 5px;" src="../../static/icons/img_file.png" alt=""><span style="font-size: 10px;display: inline-block;width: 100px;height: 30px;line-height: 30px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color: #999999;">` + fileList[i].name + `</span>`;
            } else {
              oDiv.innerHTML = `<img style="height: 20px;vertical-align: middle;margin-right: 5px;" src="../../static/icons/video_file.png" alt=""><span style="font-size: 10px;display: inline-block;width: 100px;height: 30px;line-height: 30px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color: #999999;">` + fileList[i].name + `</span>`;
            }
          } else {
            oDiv.innerHTML = `<img style="height: 20px;vertical-align: middle;margin-right: 5px;" src="../../static/icons/file_notKnow.png" alt=""><span style="font-size: 10px;display: inline-block;width: 100px;height: 30px;line-height: 30px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color: #999999;">文件格式不正确！</span>`;
            // alert('文件上传格式不正确！请重新选择文件');
          }
          oDiv.style.width = '160px';
          oDiv.style.height = '50px';
          oDiv.style.display = 'flex';
          oDiv.style.justifyContent = 'center';
          oDiv.style.alignItems = 'center';
          oDiv.style.background = '#F2F2F2';
          oDiv.style.borderRadius = '2px';
          oDiv.style.margin = '0px 10px 10px 0px';
          showFiles.appendChild(oDiv);
	        this.myproject.filesSrc.push(window.URL.createObjectURL(fileList[i]));
        }
        // console.log(this.myproject.filesSrc);
      }
    },
    mounted () {
      this.clientHeight = `${window.screen.availHeight}`;
      this.clientWidth = `${window.screen.availWidth}`;
    }
  }
</script>
<style scoped>
  .image_auto{
    width: 100%;
    height: 100%;
  }
  .box_center{
    /* height: 800px; */
    width: 1000px;
    /* background: skyblue; */
    margin: 0 auto 60px;
  }
  .go_back{
    height: 60px;
    width: 100px;
    /* background: lawngreen; */
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .back_icon{
    height: 25px;
    width: 25px;
    /* background: crimson; */
  }
  .back_icon img{
    transform:rotate(-90deg);
    -ms-transform:rotate(-90deg); 	/* IE 9 */
    -moz-transform:rotate(-90deg); 	/* Firefox */
    -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
    -o-transform:rotate(-90deg); 	/* Opera */
  }
  .back_text{
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
    color: #EA7C5A;
  }
  .project_box{
    /* height: 800px; */
    width: 1000px;
    background: #fff;
  }
  .project_title{
    height: 120px;
    width: 90%;
    line-height: 120px;
    margin: 0 auto;
    font-size: 18px;
    /* background: saddlebrown; */
  }
  .one_module{
    /* height: 400px; */
    width: 90%;
    margin: 0px auto 30px;
    /* background: lightblue; */
  }
  .type_label{
    height: 30px;
    line-height: 30px;
    width: 60px;
    font-size: 14px;
    text-align: center;
    background: #6ABA9C;
    color: #fff;
    border-radius: 3px;
  }
  .describe_box{
    line-height: 30px;
    margin: 10px 0px 0px;
  }
  .btn_box{
    height: 130px;
    width: 300px;
    display: flex;
    margin: 80px auto 0px;
    justify-content: space-between;
  }
  .func_btn{
    width: 90px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    background: #EA7C5A;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }
  .upload_model{
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center_box{
    height: 490px;
    width: 850px;
    background: #fff;
    overflow-y: auto;
    /* padding: 15px 0px; */
  }
  .level_box{
    width: 90%;
    /* height: 100px; */
    /* background: #6ABA9C; */
    margin: 20px auto 0px;
    display: flex;
    justify-content: space-between;
  }
  .step_title{
    height: 30px;
    line-height: 30px;
    width: 160px;
    /* background: skyblue; */
    text-align: right;
  }
  .step_title span{
    color: red;
    margin-right: 10px;
  }
  .step_content{
    width: 555px;
    display: flex;
    flex-wrap: wrap;
    /* height: 50px; */
    /* background: skyblue; */
  }
  .github_scr{
    height: 24px;
    width: 530px;
    border: 1px solid#ccc;
    padding: 5px 10px;
    border-radius: 3px;
  }
  .text_describe{
    height: 150px;
    width: 530px;
    line-height: 20px;
    border: 1px solid#ccc;
    padding: 10px 10px;
    border-radius: 3px;
  }
  .radio_input{
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
    display: inline-block;
    /* background: #EA7C5A; */
  }
  .file_input_box {
    font-size: 12px;
    width: 90px;
    height: 30px;
    line-height: 30px;
    margin-left: 314px;
    text-align: center;
    position: relative;
    cursor: pointer;
    color: #fff;
    background: #EA7C5A;
    border-radius: 3px;
    overflow: hidden;
    display: inline-block;
    text-decoration: none;
  }
  .file_input_box input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
  }
  .upload_file{
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    border-radius: 2px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .upload_file img{
    height: 20px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .upload_file span{
    font-size: 10px;
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    color: #999999;
  }
  .close_btn, .submit_btn{
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    padding: 0px 15px;
    background: #EA7C5A;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }
</style>

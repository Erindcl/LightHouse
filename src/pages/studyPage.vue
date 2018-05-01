<template>
 <div>
	 <!-- 中央章节信息展示 -->
  <div class="box_center">
    <div class="go_back" @click="goBack()">
      <div class="back_icon"><img src="../../static/icons/triangle.png" class="image_auto" alt=""/></div>
      <div class="back_text">返回</div>
    </div>
    <div class="chapter_box">
			<div class="chapter_box_center">
				<!-- 章节名字 开始结束等按钮 -->
				<div class="cbc_top">
					<span class="chapter_name_box">{{chapter.coursename}}</span>
					<div class="study_stutas_box" @click="changeStudyStatus(1)" v-show="nowStudyStatus == '0'">
						<div class="study_stutas_icon">
							<img src="../../static/icons/triangle.png" alt="" class="image_auto">
						</div>
						<span class="study_stutas_notice"> 
							开始学习
						</span>
					</div>
					<div class="study_stutas_box" @click="changeStudyStatus(2)" v-show="nowStudyStatus == '1'">
						<div class="study_stutas_icon">
							<img src="../../static/icons/stop.png" alt="" class="image_auto">
						</div>
						<span class="study_stutas_notice"> 
							完成学习并提交
						</span>
					</div>
					<div class="study_stutas_box" v-show="nowStudyStatus == '2'">
						<div class="study_stutas_icon">
							<img src="../../static/icons/over.png" alt="" class="image_auto">
						</div>
						<span class="study_stutas_notice"> 
							已结束学习 用时{{datenum}}天
						</span>
					</div>
				</div> 
				<!-- 章节各类信息 -->
				<div class="cbc_center">
					<div class="chapter_infors_list">
						<div class="cha_infor_list_left">标&emsp;&emsp;签：</div>
						<div class="cha_infor_list_right">
							<div :class="{tips_style: true, bgc_green: chapter.label == '基础', bgc_blue: chapter.label == '巩固', bgc_orange: chapter.label == '企业', bgc_gray: chapter.label == '其他'}">{{chapter.label}}
							</div>
						</div>
					</div>
					<div class="chapter_infors_list">
						<div class="cha_infor_list_left">知&ensp;识&ensp;点：</div>
						<div class="cha_infor_list_right">
							{{chapter.klabel}}
						</div>
					</div>
					<div class="chapter_infors_list">
						<div class="cha_infor_list_left">计划用时：</div>
						<div class="cha_infor_list_right">
							{{chapter.astudydate}} 天
						</div>
					</div>
					<div class="chapter_infors_list">
						<div class="cha_infor_list_left">学习资源：</div>
						<div class="cha_infor_list_right">
							<div class="source_url_list" :key="index" v-for="(oneSource, index) in sourceUrl"><a :href="oneSource.contenturl" target="_blank">{{oneSource.content}}</a></div>
						</div>
					</div>
					<div class="chapter_infors_list">
						<div class="cha_infor_list_left">实训描述：</div>
						<div class="cha_infor_list_right">
							{{projects.title}} 
							<br />
							<span style="color:#5e5e5e;cursor: pointer;" @click="showChapterFigure">点击查看示例</span>
						</div>
					</div>
					<div class="chapter_infors_list">
						<div class="cha_infor_list_left">实训目的：</div>
						<div class="cha_infor_list_right" v-html="projects.point">
						</div>
					</div>
					<div class="chapter_infors_list">
						<div class="cha_infor_list_left">试题测试：</div>
						<div class="cha_infor_list_right">
							<a :href="testURL" target="_blank">在线测试传送门</a>
						</div>
					</div>
				</div>
				<!-- 项目实践作品集 -->
				<div class="cbc_bottom"></div>
				<!-- 项目成果展示模块 -->
				<div class="project_results_box" v-show="nowStudyStatus == 2">
          <div class="pro_res_title">学员作品区</div>
					<div class="one_result" :key="index" v-for="(oneResult, index) in results">
  		      <div class="user_infor">
          		<div class="user_hp">
          		  <img :src="oneResult.head" class="image_auto" alt="">
          		</div>
          		<div class="user_name">{{oneResult.username}}</div>
          		<div class="user_intro">{{oneResult.introduce}}</div>
        		</div>
        		<!-- <div :class="{content_box_hidden: resultShowStatus[index] == 'close', content_box_spread: resultShowStatus[index] == 'open'}"> -->
        		<div class="content_box_hidden">
          		<div class="text_contain">{{oneResult.introduction}}</div>
          		<div class="githubsrc_contain">源码传送门： <a :href="oneResult.githubsrc" target="_blank">{{oneResult.githubsrc}}</a></div>
          		<!-- 演示视频 -->
          		<div class="video_contain" v-show="oneResult.type == 'video'">
          		  <video @click="showOneModel(index)" :src="oneResult.video" height="100%">
          		  </video>
          		</div>
          		<!-- 演示图片 -->
          		<div class="images_contain" v-show="oneResult.type == 'image'">
          		  <img @click="showOneModel(index)" style="height: 100%;" :src="oneResult.text[0]" alt="">
          		</div>

       		  </div>
        		<div class="property_box">
        		  <div class="property_left">
        		    <span>{{oneResult.date}}</span>
        		    <span>浏览量： {{oneResult.browsings}}</span>
        		  </div>
        		  <div class="btn background_green" @click="changeShow()">查看全文</div>
        		</div>
      		</div>
          <div class="more_box">
            <ul class="pages_box">
              <li id="pre_page" class="page_common page_uncheck"><</li>
              <li class="page_checked page_common">1</li>
              <li id="next_page" class="page_common page_uncheck">></li>
            </ul>
          </div>
				</div>
			</div>
    </div>
  </div>
	<!-- 模态框 -->
  <div class="model_box" v-show="showModel" :style="{ width: this.windowClient.width + 'px', height: this.windowClient.height + 'px' }">
    <div class="center_box_show" v-show="modulIsShow">
      <div @click="changeModelStatus(false)" class="close_btn_show">
        <img src="../../static/icons/close.png" class="image_auto" alt="">
      </div>
      <div class="contain_image" v-show="showImgMoudel">
        <div class="pre_next_img">
          <div class="pre_picture" @click="changeNowPic(-1)" id="pre_pic">< 上一张</div>
          <div class="next_picture" @click="changeNowPic(1)" id="next_pic">下一张 ></div>
        </div>
        <div class="just_image">
          <img :src="modulInfor.nowImgSrc" style="height: 100%" alt="">
        </div>
      </div>
      <div class="contain_video" v-show="!showImgMoudel">
        <video :src="modulInfor.videoSrc" height="100%" controls>
          <!-- <source :src="modulInfor.videoSrc"  type="video/mp4"> -->
        </video>
      </div>
    </div>
		<div class="center_box_upload" v-show="!modulIsShow">
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
        <div class="close_btn" @click="changeModelStatus(false)">取 消</div>
        <div class="submit_btn" style="margin-left: 50px;" @click="uploadProject">上 传</div>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
	data () {
		return {
			windowClient: {},
			showModel: false,
			modulIsShow: false, // 当前显示的是展示的模态框
			showImgMoudel: true,
			// 弹框显示东西的信息
			modulInfor: {
        videoSrc: '',
        imgSrc: [],
        nowImgSrc: '',
        nowImgIndex: 0
      },
			nowStudyStatus: 2,  // 当前用户的学习状态
			chapter: {
				courseid: 1,
				coursename: 'CSS实践+HTML基础',
				label: '基础',
				klabel: 'HTML基础用法',
				astudydate: 7,
			},
			datenum: 0,
			projects: {
				projectid: 1,
				title: '项目描述描述描述描述项目描述描述描述描述项目描述描述描述描述项目描述描述描述描述项目描述描述描述描述项目描述描述描述描述项目描述描述描述描述项目描述描述描述描述项目描述描述描述描述项目描述描述描述描述',
				function: ['../../static/images/test1.jpg', '../../static/images/test2.jpg', '../../static/images/test3.jpg'],
				point: '1.实训目的2.实训目的3.实训目的'
			},
			// 多个学习资源
			sourceUrl: [{
				content: '了解',
				contenturl: 'http://www.mooc.com'
			},{
				content: '字典功能',
				contenturl: 'www.mooc.com'
			},{
				content: '布局2xxx',
				contenturl: 'www.mooc.com'
			}],
			// 用户作品的信息
			results: [{
          username: '1moumoumou Miss',
          head: '../../static/images/hp2.png',
          introduce: '时间很长，没有尽头，只有路口。。。',
          introduction: '好与不好都走了，幸与不幸都过了。真正的梦想，永远在实现之中，更在坚持之中。累了，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，痛彻心菲也是精彩。选择一条道路，就选择一种人生一种无悔。阴霾终会荡尽，狞笑终是无聊卑鄙终会沉寂。',
          githubsrc: 'https://www.baidu.com/',
          type: 'video', // image
          video: '../../static/videos/videodemo.mp4',
          text: [],
          date: '2018-03-19',
          browsings: 38
				},
				{
          username: '1moumoumou Miss',
          head: '../../static/images/hp1.png',
          introduce: '时间很长，没有尽头，只有路口。。。',
          introduction: '好与不好都走了，幸与不幸都过了。真正的梦想，永远在实现之中，更在坚持之中。累了，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，就停一停，让手贴着手，温暖冷漠的岁月；苦了，就笑一笑，让心贴着心，体味至爱的抚摸；哭了，就让泪水尽情流淌，痛彻心菲也是精彩。选择一条道路，就选择一种人生一种无悔。阴霾终会荡尽，狞笑终是无聊卑鄙终会沉寂。',
          githubsrc: 'https://www.baidu.com/',
          type: 'image', // image
          video: '',
          text: ['../../static/images/test1.jpg', '../../static/images/test2.jpg', '../../static/images/test3.jpg'],
          date: '2018-03-19',
          browsings: 38
        }

			],
			// 项目上传相关信息
			myproject: {
        githubSrc: '',
        textDescribe: '',
        fileType: 'image',
        filesSrc: []
      },
      myFiles: new window.FormData()

		}
	},
	computed: {
		testURL: function () {
      return '#/comshow/testonline?id=' + this.chapter.courseid;
		}
	},
	created () {
		this.menun();
		this.getChapterData();
	},
	methods: {
		// 获取本章节的所有信息
		getChapterData () {
			const self = this;
			console.log(self.GetQueryString('name'));
      axios.post('http://192.168.5.101:8080/goc/course/showFR', qs.stringify({'name': self.GetQueryString('name')}), { headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(function (res) {
				console.log('获取章节信息 服务器连接成功');
				self.chapter = res.data.fcourse;
				self.nowStudyStatus = res.data.state;
				if(self.nowStudyStatus == 2) {
					self.datenum = res.data.datenum;
				}
				self.projects = res.data.projects;
				self.projects.function = res.data.projects.function.split(';');
				for (let i = 0; i < self.projects.function.length; i++){
					self.projects.function[i] = '../../static/images/' + self.projects.function[i];
				}
				self.sourceUrl = res.data.content;
				self.results = res.data.proList;
				for (let i = 0; i < self.results.length; i++) {
					if (self.results[i].type == 'video') {
						self.results[i].video = '../../static/videos/' + res.data.proList[i].video;
					} else {
						self.results[i].text = res.data.proList[i].text.split(';');
						for (let j = 0; j < self.results[i].text.length; j++){
							self.results[i].text[j] = '../../static/images/' + self.results[i].text[j];
						}
					}
				}
      })
      .catch(function (err) {
        console.log('获取章节信息 服务器连接错误，原因：' + err);
      });
		},
		// 首次进入本页从顶部开始显示
		menun () {
      window.scrollTo(0, 0);
    },
		// 返回上一页函数
		goBack () {
      window.history.go(-1);
    },
		// 解析URL函数
		GetQueryString(name) {
      var reg = new RegExp('(\\\\?|\\\\&)' + name + '=([^\\\\&]+)');
      var reg2 = new RegExp('([^=]+)$');
      var r = window.location.href.match(reg);
      if (r != null) {
        return r[0].match(reg2)[0];
      } else {
        return null;
      }
		},
		// 改变学习状态 并将状态传给后台
		changeStudyStatus (status) {
      
			if (status == 1) {
        // 需传状态给后台
        const self = this;
				console.log('我要开始学习了');
				console.log(self.projects);
				axios.post('http://192.168.5.101:8080/goc/project/insertProject', qs.stringify({'id': self.projects.projectid}), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (res) {
          console.log('申请接受项目 服务器连接成功');
        })
        .catch(function (err) {
          console.log('申请接受项目 服务器连接错误，原因：' + err);
				});
				this.nowStudyStatus = status;
			} else {
				// 项目上传弹框设置
				console.log('我要上传项目了');
				this.modulIsShow = false;
				this.showModel = true;
			}
		},
		// 列表展开还是收起控制
    changeShow () {
      let oParent = event.target.parentNode;
      let changedDiv = oParent.previousSibling.previousSibling;
      if (event.target.innerHTML == '查看全文') {
        event.target.innerHTML = '收起全文';
        changedDiv.className = 'content_box_spread';
      } else {
        event.target.innerHTML = '查看全文';
        changedDiv.className = 'content_box_hidden';
      }
		},
		// 获取当前浏览器窗口宽高
		client () {
      if (window.innerHeight !== undefined) {
        return {
          "width": window.innerWidth,
          "height": window.innerHeight
        }
      } else if (document.compatMode === "CSS1Compat") {
        return {
          "width": document.documentElement.clientWidth,
          "height": document.documentElement.clientHeight
        }
      } else {
        return {
          "width": document.body.clientWidth,
          "height": document.body.clientHeight
        }
      }
		},
		// 点击图片或视频在模态框中展示
		// 展示示例图
		showChapterFigure () {
      this.showImgMoudel = true;
      let prePicBtn = document.getElementById('pre_pic');
      this.modulInfor.imgSrc = this.projects.function;
      this.modulInfor.nowImgSrc = this.modulInfor.imgSrc[0];
      this.modulInfor.nowImgIndex = 0;
      prePicBtn.style.cursor = 'not-allowed';
      prePicBtn.style.background = '#77849573';
			this.modulIsShow = true;
			this.showModel = true;
		},
    // 如果是图片模态框 需要设置当前显示的图片是图片数组中的第一个
    showOneModel (index) {
      let prePicBtn = document.getElementById('pre_pic');
      if (this.results[index].type == 'video') {
        this.showImgMoudel = false;
        this.modulInfor.videoSrc = this.results[index].video;
      } else {
        this.showImgMoudel = true;
        this.modulInfor.imgSrc = this.results[index].text;
        this.modulInfor.nowImgSrc = this.modulInfor.imgSrc[0];
        this.modulInfor.nowImgIndex = 0;
        prePicBtn.style.cursor = 'not-allowed';
        prePicBtn.style.background = '#77849573';
      }
			this.modulIsShow = true;
			this.showModel = true;
    },
    // 图片演示文件在模态框中翻页
    changeNowPic (num) {
      let prePicBtn = document.getElementById('pre_pic');
      let nextPicBtn = document.getElementById('next_pic');
      if (this.modulInfor.nowImgIndex == 0) {
        if (num == -1) {
          this.modulInfor.nowImgIndex = 0;
        } else {
          this.modulInfor.nowImgIndex += 1;
          prePicBtn.style.cursor = 'pointer';
          prePicBtn.style.background = '#6ABA9C';
        }
      } else if (this.modulInfor.nowImgIndex != 0 && this.modulInfor.nowImgIndex < (this.modulInfor.imgSrc.length - 1)) {
        this.modulInfor.nowImgIndex += num;
      } else {
        if (num == -1) {
          this.modulInfor.nowImgIndex -= 1;
          nextPicBtn.style.cursor = 'pointer';
          nextPicBtn.style.background = '#6ABA9C';
        } else {
          this.modulInfor.nowImgIndex = this.modulInfor.imgSrc.length - 1;
        }
      }
      if (this.modulInfor.nowImgIndex == 0){
        prePicBtn.style.cursor = 'not-allowed';
        prePicBtn.style.background = '#77849573';
      }
      if (this.modulInfor.nowImgIndex == this.modulInfor.imgSrc.length - 1){
        nextPicBtn.style.cursor = 'not-allowed';
        nextPicBtn.style.background = '#77849573';
      }
      this.modulInfor.nowImgSrc = this.modulInfor.imgSrc[this.modulInfor.nowImgIndex];
		},
		changeModelStatus (str) {
      this.showModel = str;
		},
		// 添加当前上传文件的类型
		changeFileType (str) {
      this.myproject.fileType = str;
		},
		// 上传项目信息
    uploadProject () {
      const self = this;
      self.myFiles.append('projectid', self.projects.projectid);
      self.myFiles.append('githubSrc', self.myproject.githubSrc);
      self.myFiles.append('textDescribe', self.myproject.textDescribe);
      self.myFiles.append('fileType', self.myproject.fileType);
      axios.post('http://192.168.5.101:8080/goc/project/addProject', self.myFiles, { headers: {
        'Content-Type': 'multipart/form-data'
        }
      }).then(function (res) {
				console.log('上传项目 服务器连接成功');
				console.log(res.data);
				self.datenum = res.data.datenum;
				self.results = res.data.proList;
				for (let i = 0; i < self.results.length; i++) {
					if (self.results[i].type == 'video') {
						self.results[i].video = '../../static/videos/' + res.data.proList[i].video;
					} else {
						self.results[i].text = res.data.proList[i].text.split(';');
						for (let j = 0; j < self.results[i].text.length; j++){
							self.results[i].text[j] = '../../static/images/' + self.results[i].text[j];
						}
					}
        }
        console.log(self.results);
      })
      .catch(function (err) {
        console.log('上传项目 服务器连接错误，原因：' + err);
      });
      this.showModel = false;
      this.nowStudyStatus = 2;
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
            this.myFiles.append('image' + i, fileList[i]);
          } else {
            oDiv.innerHTML = `<img style="height: 20px;vertical-align: middle;margin-right: 5px;" src="../../static/icons/video_file.png" alt=""><span style="font-size: 10px;display: inline-block;width: 100px;height: 30px;line-height: 30px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color: #999999;">` + fileList[i].name + `</span>`;
            this.myFiles.append('video' + i, fileList[i]);
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
    },
	},
	mounted () {
		window.addEventListener('scroll', this.menu);
		this.windowClient = this.client();
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
  .back_icon img, .study_stutas_icon img{
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
  .chapter_box{
    /* height: 800px; */
    width: 1000px;
		padding: 40px 0px; 
    background: #fff;
  }
	.chapter_box_center{
		width: 92%;
		/* height: 700px; */
		margin: 0px auto;
		/* background: lightgreen; */
	}
  .cbc_top{
		height: 30px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.chapter_name_box{
		font-size: 18px;
		margin-left: 20px;
	}
	.study_stutas_box{
		height: 100%;
		width: 190px;
		display: flex;
		align-items: center;
	}
	.study_stutas_icon{
		width: 30px;
		height: 30px;
		margin-right: 10px;
		cursor: pointer;
	}
	.study_stutas_notice{
		color: #8a8a8a;
		font-size: 15px;
	}
	.cbc_center{
		background: #F2F2F2;
		border-radius: 4px;
		width: 95.6%;
		padding: 20px;
		margin-top: 20px;
	}
	.chapter_infors_list{
		width: 100%;
	  display: flex;
		justify-content: space-between;
	}
	.cha_infor_list_left{
		width: 100px;
		height: 30px;
		line-height: 30px;
		color: #8a8a8a;
	}
	.cha_infor_list_right{
		width: 95%;
		/* height: 200px; */
		line-height: 30px;
		/* background: #EA7C5A; */
		margin-bottom: 10px;
	}
	.tips_style{
    display: inline-block;
    height: 25px;
    line-height: 25px;
    padding: 0px 8px;
    color: #fff; 
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;
  }
  .bgc_green{
    background: #6ABA9C;
  }
  .bgc_blue{
    background: #0099CC;
  }
  .bgc_orange{
    background: #EA7C5A;
  }
  .bgc_gray{
    background: #778495;
  }
	.cha_infor_list_right a{
		color: #000;
	}
	.cha_infor_list_right a:hover{
		color: #EA7C5A;
	}
	.source_url_list{
		line-height: 25px;
		height: 25px;
	}
	/* 项目成果展示 */
	.project_results_box{
    margin-top: 30px;
		width: 100%;
		/* height: 200px; */
		/* background: lightblue; */
	}
	.pro_res_title{
		border-left: 3px solid #EA7C5A;
		height: 25px;
		line-height: 25px;
		padding-left: 15px;
		font-size: 18px;
		margin-bottom: 20px;
	}
  .one_result{
    /* height: 400px; */
    width: 95.6%;
    margin: 0px auto 30px;
    background: #F2F2F2;
    padding: 20px 20px;
  }
  .user_infor{
    height: 50px;
    width: 800px;
    /* background: #EA7C5A; */
    display: flex;
    align-items: flex-end;
  }
  .user_hp{
    height: 50px;
    width: 50px;
    margin-right: 15px;
  }
  .user_hp img{
    border-radius: 5px;
  }
  .user_name{
    margin-right: 15px;
    height: 30px;
    line-height: 30px;
    font-weight: 600;
  }
  .user_intro{
    height: 30px;
    line-height: 30px;
    width: 400px;
    /* background: skyblue; */
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    /* color: #bfbfbf; */
  }
  .content_box_hidden{
    height: 90px;
    overflow: hidden;
    margin: 10px 0px;
    position: relative;
  }
  .content_box_hidden::after {
    content:"......";
    font-weight:bold;
    position:absolute;
    bottom:4px;
    right:0;
    padding: 0px 30px 0px 2px;
    background: #F2F2F2;
  }
  .text_contain{
    font-size: 15px;
    line-height: 30px;
  }
  .githubsrc_contain{
    width: 100%;
    line-height: 30px;
    font-size: 15px;
  }
  .githubsrc_contain a{
    color: #6ABA9C;
  }
  .content_box_spread{
    margin-top: 10px;
  }
  .video_contain{
    height: 250px;
    width: 70%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    /* background: #EA7C5A; */
  }
  .images_contain{
    width: 80%;
    height: 250px;
    display: flex;
    margin: 20px auto;
    justify-content: center;
    flex-wrap: wrap;
    /* background: rgb(68, 48, 90); */
  }
  .property_box{
    height: 30px;
    line-height: 30px;
    width: 100%;
    /* background: #EA7C5A; */
    display: flex;
    justify-content: space-between;
  }
  .property_left span{
    margin-right: 10px;
    font-size: 14px;
    color: #adadad;
  }
  .btn{
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    padding: 0px 15px;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }
  .background_green{
    background: #6ABA9C;
  }
  .background_orange{
    background: #EA7C5A;
  }
  /* 弹框 */
    .model_box{
      background: rgba(0,0,0,0.7);
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top:0px;
      left: 0px;
      z-index: 10;
    }
  /* .center_box{ */
    /* width: 400px; */
    /* height: 200px; */
    /* background: #fff; */
  /* } */
  .close_btn_show{
    float: right;
    margin: -30px -30px 0px 0px;
    width: 30px;
    height: 30px;
    /* background: #EA7C5A; */
    cursor: pointer;
  }
  .contain_video{
    height: 500px;
    /* width: 400px; */
    /* background: rgba(0,0,0,0.7); */
  }
  /* .contain_image{ */
    /* height: 500px; */
    /* width: 600px; */
    /* background: #6ABA9C; */
  /* } */
  .pre_next_img{
    width: 184px;
    height: 40px;
    margin: -30px auto 0px;
    /* background: #6ABA9C; */
    display: flex;
    justify-content: space-between;
  }
  .pre_picture, .next_picture{
    padding: 0px 15px;
    text-align: center;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;
    height: 30px;
    line-height: 35px;
    font-weight: 600;
    
    user-select: none;
  }
  .pre_picture{
    background: #77849573;
    cursor: not-allowed;
  }
  .next_picture{
    background: #6ABA9C;
    cursor: pointer;
  }
  .just_image{
    height: 450px;
  }

/* 项目上传模态框样式 */
  .center_box_upload{
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
  .more_box{
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pages_box{
    display: flex;
  }
  .page_common{
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 0px 5px;
    cursor: pointer;
  }
  .page_checked{
    border: 2px solid #EA7C5A;
    color: #EA7C5A;
    font-weight: 500;
  }
  .page_uncheck{
    border: 2px solid rgba(0,0,0,0);
    color: #999;
  }
</style>
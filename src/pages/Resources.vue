<template>
  <div>
    <div class="main_center">
      <!-- 分类导航 -->
      <div class="type_nav">
        <ul>
          <li>分类</li>
          <li @click="changeShowDN(92)">全部</li>
          <li @click="changeShowDN(154)">企业</li>
          <li @click="changeShowDN(218)">资源</li>
          <li @click="changeShowDN(295)">学习经验</li>
        </ul>
        <!-- 三角形 -->
        <div class="now_pointer">
          <div class="triangle_box" :style="{ marginLeft: triangleLeft + 'px' }">
            <img src="../../static/icons/triangle.png" alt="" class="image_auto">
          </div>
        </div>
      </div>
      <!-- 文章列表 -->
      <div class="module_box">
        <div class="box_center">
          <!-- 文章 -->
          <div class="one_article" :key="index1" v-for="(oneArt, index1) in nowArticles">
            <div class="art_title"><a :href="oneArt.source" @mouseover="showThisArt(index1)" @mouseout="notShowThisArt(index1)">{{oneArt.title}}</a></div>
            <div class="horizontal_line" :style="{ width: horizontalLineWid + 'px' }" v-show="nowOverArt == index1"></div>
            <div class="horizontal_line" style="background: rgba(0,0,0,0);width: 3px;" v-show="nowOverArt != index1"></div>
            <div class="art_infor type_infor">
              类别:
              <span :key="index2" v-for="(oneType, index2) in oneArt.type">{{oneType}}</span>
            </div>
            <div class="art_infor other_infor">
              发布时间： {{oneArt.time}}
              <span>浏览量： {{oneArt.watcher}}</span>
              <span>赞： {{oneArt.liker}}</span>
            </div>
          </div>
          <!-- 翻页 -->
          <div class="more_box">
            <ul class="pages_box">
              <li id="pre_page" @click="changePage(-1)" class="page_common page_uncheck"><</li>
              <li :class="{ page_uncheck: nowPage != index, page_checked: nowPage == index, page_common:true }" :key="index" v-for="(onePage, index) in pageCount" @click="changePage(index)">{{index+1}}</li>
              <li id="next_page"  @click="changePage(-2)" class="page_common page_uncheck">></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        articles: [
          {
            title: '1标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            watcher: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '2标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '3标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '4标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '5标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '6标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '7标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '8标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '9标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '10标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '11标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '12标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '13标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          },
          {
            title: '14标题标题标题标题',
            type: ['js', '前端', '大数据'],
            time: '2018-03-22',
            wather: 147,
            liker: 57,
            source: '#5'
          }
        ],
        nowArticles: [],
        triangleLeft: 90,
        pageCount: 3,
        nowPage: 0,
        nowOverArt: -1,
        horizontalLineWid: 2
      }
    },
    created () {
      document.body.scrollTop = '0px';
    },
    methods: {
      // 当前显示的分类
      changeShowDN (targetDis) {
        let timer = setInterval (() => {
          if (targetDis >= this.triangleLeft) {
            if ((targetDis - this.triangleLeft) < 10) {
              this.triangleLeft = targetDis;
              clearInterval(timer);
            } else {
              this.triangleLeft += 10;
            }
          } else {
            if ((this.triangleLeft - targetDis) < 10) {
              this.triangleLeft = targetDis;
              clearInterval(timer);
            } else {
              this.triangleLeft -= 10;
            }
          }
        },10);
      },
      // 翻页函数
      changePage (index) {
        let prePageBtn = document.getElementById('pre_page');
        let nextPageBtn = document.getElementById('next_page');
        if (this.nowPage == 0) {
          if(index == -1) {
            this.nowPage = 0;
          } else if (index == -2) {
            this.nowPage += 1;
            prePageBtn.style.cursor = 'pointer';
          } else {
            this.nowPage = index;
            prePageBtn.style.cursor = 'pointer';
          }
        } else if (this.nowPage > 0 && this.nowPage < (this.pageCount-1)) {
          if(index == -1) {
            this.nowPage -= 1;
          } else if (index == -2) {
            this.nowPage += 1;
          } else {
            this.nowPage = index;
          }
        } else {
          if(index == -1) {
            this.nowPage -= 1;
            nextPageBtn.style.cursor = 'pointer';
          } else if (index == -2) {
            this.nowPage = this.pageCount - 1;
          } else {
            this.nowPage = index;
            nextPageBtn.style.cursor = 'pointer';
          }
        }
        if (this.nowPage == 0) {
          prePageBtn.style.cursor = 'not-allowed';
        }
        if (this.nowPage == this.pageCount - 1) {
          nextPageBtn.style.cursor = 'not-allowed';
        }
        this.nowArticles = this.articles.slice(this.nowPage*5,(this.nowPage+1)*5);
        document.body.scrollTop = '0px';
      },
      showThisArt (index) {
        this.nowOverArt = index;
        clearInterval(timer);
        let timer = setInterval(()=>{
          if (this.horizontalLineWid < 30) {
            this.horizontalLineWid += 2;
          } else {
            this.horizontalLineWid = 30;
            clearInterval(timer);
          }
        },10)
      },
      notShowThisArt (index) {
        clearInterval(timer);
        let timer = setInterval(()=>{
          if (this.horizontalLineWid > 2) {
            this.horizontalLineWid -= 2;
          } else {
            this.horizontalLineWid = 2;
            this.nowOverArt = -1;
            clearInterval(timer);
          }
        },10)
      }
    },
    mounted () {
      let prePageBtn = document.getElementById('pre_page');
      let nextPageBtn = document.getElementById('next_page');
      prePageBtn.style.cursor = 'not-allowed';
      this.pageCount = parseInt(this.articles.length/5);
      if ((this.articles.length-this.pageCount*5) != 0) {
        this.pageCount += 1;
      }
      if (this.articles.length > 5) {
        this.nowArticles = this.articles.slice(0,5);
      } else {
        nextPageBtn.style.cursor = 'not-allowed';
      }
    }
  }
</script>
<style scoped>
  .image_auto{
    width: 100%;
    height: 100%;
  }
  .main_center{
    /* height: 800px; */
    width: 1000px;
    margin: 0 auto;
  }
  .type_nav{
    height: 110px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .type_nav ul{
    display: flex;
  }
  .type_nav ul li:nth-child(1){
    background: #778495;
    width: 56px;
    text-align:center;
    border-radius:3px;
    color: #fff;
    font-weight: 500;
  }
  .type_nav ul li{
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin-right: 30px;
  }
  .now_pointer{
    height: 22px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  .triangle_box{
    height: 20px;
    width: 20px;
    /* background: salmon; */
  }
  .module_box{
    width: 100%;
    background: #fff;
    margin-bottom: 60px;
  }
  .box_center{
    width: 880px;
    /* height: 400px; */
    margin: 0 auto;
    /* padding: 50px 0px; */
    /* background: skyblue; */
  }
  .one_article{
    width: 100%;
    height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(223, 222, 222);
  }
  .art_title{
    height: 50px;
    line-height: 50px;
    width: 100%;
  }
  .art_title a{
    font-size: 18px;
    text-decoration: none;
    color: #000;
  }
  .horizontal_line{
    height: 3px;
    background: #EA7C5A;
  }
  .art_infor{
    height: 30px;
    width: 100%;
    line-height: 30px;
    font-size: 14px;
    color: rgb(155, 155, 155);
  }
  .type_infor span{
    margin-left: 20px;
  }
  .other_infor span{
    margin-left: 25px;
  }
  .more_box{
    height: 150px;
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

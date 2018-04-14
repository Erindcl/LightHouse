<template>
  <div class="box_center">
    <div class="go_back" @click="goBack()">
      <div class="back_icon"><img src="../../static/icons/triangle.png" class="image_auto" alt=""/></div>
      <div class="back_text">返回</div>
    </div>
    <div class="resource_box">
      <div class="one_article">
        <div class="art_title">{{article.title}}</div>
        <div class="art_infor type_infor">
          类别:
          <span :key="index" v-for="(oneType, index) in article.type">{{oneType}}</span>
        </div>
        <div class="art_infor other_infor">
          发布时间： {{article.time}}
          <span>浏览量： {{article.watcher}}</span>
        </div>
      </div>
      <div class="art_text" v-html="article.text">
      </div>
      <div class="by_who">
        <div class="user_name_box">{{article.userName}}</div>
        <div class="user_hp_box"><img class="image_auto" style="border-radius: 3px;" :src="article.userhp" alt=""></div>
        <div class="by_style">BY</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        article: {
          title: '标题标题标日当你问你哦',
          text: 'solid 边框由实线组成、dotted 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、g<br>roove lid 边框由实线组成、dotted 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted<br> 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted 边框由点组成、dash 边框<br>由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted 边框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove lid 边框由实线组成、dotted 边<br>框由点组成、dash 边框由短线组成、double 边框由双实线组成、groove 边框带有立体感的沟槽、ridge 边框成畸形、inset 边框内嵌一个立方体边框、outset 边框外嵌一个立方体--<br>经常可以在网页上看到很多漂亮的虚线，今天我也研究了一下它的实现方式，',
          type: ['前端', 'JS', 'Vue'],
          time: '2018-03-28',
          watcher: 25,
          userName: 'xxxxxx',
          userhp: '../../static/images/hp1.png'
        }
      }
    },
    methods: {
      goBack () {
        window.history.go(-1);
      }
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
  .resource_box{
    /* height: 800px; */
    width: 1000px;
    background: #fff;
  }
  .one_article{
    width: 92%;
    margin: 0 auto;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* padding-bottom: 10px; */
    /* border-bottom: 2px solid rgb(223, 222, 222); */
  }
  .art_title{
    height: 50px;
    line-height: 50px;
    width: 100%;
    font-size: 18px;
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
  .art_text{
    line-height: 30px;
    width: 92%;
    margin: 15px auto;
    padding-bottom: 15px;
  }
  .by_who{
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row-reverse;
    /* background: #EA7C5A; */
    padding-bottom: 50px;
  }
  .user_name_box{
    /* width: 100px; */
    height: 30px;
    /* background: lightseagreen; */
    margin-right: 45px;
    line-height: 30px;
    font-size: 14px;
    color: #4d4d4d;
  }
  .by_style{
    margin-right: 15px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: rgb(158, 157, 157);
  }
  .user_hp_box{
    height: 30px;
    width: 30px;
    margin-right: 15px;
  }
</style>

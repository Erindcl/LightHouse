<template>
  <div style="background: #fff;">
    <div class="banner_box">
      <img class="image_auto" src="./../../static/images/banner.png">
      <div class="nav">
        <div class="nav_center">
          <div class="image_box">
            <img src="../../static/icons/logo.png" alt="" class="image_auto">
          </div>
          <div class="nav_text">
            <div class="link_box_left">
              <div class="one_link border_color">
                <router-link to="/indexintro">首页</router-link>
              </div>
            </div>
            <div class="link_box_right">
              <div class="one_link" style="width: 100px; height:50px; border: 4px solid rgba(0,0,0,0);">
                <router-link to="/regandlog/login">
                  登录 | 注册
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro_content">
      <section >
        <svg width="400px" height="150px" id="icon"  style=" padding-top:40px">
          <polygon points="240,10 90,50 250,120 "
          style="fill:transparent;
          stroke:#cccccc; stroke-width:3"/>
          <polygon points="200,0 80,120 290,85 "
          style="fill:#EA7C5A;
          stroke:#EA7C5A;"/>
          <text x="175" y="65" fill="white" style="font-weight:bold;font-size:18px">我们是</text>
        </svg>
        <div class="intro_text" style="position:relative">
          <svg style="position:absolute;left:-14px;bottom:-74px;width:60px">
            <line x1="10" y1="10" x2="60" y2="60"
            style="stroke:#ccc;stroke-width:2"/>
            <circle cx="10" cy="10" r="7" stroke="black" stroke-width="2" fill="black" />
          </svg>
          <span>恐怕文蛋我很期待金瓯无缺假发票都叫我气哦东坡区未分配菩萨的恐怕文我们是大坏蛋我很期待金瓯无缺假发票都叫我气哦东坡区未分配菩萨的恐怕文</span>
        </div>
       
        <div class="intro_text" style="position:relative">
          <span>我们是大坏蛋我很期待金瓯无缺假发票都叫我气哦东坡我们是大坏蛋我很期待金瓯无缺假发票都叫我气哦东坡我们是大坏蛋我很期待金瓯无缺假发票都叫我气哦东坡区未分配菩萨的恐怕文</span>
          <svg style="position:absolute;right:-14px;bottom:-74px;width:60px">
            <line x1="0" y1="60" x2="50" y2="10"
            style="stroke:#ccc;stroke-width:2"/>
            <circle cx="50" cy="10" r="7" stroke="black" stroke-width="2" fill="black" />
          </svg>
        </div>

        <div class="intro_text" style="position:relative">
          <svg style="position:absolute;left:-14px;bottom:-74px;width:60px">
            <line x1="10" y1="10" x2="60" y2="60"
            style="stroke:#ccc;stroke-width:2"/>
            <circle cx="10" cy="10" r="7" stroke="black" stroke-width="2" fill="black" />
          </svg>
          <span>我们是大坏蛋我很我们是大坏蛋我很期待金瓯无缺假发票都叫我气哦东坡我们是大坏蛋我很期待金瓯无缺假发票都叫我气哦东坡期待金瓯无缺假发票都叫我气哦东坡区未分配菩萨的恐怕文</span>
        </div>
      </section>
      <section id="third">
        <div class="gray_bg_box">
          <div class="function_box">
            <svg width="400px" height="200px" id="center" >
              <polygon points="120,30 280,30 280,180 120,180"
                style="fill:none;stroke:#ccc;stroke-width:5"/>
              <polygon points="200,0 300,100 200,200 100,100"
                style="fill:#ea7c5a;"/>
              <text x="170" y="105" fill="white" style="font-weight:bold;font-size:20px"> 致力于</text>
            </svg>
            <svg id="left">
              <line x1="0" y1="0" x2="0" y2="40"
              style="stroke:#fff;stroke-width:16"/>
              <line x1="0" y1="40" x2="45" y2="40"
              style="stroke:#fff;stroke-width:8"/>
            </svg>
            <svg  id="right">
              <line x1="0" y1="0" x2="40" y2="0"
              style="stroke:#fff;stroke-width:16"/>
              <line x1="40" y1="0" x2="40" y2="45"
              style="stroke:#fff;stroke-width:8"/>
            </svg>
            <div class="left_text">
              <span>所所所少时诵诗书所所</span>
              <span>少时诵诗书所所所所所所所所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少所所所所所所</span>
            </div>
            <div class="right_text">
              <span>所所所少时诵诗书所所</span>
              <span>少时诵诗书所所所所所所所所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少时诵诗书所所所少所所所所所所</span>
            </div>
          </div>
        </div>
      </section>
      <section id="fourth">
        <header>
          <h2>联系我们</h2>
        </header>
        <div class="contact">
          <div class="contact_icon" >
            <div class="contact_log_box">
              <img src="../../static/icons/logo.png" class="image_auto">
            </div>
            <span style="color:white;font-size:24px;font-weight:bold">智 学 塔</span>
          </div>
          <div class="contact_text">
            <p><span>QQ群：</span> <span>985718715</span></p>
            <p><span>微博：</span> <span>zhixingtaguanbo</span></p>
            <p><span>邮箱：</span> <span>zhixinta2018@163.com</span></p>
            <p><span>微信公众号：</span> <span>zhixinta2018</span></p>
          </div>
        </div>
      </section>
    </div>
    <div class="footer">
      <span>
        Copyright©2018 Smart-Learn-Tower All Rights Reserved. 
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .image_auto{
    width: 100%;
    height: 100%; 
  }
  .nav{
    height: 60px;
    width: 100%;
    position: absolute;
    top: 0px;
  }
  .nav_center{
    width: 1000px;
    height: 100%;
    line-height: 60px;
    /* background: salmon; */
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .image_box{
    width: 45px;
    height: 45px;
  }
  .nav_text{
    width: 930px;
    height: 100%;
    /* background: salmon; */
    display: flex;
    justify-content: space-between;
  }
  .link_box_left{
    width: 300px;
    height: 100%;
    /* background: rgb(199, 188, 31); */
    display: flex;
  }
  .link_box_right{
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .one_link{
    height: 52px;
    line-height: 60px;
    margin: 0px 20px 0px 0px;
  }
  .border_none{
    border: 4px solid rgba(0,0,0,0);
  }
  .border_color{
    border-bottom: 3px solid #EA7C5A;
    /* border-left: 4px solid rgba(0,0,0,0);
    border-right: 4px solid rgba(0,0,0,0);
    border-top: 4px solid rgba(0,0,0,0); */
  }
  .one_link a{
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }
  .banner_box{
    height: 650px;
    width: 100%;
    position: relative;
  }

  section{
    min-height: 400px;
    background: #fff;
  }

  #icon {
    display: block;
    margin: 0 auto
  }
  .intro_text {
    padding: 45px 0 15px 0;
    margin: 0 auto;
    width: 900px;
    display: flex;
    justify-content: center;
    /* border-bottom: 3px solid #ccc; */
  }
  .intro_text span{
    display: inline-block;
    width: 810px;
    padding: 0px 20px 20px;
    box-sizing:border-box;
    line-height: 25px;
    border-bottom: 2px solid #ccc;
  }
  #third{
    margin-top: 60px;
    height: 600px;
    box-sizing:border-box;
    background: url('./../../static/images/time.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .gray_bg_box{
    height: 100%;
    width: 100%;
    background: rgba(29,32,39,0.4);
  }
  #center{
    position: absolute;
    margin:0 auto;
    /* margin-top: 200px; */
  }
  #left{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 0px;
    bottom: 50px;
  }
  .left_text{
    color: white;
    width: 320px;
    height: 435px;
    /* background: lightblue; */
    margin-right: 300px;
    display: flex;
    flex-direction: column-reverse;
  }
  .left_text span:nth-child(1){
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;
  }
  .left_text span:nth-child(2), .right_text span:nth-child(2){
    font-size: 14px;
  }
  .right_text{
    color: white;
    width: 320px;
    height: 445px;
    /* background: lightblue; */
    display: flex;
    flex-direction: column;
  }
  .right_text span{
    text-align: right;
  }
  .right_text span:nth-child(1){
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  #right{
    position: absolute;
    width: 50px;
    height: 50px;
    right: 0px;
    top: 50px;
  }
  #fourth{
    width: 1000px;
    /* height: 400px; */
    margin: 50px auto 0px;
    /* background: sandybrown; */
  }
  #fourth header{
    height: 50px;
    border-bottom: 2px solid #ccc
  }
  .contact{
    height: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: sandybrown; */
  }
  .contact_icon{
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background:#22252C;
    text-align:center;
    margin-right: 50px;
    float: left;
  }
  .contact_log_box{
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
  }
  .contact_text{
    /* float: left; */
    height: 250px;
    font-size: 17px;
    /* margin-top: 35px; */
    /* padding-left: 70px; */
  }
  .contact_text p{
    line-height: 40px
  }
  .contact_text span{
    display: inline-block;
    width: 150px;
  }
  .contact_text p span:first-child{
    text-align: right;
  }
  .contact_text p span:last-child{
    text-indent: 20px;
  }
  .footer{
    width: 100%;
    height: 60px;
    margin-top: 50px;
    background: #000000;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
  .function_box{
    position:relative;
    z-index:1000;
    height: 600px;
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>

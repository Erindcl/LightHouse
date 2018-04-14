<template>
 <div>
  <div class="contain_box">
    <div class="main_box">
      <div class="notice_box" style="align-items: flex-start;">
        <div class="notice_content" v-show="!isLogin">
          已经有账号了？<br>
          希望你能找到最适合自己的路<br>
          要勇敢走下去哟  ^_^
        </div>
        <div class="switch_login" v-show="!isLogin"  @click="changeLD('left')">登录</div>
      </div>
      <div class="notice_box" style="align-items: flex-end;">
        <div class="notice_content" style="text-align: right;" v-show="isLogin">
          什么？还没有账号！<br>
          还在等什么，赶紧来注册吧！
        </div>
        <div class="switch_register" v-show="isLogin" @click="changeLD('right')">注册</div>
      </div>
      <div :class="{ animated: isShakeL || isShakeR, shakeLeft: isShakeL, shakeRight: isShakeR, text_contain: true }" :style="{ left: leftDistance + 'px' }" ></div>
      <!-- 登录模块 -->
      <div class="input_login" v-show="isLogin">
        <div class="login_til">登 录</div>
        <div class="one_input" style="margin-top: 45px;">
          <input type="text" class="phone_input" placeholder="用户名" v-model="oldUser.phone">
          <div class="input_icon">
            <img src="../../static/icons/user.png" alt="用户icon" class="image_auto">
          </div>
        </div>
        <div class="one_input">
          <input type="password" class="password_input" placeholder="密码" v-model="oldUser.password">
          <div class="input_icon">
            <img src="../../static/icons/password.png" alt="用户icon" class="image_auto">
          </div>
        </div>
        <div class="one_input" style="border: 1px solid rgba(0,0,0,0);">
          <div class="yzm_input_box"><input type="text" class="yzm_input" placeholder="验证码" v-model="oldUser.verifycode"></div>
          <div class="input_icon" style="width: 100px;height:35px;">
            <img @click="reloadCode" :src="yanzhensrc" alt="验证码图片" class="image_auto">
          </div>
        </div>
        <div class="login_btn" @click="loginFun">登录</div>
      </div>
      <!-- 注册模块 -->
      <div class="input_register" v-show="!isLogin">
        <div class="register_til">注 册</div>
        <div class="one_input" style="margin-top: 15px;">
          <input type="text" class="phone_input" placeholder="手机号码" v-model="newUser.phone">
          <div class="input_icon">
            <img src="../../static/icons/phone.png" alt="用户icon" class="image_auto">
          </div>
        </div>
        <div class="one_input">
          <input type="password" class="password_input" placeholder="密码" v-model="newUser.password">
          <div class="input_icon">
            <img src="../../static/icons/password.png" alt="用户icon" class="image_auto">
          </div>
        </div>
        <div class="one_input">
          <input type="password" class="password_input" placeholder="确认密码" v-model="newUser.passwordS">
          <div class="input_icon">
            <img src="../../static/icons/password.png" alt="用户icon" class="image_auto">
          </div>
        </div>
        <div class="one_input" style="border: 1px solid rgba(0,0,0,0);">
          <div class="yzm_input_box"><input type="text" class="yzm_input" placeholder="验证码"  v-model="newUser.verifycode"></div>
          <div class="input_icon" style="width: 100px;height:35px;">
            <img @click="reloadCode" :src="yanzhensrc" alt="验证码图片" class="image_auto">
          </div>
        </div>
        <div class="register_btn" @click="registerFun">注册</div>
      </div>
    </div>
  </div>
  <!-- 提示弹框 -->
  <div class="alert_box" v-show="showAlert" :style="{ width: clientWidth + 'px', height: clientHeight + 'px' }">
    <div class="center_box">
      <div class="notice_text">{{alertInfor}}</div>
      <div class="ok_btn">
        <a :href="aHref" @click="changeModulStatus">确 认</a>
      </div>
    </div>
  </div>
 </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      showAlert: false,
      alertInfor: '登录成功！！！',
      aHref: 'javascript:;',
      clientHeight: 0,
      clientWidth: 0,
      isLogin: true,
      leftDistance: 70,
      isShakeL: false,
      isShakeR: false,
      yanzhensrc: 'goc/VerifyCodeServlet',
      oldUser: {
        phone: "",
        password: "",
        verifycode: ""
      },
      newUser: {
        phone: "",
        password: "",
        passwordS: "",
        verifycode: ""
      }
    }
  },
  methods: {
    // 改变当前显示为登录表单还是注册表单
    changeLD (str) {
      if (str == "left") {
        this.isLogin = true;
        let timerL = setInterval(() => {
          if (this.leftDistance > 70) {
            this.leftDistance = this.leftDistance - 10;
          } else {
            this.isShakeL = true;
            this.isShakeR = false;
            clearInterval(timerL);
          }
        }, 5);
      } else {
        this.isLogin = false;
        let timerR = setInterval(() => {
          if (this.leftDistance < 380) {
            this.leftDistance = this.leftDistance + 10;
          } else {
            this.isShakeL = false;
            this.isShakeR = true;
            clearInterval(timerR);
          }
        }, 5);
      }
      this.reloadCode(); // 切换登录注册时要重新加载一张验证码
    },
    // 确认按钮实现的函数
    changeModulStatus () {
      this.showAlert = false;
    },
    // 登录触发函数
    loginFun () {
      console.log(this.oldUser);
      axios.post('goc/user/login', this.oldUser, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(function (data) {
        // 登录成功 弹框显示成功 点确认进入用户登入后的主页
        // 登录未成功 弹框显示原因 点确认关闭弹框
        console.log('点击登录后台返回的信息：' + data);
        if (data.notice === '登陆成功') {
          this.alertInfor = '登陆成功!';
          this.aHref = 'http://localhost:8080/#/comshow/indexuser';
        } else {
          this.alertInfor = data;
        }
        this.showAlert = true;
      })
      .catch(function (err) {
        console.log('登录 服务器连接错误，原因：' + err);
      })
    },
    // 注册触发函数
    registerFun () {
      console.log(this.newUser);
      // 前端判断两次输入密码是否有误  或者 手机号码格式有误
      if (this.newUser.password != this.newUser.passwordS) {
        this.alertInfor = '两次输入的密码不一致！';
        this.showAlert = true;
      } else if (!(/^1[3|5][0-9]\d{4,8}$/.test(this.newUser.phone))) {
        this.alertInfor = '输入的手机号码格式有误！';
        this.showAlert = true;
        console.log(this.alertInfor);
      } else {
        axios.post('goc/user/register', this.newUser, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(function (data) {
          // 注册成功 弹框显示成功现在快去注册吧 点确认进入登录页面（貌似只能手动跳转）
          // 注册失败 弹框显示原因 点确认关闭弹框
          console.log('点击注册后台返回的信息：' + data);
          if (data.notice === '注册成功!') {
            this.alertInfor = '注册成功，可以去登录了！';
            this.aHref = 'http://localhost:8080/#/regandlog/login';
          } else {
            this.alertInfor = data;
          }
          this.showAlert = true;
        })
        .catch(function (err) {
          console.log('注册 服务器连接错误，原因：' + err);
        })
      }
    },
    // 重新修改验证码
    reloadCode () {
        this.yanzhensrc = 'VerifyCodeServlet?' + Math.random();
      }
  },
  mounted () {
    this.clientHeight = `${window.screen.availHeight}`;
    this.clientWidth = `${window.screen.availWidth}`;
  }
};
</script>
<style scoped>
@import "../style/shake.css";
.center_box{
  width: 300px;
  height: 121px;
  background: #fff;
}
.alert_box{
  background: rgba(0,0,0,0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top:0px;
  left: 0px;
  z-index: 10;
}
.notice_text{
  width: 100%;
  text-align: center;
  line-height: 70px;
  height: 70px;
  font-size: 17px;
  /* col/or: #778495; */
  /* font-weight: 600; */
  /* background: #ea7c5a; */
}
.ok_btn{
  height: 50px;
  width: 100%;
  border-top: 2px solid rgb(231, 231, 231);
  text-align: center;
  line-height: 50px;
}
.ok_btn a{
  color: #ea7c5a;
  font-weight: 600;
  text-decoration: none;
}
.ok_btn:hover{
  background: #ea7c5a;
}
.ok_btn a:hover{
  color: #fff;
}
.yzm_input_box {
  width: 60%;
  height: 100%;
  border-bottom: 2px solid #f2f2f2;
}
.login_btn,
.register_btn {
  width: 90px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #ea7c5a;
  border-radius: 2px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  margin: 30px auto 0px;
}
.image_auto {
  width: 100%;
  height: 100%;
}
.input_icon {
  width: 25px;
  height: 25px;
  margin-right: 5px;
  /* background: lightblue; */
}
.phone_input,
.password_input,
.yzm_input {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  width: 85%;
  border: 0px solid #fff;
  background: rgba(0, 0, 0, 0);
  outline: none;
  margin-left: 5px;
}
.one_input {
  width: 100%;
  height: 30px;
  /* background: #EA7C5A; */
  margin-top: 15px;
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
}
.login_til,
.register_til {
  height: 50px;
  line-height: 50px;
  color: #ea7c5a;
  font-size: 20px;
  font-weight: 600;
}
.contain_box {
  margin: 0px auto;
  width: 1000px;
  height: 600px;
  /* background: slateblue; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_box {
  height: 300px;
  width: 900px;
  background: #778495;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 3px;
  position: relative;
}
.notice_box {
  height: 170px;
  width: 330px;
  /* background: seagreen; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.text_contain {
  position: absolute;
  width: 450px;
  height: 400px;
  background: #fff;
  border-radius: 3px;
  top: -50px;
  z-index: 1;
}
.input_login {
  position: absolute;
  width: 300px;
  height: 300px;
  /* background: rgb(50, 176, 214); */
  left: 150px;
  z-index: 2;
}
.input_register {
  position: absolute;
  width: 300px;
  height: 300px;
  /* background: rgb(50, 176, 214); */
  right: 150px;
  z-index: 2;
}
.notice_content {
  color: #fff;
}
.switch_login,
.switch_register {
  width: 90px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 2px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}
</style>

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
      <div class="input_login" v-show="isLogin">
        <div class="login_til">登 录</div>
        <div class="one_input" style="margin-top: 45px;">
          <input type="text" class="name_input" placeholder="用户名" v-model="oldUser.name">
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
          <div class="yzm_input_box"><input type="text" class="yzm_input" placeholder="验证码" v-model="oldUser.verify"></div>
          <div class="input_icon" style="width: 100px;height:35px;">
            <img src="" alt="验证码图片" class="image_auto">
          </div>
        </div>
        <div class="login_btn">登录</div>
      </div>
      <div class="input_register" v-show="!isLogin">
        <div class="register_til">注 册</div>
        <div class="one_input" style="margin-top: 15px;">
          <input type="text" class="name_input" placeholder="手机号码" v-model="newUser.phoneNum">
          <div class="input_icon">
            <img src="../../static/icons/phone.png" alt="用户icon" class="image_auto">
          </div>
        </div>
        <div class="one_input">
          <input type="password" class="password_input" placeholder="密码" v-model="newUser.passwordF">
          <div class="input_icon">
            <img src="../../static/icons/password.png" alt="用户icon" class="image_auto">
          </div>
        </div>
        <div class="one_input">
          <input type="password" class="password_input" placeholder="确认密码" v-model="newUser.passwordF">
          <div class="input_icon">
            <img src="../../static/icons/password.png" alt="用户icon" class="image_auto">
          </div>
        </div>
        <div class="one_input" style="border: 1px solid rgba(0,0,0,0);">
          <div class="yzm_input_box"><input type="text" class="yzm_input" placeholder="验证码"  v-model="newUser.verify"></div>
          <div class="input_icon" style="width: 100px;height:35px;">
            <img src="" alt="验证码图片" class="image_auto">
          </div>
        </div>
        <div class="register_btn">注册</div>
      </div>
    </div>
  </div>
  <!-- 提示弹框 -->
  <div class="alert_box" v-show="showAlert" :style="{ width: clientWidth + 'px', height: clientHeight + 'px' }">
    <div class="center_box">
    </div>
  </div>
 </div>
</template>
<script>
export default {
  data () {
    return {
      showAlert: false,
      clientHeight: 0,
      clientWidth: 0,
      isLogin: true,
      leftDistance: 70,
      isShakeL: false,
      isShakeR: false,
      oldUser: {
        name: "",
        password: "",
        verify: ""
      },
      newUser: {
        phoneNum: "",
        passwordF: "",
        passwordS: "",
        verify: ""
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
  width: 500px;
  height: 300px;
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
.name_input,
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

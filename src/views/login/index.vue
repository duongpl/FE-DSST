<template>
  <div v-loading="loading" class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <span class="logo-titlte">DECISION SUPPORT TOOL FOR TIMETABLING</span>
        <div class="logo">
          <img src="@/assets/logofpt.png">
        </div>
      </div>

      <GoogleLogin :render-params="renderParams" :params="params" :on-success="onSignInSuccess" :on-failure="onSignInError" class="btn-wrapper">
        <el-button class="icon-google" type="primary">Login with Google +</el-button>
      </GoogleLogin>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import GoogleLogin from 'vue-google-login'

export default {
  name: 'Login',
  components: {
    GoogleLogin
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },

      params: {
        client_id: '563389952152-j9gromb947b0j28nj2304j9vi07kdivk.apps.googleusercontent.com'
      },

      renderParams: {
        longtitle: true
      },
      passwordType: 'password',
      redirect: undefined,
      infoUser: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {

    onSignInSuccess(googleUser) {
      this.loading = true
      console.log(googleUser,'user nay')
      const objectToSend = {
        accessToken: googleUser.getAuthResponse(true).access_token
      }

      this.$store.dispatch('user/loginGoogle', objectToSend).then(() => {
        this.infoUser = this.$store.state.user.userInfo
        this.$router.push({ path: '/dashboard' })
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },

    onSignInError(error) {
      console.log(error)
    },

    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

.g-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
  cursor: pointer;
}

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
    /* The image used */
  background-image: url('../../assets/thumbnail.jpg');

    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  .logo {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .icon-google {
    position: relative;
    width: 100%;
    height: 100%;

    &::before {
      content: '';
      display: block;
      background-image: url('../../assets/icons8-google-48.png');
      position: absolute;
      width: 25px;
      height: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      top: 7px;
      left: 25%;
    }

    span {
      font-weight: 700;
    }
  }

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss">
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  text-align: center;

  .login-form {
    position: relative;
    width: 500px;
    max-width: 100%;
    padding: 15px 15px;
    margin: 150px auto;
    overflow: hidden;
    background-color:rgba(255,255,255,0.8);
    border: 2px solid rgba(255, 255, 255, 0.1);

    .btn-wrapper {
      background: no-repeat;
      border: none;
      width: 100%;

      .abcRioButton {
        padding: 0 8px;
        width: auto !important;
        border-radius: 15px;

        &.abcRioButtonLightBlue {
          background-color: #00adff;
          color: #fff;
        }

        .abcRioButtonContentWrapper {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .logo-titlte {
    font-size: 18px;
    opacity: 0.2;
    font-weight: bold;
    /*color: #00adff;*/
  }
}
</style>

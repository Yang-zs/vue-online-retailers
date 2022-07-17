<template>
  <div class="login">
    <div class="left">
      <span>欢迎光临</span>
    </div>
    <div class="right">
      <div class="login-form">
        <div class="login-title">
          <span>欢迎回来</span>
          <p>——— 账号密码登录 ———</p>
        </div>
        <div class="login-content">
          <el-form ref="form" :model="LoginForm" :rules="LoginRules" label-width="145px">
            <el-form-item prop="username">
              <el-input v-model="LoginForm.username" :prefix-icon="User" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="LoginForm.password" :prefix-icon="Lock" placeholder="请输入密码" show-password
                        type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button color="#626aef" @click="LoginSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()
const store = useStore()
const form = ref()
// 登录表单
const LoginForm = reactive({
  username: 'admin',
  password: 'admin'
})
// 点击登录
const LoginSubmit = () => {
  form.value.validate(async (valid) => {
    if (valid) {
      const res = await store.dispatch('user/handleLogin', LoginForm)
      if (!res) return
      await router.push('/')
      ElNotification({
        message: '登录成功',
        type: 'success'
      })
    }
  })
}
// 登录表单验证规则
const LoginRules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
}
</script>

<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;

  .left {
    width: 67%;
    height: 100%;
    background-color: #6064ee;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: 700;
      font-size: 3rem;
      line-height: 1;
      margin-bottom: 1rem;
      --tw-text-opacity: 1;
      color: rgba(253, 253, 253, var(--tw-text-opacity));
    }
  }

  .right {
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-form {
      width: 100%;

      .login-title {
        width: 100%;
        text-align: center;

        span {
          font-weight: 700;
          font-size: 1.875rem;
          line-height: 2.25rem;
          --tw-text-opacity: 1;
          color: rgba(31, 41, 55, var(--tw-text-opacity));
        }

        p {
          margin: 25px 0;
          font-size: 16px;
          color: #D1D5DB;
        }
      }
    }
  }

  .el-form {
    .el-input {
      width: 250px;
      height: 32px;
    }

    .el-button {
      width: 70%;
      border-radius: 20px;
      //background-color: #626aef;
      //border-color: #626aef;
    }
  }
}
</style>

<template>
  <div class="myHeader">
    <!-- left-->
    <div class="left">
      <!--:type="isCollapse.value ? 'arrow-left' : 'arrow-right'"-->
      <!--logo-->
      <div class="logo">
        <div class="logo-item">
          <Eleme class="logo-icon"/>
          <div class="logo-title">积云编程</div>
        </div>
      </div>
      <div class="left-right">
        <!--伸缩图标-->
        <div @click="changeCollapse">
          <Fold class="telescopic"/>
        </div>
        <!--刷新图标-->
        <div @click="refresh">
          <Refresh class="refresh"/>
        </div>

      </div>
      <div>

      </div>
    </div>
    <div class="middle"></div>
    <!--    right-->
    <div class="right">
      <!--      全屏图标-->
      <div class="full-screen" @click="fullScreen">
        <FullScreen class="full-screen-icon"/>
      </div>

      <div class="right-r">
        <!--        头像-->
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <!--        下拉菜单-->
        <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
       <span>admin</span> <el-icon class="el-icon--right"><arrow-down class="arrow-dow"/></el-icon>
    </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">修改密码</el-dropdown-item>
              <el-dropdown-item command="b">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElNotification } from 'element-plus'
import { ArrowDown, Fold, Eleme, Refresh, FullScreen } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// 页面全屏
import screenfull from 'screenfull'

const router = useRouter()
const store = useStore()
// 全屏
const fullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
// 点击下拉菜单
const handleCommand = (command) => {
  console.log(command, 'command')
  if (command === 'b') {
    // 退出登录
    handleLogout()
  }
}
// 退出登录
const handleLogout = async () => {
  const res = await store.dispatch('user/handleLogout')
  if (res === 200) {
    // 跳转到登录页面
    await router.push('/login')
    ElNotification({
      message: '退出登录成功',
      type: 'success'
    })
  }
}
// 点击改变vux里 isCollapse 的值 控制侧边栏收缩
const changeCollapse = () => {
  store.commit('collapse/SET_COLLAPSE')
  console.log(store.getters.isCollapse, 'isCollapse')
}
// 刷新页面
const refresh = () => {
  window.location.reload()
}

</script>

<style lang='scss' scoped>
.el-avatar {
  width: 25px;
  height: 25px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.myHeader {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .left-right {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 40%;
    }

    .telescopic {
      width: 16px;
      height: 16px;
      color: white;
    }

    .refresh, .telescopic {
      cursor: pointer;

      :hover {
        background-color: red;
      }
    }

    .refresh {
      width: 16px;
      height: 16px;
      color: white;

    }

    .logo {
      height: 100%;
      width: 100px;
      display: flex;
      margin-right: 35px;

      .logo-item {
        display: flex;
        align-items: center;
        justify-content: center;

        .logo-title {
          font-size: 20px;
          color: white;
          width: 100px;
          margin: 0 15px;
        }
      }

      .logo-icon {
        width: 17.5px;
        height: 17.5px;
        background-color: white;
        color: #4336c7;

      }
    }
  }

  .middle {
    width: 75%;
    height: 100%;
  }

  .right {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .el-dropdown-link {
      color: white;
      cursor: pointer;
    }

    .right-r {
      display: flex;
      align-items: center;
    }

    .el-avatar {
      margin-right: 10px;
    }

    .full-screen {
      margin: 0 45px;
    }

    .full-screen-icon {
      width: 16px;
      height: 16px;
      color: white;
    }

  }

}
</style>

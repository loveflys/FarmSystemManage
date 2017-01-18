<template>
  <div class="container">
    <header>
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">管理系统</el-menu-item>
      </el-menu>
    </header>

    <el-row class="tac">
      <el-col :span="4">
        <el-menu :default-active.sync="selected" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="light">
          <el-submenu index="1">
            <template slot="title">导航一</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1" @click="go('1-1')">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">导航二</el-menu-item>
          <el-menu-item index="3">导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '1-1',
    };
  },
  methods: {
    go(str) {
      switch (str) {
        case "1-1":
          console.log('123123');
          this.$router.go('userHome');
          break;
        default:
          console.log('123123');
          this.$router.go('userHome');
          break;
      }
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

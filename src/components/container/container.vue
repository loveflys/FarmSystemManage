<template>
  <div class="container">
    <header>
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">管理系统</el-menu-item>
      </el-menu>
    </header>

    <el-row class="tac">
      <el-col :span="4">
        <el-menu :router="router" :default-active.sync="selected" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="light">
          <el-menu-item index="1" route="/page/userHome">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">农产品分类</template>
            <el-menu-item index="2-1" route="/page/classList">列表管理</el-menu-item>
            <el-menu-item index="2-2" route="/page/classCreate">新建</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">地址管理</el-menu-item>
          <el-menu-item index="4">信息管理</el-menu-item>
          <el-menu-item index="5">广告管理</el-menu-item>
          <el-menu-item index="6">市场管理</el-menu-item>

          <el-submenu index="7">
            <template slot="title">用户管理</template>
            <el-menu-item index="7-1"">用户管理</el-menu-item>
            <el-menu-item index="7-2">商户管理</el-menu-item>
            <el-menu-item index="7-3"">信息评论管理</el-menu-item>
            <el-menu-item-group title="论坛管理">
              <el-menu-item index="7-4">论坛帖子管理</el-menu-item>
              <el-menu-item index="7-5">论坛评论管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="8">食谱管理</el-menu-item>
          <el-menu-item index="9">农产品管理</el-menu-item>
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
// 引入elmenetui的导航组件
import elnav from "element-ui";
export default {
  components:{elnav},
  data() {
    return {
      selected: '',
      router: true,
    };
  },
  methods: {
    go(str) {
      location.href=str;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

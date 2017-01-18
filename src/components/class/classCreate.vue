<template>
  <div class="content">
    <el-form :model="Form" :rules="rules" ref="Form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类编号" prop="code">
        <el-input v-model="Form.code"></el-input>
      </el-form-item>
      <el-form-item label="分类编号" prop="name">
        <el-input v-model="Form.name"></el-input>
      </el-form-item>
      <el-form-item label="分类等级" prop="level">
        <el-radio-group v-model="Form.level">
          <el-radio label="1"></el-radio>
          <el-radio label="2"></el-radio>
          <el-radio label="3"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="所属分类" prop="parentId">
        <el-select v-model="Form.parentId" placeholder="请选择所属分类">
          <el-option label="生鲜水果" value="1"></el-option>
          <el-option label="苹果" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="营养价值" prop="nutrition">
        <el-input type="textarea" v-model="Form.nutrition"></el-input>
      </el-form-item>
      <el-form-item label="分类描述" prop="descr">
        <el-input type="textarea" v-model="Form.descr"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('Form')">立即创建</el-button>
        <el-button @click="resetForm('Form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Form: {
        name: '',
        level: '',
        code: '',
        parentId: '',
        nutrition: '',
        descr: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        level: [
          { required: true, message: '请选择分类等级', trigger: 'change' }
        ],
        code: [
          { required: true, message: '请填写分类编号', trigger: 'blur' }
        ],
        parentId: [
          { type: 'date', required: true, message: '请选择所属分类', trigger: 'change' }
        ],
        nutrition: [
          { required: true, message: '请填写营养价值', trigger: 'blur' }
        ],
        descr: [
          { required: true, message: '请填写分类描述', trigger: 'blur' }
        ]
      }
    };
  },
  route: {
    data (transition) {
      this.$parent.selected = '2-2';
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style>
  .content {
    margin-top: 20px;
  }
</style>

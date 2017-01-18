classclass<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="code"
      label="分类编号"
      sortable>
    </el-table-column>
    <el-table-column
    prop="name"
    label="分类名称"
    sortable
    width="180">
  </el-table-column>
  <el-table-column
    prop="descr"
    label="分类描述"
    width="180">
  </el-table-column>
  <el-table-column
    prop="nutrition"
    label="营养信息">
  </el-table-column>
  <el-table-column
    prop="parentId"
    label="所属分类"
    sortable>
  </el-table-column>
  <el-table-column
    prop="level"
    label="分类等级"
    sortable>
  </el-table-column>
  <el-table-column
      label="操作">
      <template scope="scope">
        <el-button @click="update(scope.row.code, scope.row)" type="text" size="small">编辑</el-button>
        <el-button @click="del(scope.$index, scope.row.code, tableData)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
</el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          code: '1',
          name: '生鲜水果',
          descr: '生鲜水果类的描述',
          nutrition: '好多营养哇',
          level: 1,
          parentId: 0
        }, {
          code: '2',
          name: '苹果',
          descr: '苹果的描述',
          nutrition: '好多营养哇',
          level: 2,
          parentId: 1
        },{
          code: '3',
          name: '红富士苹果',
          descr: '红富士苹果的描述',
          nutrition: '钠镁铝硅磷',
          level: 3,
          parentId: 2
        }]
      }
    },
    route: {
      data (transition) {
        this.$parent.selected = '2-1';
      }
    },
    methods: {
      update (id, data) {
        console.log("编辑id为"+id+"的分类==>"+JSON.stringify(data));
      },
      del (index, id, data) {
        console.log("删除id为"+id+"的分类==>"+JSON.stringify(data));
        data.splice(index, 1);
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }
</script>

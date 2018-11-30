<template>
  <div class="box box-info">
    <div class="box-body">
      <div class="table-responsive">
        <table class="table no-margin">
          <thead>
          <tr>
            <th>序号</th>
            <th>档案编号</th>
            <th>员工名称</th>
            <th>身份证号码</th>
            <th>电话号码</th>
            <th>资料列表</th>
            <th class="text-center">操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in totalProfile" :key="index">
            <td>{{index + 1}}</td>
            <td>{{item.ProfileNo}}</td>
            <td>{{item.EmpName}}</td>
            <td>{{item.EmpIDNo}}</td>
            <td>{{item.EmpTelNo}}</td>
            <td v-html="formatInfo(item.RelationVal)"></td>
            <td class="text-center"><a @click="editProfile(item)"><i class="fa fa-pencil fa-fw"></i>编辑</a><a @click="deleteProfile()"><i class="fa fa-trash-o fa-fw"></i>删除</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  const keyValPair = {
    '0': '身份证复印件',
    '1': '学历证书',
    '2': '入职登记表',
    '3': '劳动合同',
    '4': '社保卡',
    '5': '离职证明'
  }

  export default {
    data () {
      return {

      }
    },
    created () {
      this.fetchProfile()
    },
    computed: {
      ...mapGetters([
        'totalProfile'
      ])
    },
    methods: {
      ...mapActions([
        'fetchProfile'
      ]),
      formatInfo (val) {
        let strHtml = ''
        let len = Object.getOwnPropertyNames(keyValPair).length
        for (let i = 0; i < len; i++) {
          if (val & Math.pow(2, i)) {
            strHtml += '<span>' + keyValPair[i] + '</span>&nbsp;&nbsp;'
          } else {
            strHtml += '<span style="text-decoration: line-through;color: blue;">' + keyValPair[i] + '</span>&nbsp;&nbsp;'
          }
        }
        return strHtml
      },
      editProfile (item) {
        alert('edit')
      },
      deleteProfile (item) {
        alert('delete')
      }
    }
  }
</script>

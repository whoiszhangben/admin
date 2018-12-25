<template>
  <div>
    <div class="clearfix" style="margin-bottom: 1em;">
      <div class="pull-right">
        <a class="btn btn-sm btn-primary" @click="add(15)">
          <i class="fa fa-plus-square"></i>
          <span>管理员开户</span>
        </a>
      </div>
    </div>
    <div class="box">
      <div class="box-body">
        <div class="table-responsive">
          <table class="table no-margin">
            <thead>
            <tr>
              <th>登录标识</th>
              <th>登录账号</th>
              <th>账号类型</th>
              <th>状态</th>
              <th>电话号码</th>
              <th>开户时间</th>
              <th>修改</th>
              <th>密码重置</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in totalAdmins" :key="index">
              <td>{{item.LoginID}}</td>
              <td>{{item.LoginAccount}}</td>
              <td>{{item.AccountType| formatType}}</td>
              <td>{{item.AccountStatus| formatStatus}}</td>
              <td>{{item.Mobile}}</td>
              <td>{{item.CreateTime}}</td>
              <td><a href="javascript:void 0;" @click="modify(item)">修改</a></td>
              <td><a href="javascript:void 0;" @click="resetPwd(item)">重置</a></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        mobile: ''
      }
    },
    created () {
      if (this.totalAdmins.length === 0) {
        this.fetchAdmins()
      }
    },
    filters: {
      formatType (value) {
        if (!value) {
          return '--'
        } else if (value === 10) {
          return '会员超级管理员'
        } else if (value === 11) {
          return '会员普通管理员'
        } else if (value === 12) {
          return '电商超级管理员'
        } else if (value === 13) {
          return '电商普通管理员'
        } else if (value === 14) {
          return '机构管理员'
        } else if (value === 15) {
          return '运营中心超级管理员'
        } else if (value === 16) {
          return '运营中心普通管理员'
        } else {
          return '未知类型'
        }
      },
      formatStatus (value) {
        if (value === 1) {
          return '正常'
        } else {
          return '冻结'
        }
      }
    },
    computed: {
      ...mapGetters([
        'totalAdmins'
      ])
    },
    methods: {
      ...mapActions([
        'fetchAdmins'
      ]),
      add (type) {
        let strOptions = ''
        switch (type) {
          case 10:
          case 11:
            strOptions = '<option value="11" name="adminType" >会员普通管理员</option>'
            break
          case 12:
          case 13:
            strOptions = '<option value="13" name="adminType" >电商普通管理员</option>'
            break
          case 15:
            strOptions = '<option value="16" name="adminType" >运营中心普通管理员</option>'
            break
          default:
            break
        }
        this.$bus.$emit('form-modal-open', {
          title: '管理员注册',
          description: '<form class="form-horizontal" novalidate>' +
          '<div class="form-group"><label class="col-sm-3 control-label">管理员类型：</label><div class="col-sm-6"><select class="form-control" id="adminType">' + strOptions + '</select></div></div>' +
          '<div class="form-group"><label class="col-sm-3 control-label">登录账户：</label><div class="col-sm-6"><input type="text" class="form-control" id="LoginAccount"/></div></div>' +
          '<div class="form-group"><label class="col-sm-3 control-label">登录密码：</label><div class="col-sm-6"><input type="text" class="form-control" id="LoginPassword"/></div></div>' +
          '<div class="form-group"><label class="col-sm-3 control-label">确认密码：</label><div class="col-sm-6"><input type="text" class="form-control" id="ConfirmPassword"/></div></div>' +
          '<div class="form-group"><label class="col-sm-3 control-label">手机号码：</label><div class="col-sm-6"><input type="text" class="form-control" id="Mobile"/></div></div>' +
          '</form>',
          type: 'modal-primary',
          confirmText: '保存',
          cancelText: '取消',
          zip: '123456',
          confirmBefore: () => {
            alert($('#mobile').val())
          },
          confirmAfter: () => {
          },
          cancelBefore: () => {
          },
          cancelAfter: () => {
          }
        })
      },
      modify (item) {
        this.$bus.$emit('form-modal-open', {
          title: '管理员信息修改',
          description: '<form class="form-horizontal" novalidate>' +
          '<div class="form-group"><label class="col-sm-3 control-label">登录账户：</label><div class="col-sm-6" style="line-height: 34px;"><span style="margin-left: 1em;">' + item.LoginAccount + '</span></div></div>' +
          '<div class="form-group"><label class="col-sm-3 control-label">手机号码：</label><div class="col-sm-6"><input type="text" class="form-control" id="mobile" value="' + item.Mobile + '"/></div></div>' +
          '<div class="form-group"><label for="CardType" class="col-sm-3 control-label">状态：</label><div class="col-sm-6"><label class="radio-inline"><input type="radio" name="status" id="normalStatus" value="1" checked>正常</label><label class="radio-inline"><input type="radio" name="status" id="frozenStatus" value="2">冻结</label></div></div>' +
          '</form>',
          type: 'modal-primary',
          confirmText: '保存',
          cancelText: '取消',
          zip: '123456',
          confirmBefore: () => {
            alert($('#mobile').val())
          },
          confirmAfter: () => {
          },
          cancelBefore: () => {
          },
          cancelAfter: () => {
          }
        })
      },
      resetPwd (item) {
        this.$bus.$emit('form-modal-open', {
          title: '',
          description: '您确定要重置' + item.LoginAccount + '的密码吗？',
          type: 'modal-primary',
          confirmText: '确定',
          cancelText: '取消',
          zip: '123456',
          confirmBefore: () => {
            alert($('#mobile').val())
          },
          confirmAfter: () => {
          },
          cancelBefore: () => {
          },
          cancelAfter: () => {
          },
          initialize: (e) => {
            console.log($('#mobile'), e.currentTarget)
            console.log($(this))
            debugger
          }
        })
      }
    }
  }
</script>
<style lang="css">

</style>

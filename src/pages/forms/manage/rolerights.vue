<template>
  <div>
    <div class="clearfix" style="margin-bottom: 1em;">
      <div class="pull-right">
        <a class="btn bg-blue" @click="openModal">
          <i class="fa fa-plus-square"></i>
          <span>新增角色</span>
        </a>
      </div>
    </div>
    <div class="box">
      <div class="box-body">
        <div class="table-responsive">
          <table class="table no-margin">
            <thead>
            <tr>
              <th>角色编号</th>
              <th>角色名称</th>
              <th>角色授权</th>
              <th>权限详情</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in totalRoles" :key="index">
              <td>{{item.RoleID}}</td>
              <td>{{item.RoleName}}</td>
              <td><a href="javascript:void 0;" @click="authRights(item.RoleID )">授权</a></td>
              <td><a @click.native="detailRights">详情</a></td>
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
  import * as types from '../../../vuex/mutation-types'

  export default {
    data () {
      return {
      }
    },
    created () {
      if (this.totalRoles.length === 0) {
        this.fetchRoles()
      }
    },
    computed: {
      ...mapGetters([
        'totalRoles'
      ])
    },
    methods: {
      ...mapActions([
        'fetchRoles'
      ]),
      openModal () {
        console.log(this.$bus)
        this.$bus.$emit('form-modal-open', {
          title: '新增角色',
          description: '<form class="form-horizontal" novalidate>' +
          '<div class="form-group"><label for="UserNo" class="col-sm-3 control-label">运营中心编号：</label><div class="col-sm-6"><input type="text" class="form-control" id="UserNo" /></div></div>' +
          '<div class="form-group"><label for="UserName" class="col-sm-3 control-label">运营中心名称：</label><div class="col-sm-6"><input type="text" class="form-control" id="UserName" /></div></div>' +
          '<div class="form-group"><label for="CardType" class="col-sm-3 control-label">证件类型：</label><div class="col-sm-6"><select class="form-control" id="CardType"><option value="1" name="CardType" >身份证</option><option value="2" name="CardType" >机构代码</option><option value="3" name="CardType" >营业执照</option><option value="4" name="CardType" >统一社会信用代码</option><option value="5" name="CardType" >其它</option></select></div></div>' +
          '<div class="form-group"><label for="CardNo" class="col-sm-3 control-label">证件号码：</label><div class="col-sm-6"><input type="text" class="form-control" id="CardNo" /></div></div>' +
          '<div class="form-group"><label for="UserAccount" class="col-sm-3 control-label">管理员账号：</label><div class="col-sm-6"><input type="text" class="form-control" id="UserAccount" /></div></div>' +
          '<div class="form-group"><label for="UserPassword" class="col-sm-3 control-label">管理员密码：</label><div class="col-sm-6"><input type="text" class="form-control" id="UserPassword" /></div></div>' +
          '<div class="form-group"><label for="Contact" class="col-sm-3 control-label">联系人：</label><div class="col-sm-6"><input type="text" class="form-control" id="Contact" /></div></div>' +
          '<div class="form-group"><label for="ContactTel" class="col-sm-3 control-label">联系电话：</label><div class="col-sm-6"><input type="text" class="form-control" id="ContactTel" /></div></div>' +
          '</form>',
          type: 'modal-primary',
          confirmText: '保存',
          cancelText: '取消',
          zip: '123456',
          confirmBefore: () => {
            debugger
            let arr = []
            this.totalOPCenter.forEach(item => {
              arr.push({
                'UserNo': item.UserNo,
                'UserName': item.UserName,
                'CardType': item.CardType,
                'CardNo': item.CardNo,
                'UserAccount': item.UserAccount,
                'UserPassword': item.UserPassword,
                'Contact': item.Contact,
                'ContactTel': item.ContactTel,
                'CreateTime': item.CreateTime
              })
            })
            arr.push({
              'UserNo': $('#UserNo').val(),
              'UserName': $('#UserName').val(),
              'CardType': Number($('#CardType').val()),
              'CardNo': $('#CardNo').val(),
              'UserAccount': $('#UserAccount').val(),
              'UserPassword': $('#UserPassword').val(),
              'Contact': $('#Contact').val(),
              'ContactTel': $('#ContactTel').val(),
              'CreateTime': new Date().toLocaleString()
            })
            debugger
            this.$store.commit(types.FETCH_OPCENTER, arr)
          },
          confirmAfter: () => {
          },
          cancelBefore: () => {
          },
          cancelAfter: () => {
          }
        })
      },
      authRights (roleid) {
        debugger
        this.$router.push({path: '/Manage/AuthRights', query: {id: roleid}})
      },
      detailRights () {
        console.log('detail rights')
      }
    }
  }
</script>
<style lang="css">

</style>

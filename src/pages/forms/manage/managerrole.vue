<template>
  <div>
    <div class="box">
      <div class="box-body">
        <div class="table-responsive">
          <table class="table no-margin">
            <thead>
            <tr>
              <th>登录账户</th>
              <th>角色名称</th>
              <th>修改角色</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in totalAdminRoles" :key="index">
              <td>{{item.LoginAccount}}</td>
              <td>{{item.RoleName}}</td>
              <td><a href="javascript:void 0;" @click="modify(item)">修改</a></td>
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
      }
    },
    created () {
      if (this.totalAdminRoles.length === 0) {
        this.fetchAdminRoles()
      }
      if (this.totalRoles.length === 0) {
        this.fetchRoles()
      }
    },
    computed: {
      ...mapGetters([
        'totalAdminRoles',
        'totalRoles'
      ])
    },
    methods: {
      ...mapActions([
        'fetchAdminRoles',
        'fetchRoles'
      ]),
      modify (item) {
        if (this.totalRoles.length === 0) {
          this.$bus.$emit('form-modal-open', {
            description: '当前系统没有角色，请先添加角色',
            type: 'modal-primary',
            confirmText: '确定',
            cancelText: '取消',
            zip: '123456',
            confirmBefore: () => {
            },
            confirmAfter: () => {
            },
            cancelBefore: () => {
            },
            cancelAfter: () => {
            }
          })
        } else {
          let strHtml = ''
          this.totalRoles.forEach(item => {
            strHtml += '<label class="radio"><input type="radio" value="' + item.RoleID + '" name="Roles">' + item.RoleName + '</label>'
          })
          this.$bus.$emit('form-modal-open', {
            title: '登录账户' + item.LoginAccount + '角色修改',
            description: '<form class="form-horizontal" novalidate>' +
            '<div class="form-group"><label class="col-sm-3 control-label">角色名称：</label><div class="col-sm-6">' + strHtml + '</div></div>' +
            '</form>',
            type: 'modal-primary',
            confirmText: '确定修改',
            cancelText: '取消',
            zip: '123456',
            confirmBefore: () => {
            },
            confirmAfter: () => {
            },
            cancelBefore: () => {
            },
            cancelAfter: () => {
            }
          })
        }
      }
    }
  }
</script>
<style lang="css">

</style>

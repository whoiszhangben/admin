<template>
  <div>
    <p>当前角色名称：{{roleName}}  <span style="margin: 2em;"><a href="javascript:void 0;" @click="goBack()">返回</a></span></p>
    <div id="tree"></div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../../../vuex/mutation-types'

  export default {
    data () {
      return {
        roleName: '',
        nodeCheckedSilent: false,
        nodeUncheckedSilent: false
      }
    },
    created () {
      if (this.totalMenuRoles.length === 0) {
        this.fetchMenuRoles()
      }
      if (this.totalRoles.length === 0) {
        this.fetchRoles()
      }
    },
    mounted () {
      let currentRoleId = this.$route.query.id
      if (currentRoleId) {
        let currentRole = this.totalRoles.find(item => {
          return item.RoleID === currentRoleId
        })
        this.roleName = currentRole.RoleName
        let self = this
        // adjustFormat组装成树状结构
        let arr = []
        let topMenu = this.totalMenuRoles.filter(item => {
          return item.MenuLevel === 1 && item.ParentID === 0
        })
        topMenu.forEach(item => {
          let subMenu = this.totalMenuRoles.filter(subitem => {
            return subitem.MenuLevel === 2 && subitem.ParentID === item.MenuID
          })
          let current = {
            text: item.MenuName,
            nodes: [],
            state: {
              checked: item.RoleID
            }
          }
          subMenu.forEach(item => {
            current.nodes.push({
              text: item.MenuName,
              state: {
                checked: item.RoleID
              }
            })
          })
          arr.push(current)
        })
        $('#tree').treeview({
          data: arr,
          highlightSelected: false,  // 选中项不高亮，避免和上述制定的颜色变化规则冲突
          multiSelect: false, // 不允许多选，因为我们要通过check框来控制
          showCheckbox: true,
          showIcon: false,
          onNodeChecked: function (event, node) {
            if (self.nodeCheckedSilent) {
              return
            }
            self.nodeCheckedSilent = true
            self.checkAllParent(node)
            self.checkAllSon(node)
            self.nodeCheckedSilent = false
          },
          onNodeUnchecked: function (event, node) {
            if (self.nodeUncheckedSilent) {
              return
            }
            self.nodeUncheckedSilent = true
            self.uncheckAllParent(node)
            self.uncheckAllSon(node)
            self.nodeUncheckedSilent = false
          }
        })
      }
    },
    computed: {
      ...mapGetters([
        'totalMenuRoles',
        'totalRoles'
      ])
    },
    methods: {
      ...mapActions([
        'fetchMenuRoles',
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
      authRights () {
        console.log('starting auth rights')
      },
      detailRights () {
        console.log('detail rights')
      },
      checkAllParent (node) {
        debugger
        $('#tree').treeview('checkNode', node.nodeId, {
          silent: true
        })
        var parentNode = $('#tree').treeview('getParent', node.nodeId)
        if (!('nodeId' in parentNode)) {
          return
        } else {
          this.checkAllParent(parentNode)
        }
      },
      checkAllSon (node) {
        $('#tree').treeview('checkNode', node.nodeId, {
          silent: true
        })
        if (node.nodes != null && node.nodes.length > 0) {
          for (let i in node.nodes) {
            this.checkAllSon(node.nodes[i])
          }
        }
      },
      uncheckAllParent (node) {
        $('#tree').treeview('uncheckNode', node.nodeId, {
          silent: true
        })
        let siblings = $('#tree').treeview('getSiblings', node.nodeId)
        let parentNode = $('#tree').treeview('getParent', node.nodeId)
        if (!('nodeId' in parentNode)) {
          return
        }
        let isAllUnchecked = true
        for (let i in siblings) {
          if (siblings[i].state.checked) {
            isAllUnchecked = false
            break
          }
        }
        if (isAllUnchecked) {
          this.uncheckAllParent(parentNode)
        }
      },
      uncheckAllSon (node) {
        $('#tree').treeview('uncheckNode', node.nodeId, {
          silent: true
        })
        if (node.nodes != null && node.nodes.length > 0) {
          for (let i in node.nodes) {
            this.uncheckAllSon(node.nodes[i])
          }
        }
      },
      goBack () {
        this.$router.push({path: '/Manage/RoleRights'})
      }
    }
  }
</script>
<style lang="css">
  /* 树形权限 */
  .treeview .list-group-item.node-checked {
    color: red;
  }
  .treeview .list-group-item.node-selected {
    color: red;
  }
</style>

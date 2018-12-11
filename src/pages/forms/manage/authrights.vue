<template>
  <div>
    <div id="tree" style="height: 400px;overflow-y :scroll;"></div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../../../vuex/mutation-types'

  export default {
    data () {
      return {
        silentByChild: false
      }
    },
    created () {
      if (this.totalMenuRoles.length === 0) {
        this.fetchMenuRoles()
      }
    },
    mounted () {
      // adjustFormat组装成树状结构
      let arr = []
      console.log(this.totalMenuRoles)
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
            nodes: [],
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
          if (node.nodes != null) {
            $.each(node.nodes, function (index, value) {
              $('#tree').treeview('checkNode', value.nodeId, {
                silent: true
              })
            })
          } else {
            let parentNode = $('#tree').treeview('getParent', node.nodeId)
            let isAllchecked = true // 是否全部选中
            let siblings = $('#tree').treeview('getSiblings', node.nodeId)
            for (let i in siblings) {
              if (!siblings[i].state.checked) {
                isAllchecked = false
                break
              }
            }
            if (isAllchecked) {
              $('#tree').treeview('checkNode', parentNode.nodeId, {
                silent: true
              })
            } else {
              $('#tree').treeview('selectNode', parentNode.nodeId, {
                silent: true
              })
            }
          }
        },
        onNodeUnchecked: function (event, node) {
          if (node.nodes != null) {
            if (this.silentByChild) {
              $.each(node.nodes, function (index, value) {
                $('#tree').treeview('uncheckNode', value.nodeId, {
                  silent: true
                })
              })
            }
          } else {
            let parentNode = $('#tree').treeview('getParent', node.nodeId)
            let isAllUnchecked = true // 是否全部取消选中
            let siblings = $('#tree').treeview('getSiblings', node.nodeId)
            for (let i in siblings) {
              if (siblings[i].state.checked) {
                isAllUnchecked = false
                break
              }
            }

            if (isAllUnchecked) {
              $('#tree').treeview('unselectNode', parentNode.nodeId, {
                silent: true
              })
              $('#tree').treeview('uncheckNode', parentNode.nodeId, {
                silent: true
              })
            } else {
              this.silentByChild = false
              $('#tree').treeview('selectNode', parentNode.nodeId, {
                silent: true
              })
              $('#tree').treeview('uncheckNode', parentNode.nodeId, {
                silent: true
              })
            }
          }
          this.silentByChild = true
        }
      })
    },
    computed: {
      ...mapGetters([
        'totalMenuRoles'
      ])
    },
    methods: {
      ...mapActions([
        'fetchMenuRoles'
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


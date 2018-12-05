<template lang="html">
  <div class="container">
    <h1>Modal Example</h1>
    <row>
      <div class="col-md-12">
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-lg" @click="openModal">
          Launch demo modal
        </button>
      </div>
    </row>
  </div>
</template>

<script>
  export default {
    methods: {
      openModal () {
        console.log(this.$bus)
        this.$bus.$emit('form-modal-open', {
          title: '新增运营中心',
          description: '<form class="form-horizontal" novalidate>' +
          '<div class="form-group"><label for="UserNo" class="col-sm-3 control-label">运营中心编号：</label><div class="col-sm-6"><input type="text" class="form-control" v-model="UserNo" id="UserNo" /></div></div>' +
          '<div class="form-group"><label for="UserName" class="col-sm-3 control-label">运营中心名称：</label><div class="col-sm-6"><input type="text" class="form-control" id="UserName"/></div></div>' +
          '<div class="form-group"><label for="CardType" class="col-sm-3 control-label">证件类型：</label><div class="col-sm-6"><select class="form-control" id="CardType" name="CardType"><option value="1">身份证</option><option value="2">机构代码</option><option value="3">营业执照</option><option value="4">统一社会信用代码</option><option value="5">其它</option></select></div></div>' +
          '<div class="form-group"><label for="CardNo" class="col-sm-3 control-label">证件号码：</label><div class="col-sm-6"><input type="text" class="form-control" id="CardNo"/></div></div>' +
          '<div class="form-group"><label for="UserAccount" class="col-sm-3 control-label">管理员账号：</label><div class="col-sm-6"><input type="text" class="form-control" id="UserAccount"/></div></div>' +
          '<div class="form-group"><label for="UserPassword" class="col-sm-3 control-label">管理员密码：</label><div class="col-sm-6"><input type="text" class="form-control" id="UserPassword"/></div></div>' +
          '<div class="form-group"><label for="Contact" class="col-sm-3 control-label">联系人：</label><div class="col-sm-6"><input type="text" class="form-control" id="Contact"/></div></div>' +
          '<div class="form-group"><label for="ContactTel" class="col-sm-3 control-label">联系电话：</label><div class="col-sm-6"><input type="text" class="form-control" id="ContactTel"/></div></div>' +
          '</form>',
          type: 'modal-primary',
          confirmText: '保存',
          cancelText: '取消',
          zip: '123456',
          confirmBefore: () => {
            debugger
          },
          confirmAfter: () => {
            window.alert('确定后触发')
          },
          cancelBefore: () => {
            window.alert('取消前触发')
          },
          cancelAfter: () => {
            window.alert('取消后触发')
          }
        })
      }
    }
}
</script>

<style lang="css" scoped>
  .modal-example .modal {
    position: relative;
    top: auto;
    bottom: auto;
    right: auto;
    left: auto;
    display: block;
    z-index: 1;
  }
  .modal-example .modal {
    background: transparent !important;
  }
</style>

<template>
  <div class="container">
    <div class="panel panel-default panel-edit">
      <div class="panel-heading">
        客户信息详情
      </div>
      <div class="panel-body">
        <div class="row col-md-10">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="CustomerCode" class="col-sm-3 control-label">客户代码</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="CustomerCode" placeholder="请输入客户代码">
              </div>
            </div>
            <div class="form-group">
              <label for="CustomerName" class="col-sm-3 control-label">客户名称</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="CustomerName" placeholder="请输入客户名称">
              </div>
            </div>
            <div class="form-group">
              <label for="CustomerTel" class="col-sm-3 control-label">客户电话</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="CustomerTel" placeholder="请输入客户电话">
              </div>
            </div>
            <div class="form-group">
              <label for="CustomerAddr" class="col-sm-3 control-label">客户地址</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" id="CustomerAddr" placeholder="请输入客户地址">
              </div>
            </div>
            <div class="form-group">
              <label for="CustomerRemark" class="col-sm-3 control-label">客户备注</label>
              <div class="col-sm-8">
                <textarea class="form-control" rows="5" id="CustomerRemark"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-8 col-sm-offset-3">
                <button class="btn btn-primary" style="margin-right: 3em;" @click.prevent="saveCustomer">保存</button><button class="btn btn-default" @click.prevent="backToList">返回客户列表</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import VAInfoBox from '../../widgets/VAInfoBox'

  export default {
    components: {
      'va-info-box': VAInfoBox
    },
    created () {
      this.fetchCustomer()
    },
    computed: {
      ...mapGetters([
        'totalCustomer'
      ])
    },
    methods: {
      ...mapActions([
        'fetchCustomer'
      ]),
      saveCustomer () {
        alert('save')
      },
      backToList () {
        this.$router.push('/HK/Customer')
      }
    }
  }
</script>
<style lang="css">
</style>

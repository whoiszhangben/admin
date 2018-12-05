<template>
  <div>
    <div class="clearfix" style="margin-bottom: 1em;">
      <div class="pull-right">
        <a class="btn bg-blue">
          <i class="fa fa-plus-square"></i>
          <span>新增运营中心</span>
        </a>
      </div>
    </div>
    <div class="box">
      <div class="box-body">
        <div class="table-responsive">
          <table class="table no-margin">
            <thead>
            <tr>
              <th>运营中心编号</th>
              <th>会员名称</th>
              <th>会员类型</th>
              <th>开户时间</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in totalOPCenter" :key="index">
              <td>{{item.UserNo}}</td>
              <td>{{item.UserName}}</td>
              <td>运营中心</td>
              <td>{{item.CreateTime}}</td>
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
        showHover: -1
      }
    },
    created () {
      this.fetchOPCenter()
    },
    computed: {
      ...mapGetters([
        'totalOPCenter'
      ])
    },
    methods: {
      ...mapActions([
        'fetchOPCenter'
      ])
    }
  }
</script>
<style lang="css">

</style>

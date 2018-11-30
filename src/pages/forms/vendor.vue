<template>
  <div>
    <p class="text-right" style="margin-right: 1em;"><a class="btn btn-primary">新增供应商</a> </p>
    <div v-for="(item, index) in totalCustomer" class='col-md-3 col-sm-6 col-xs-12'>
      <va-info-box
        :bgColor='item.CustomerColor'
        :bgIcon='item.CustomerIcon'
        :text='item.CustomerName'
        :number='item.CustomerDesc'
      ></va-info-box>
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
      ])
    }
  }
</script>
<style lang="css">
</style>

<template>
  <div>
    <p class="text-right" style="margin-right: 1em;"><a class="btn btn-primary" @click="customerop(0)">新增客户</a> </p>
    <div v-for="(item, index) in totalCustomer" class='col-md-3' @mouseover="overShow(item)" @mouseout="outHide(item)" :class="{divHover: showHover}">
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
    data () {
      return {
        showHover: false
      }
    },
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
      customerop (type) {
        if (type === 0) {
          this.$router.push({path: '/HK/CustomerOP', query: {type: 0}})
        }
      },
      overShow (item) {
        this.showHover = true
        console.log(item)
      },
      outHide (item) {
        this.showHover = false
        console.log(item)
      }
    }
  }
</script>
<style lang="css">
  .divHover{
    cursor: pointer;
    opacity: 0.5
  }
</style>

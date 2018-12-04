<template>
  <div>
    <p class="text-right" style="margin-right: 1em;"><a class="btn btn-primary" @click="customerop(0)">新增客户</a> </p>
    <div v-for="(item, index) in totalCustomer" @click="customerop(1, item.CustomerCode)" class='col-md-3' @mouseover="hover(index)" @mouseout="showHover = -1" :class="{divHover: showHover == index}">
      <va-info-box
        :bgColor='item.CustomerColor'
        :bgIcon='item.UploadImg'
        :text='item.CustomerName'
        :number='item.CustomerRemark'
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
        showHover: -1
      }
    },
    components: {
      'va-info-box': VAInfoBox
    },
    created () {
      if (this.totalCustomer.length === 0) {
        this.fetchCustomer()
      }
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
      customerop (type, customerid) {
        if (customerid) {
          this.$router.push({path: '/HK/CustomerOP', query: {type: type, id: customerid}})
        } else {
          this.$router.push({path: '/HK/CustomerOP', query: {type: type}})
        }
      },
      hover (index) {
        this.showHover = index
      }
    }
  }
</script>
<style lang="css">
  .divHover{
    cursor: pointer;
    opacity: 0.8;
    transform: scale(1.1);
    -ms-transform:scale(1.1);     /* IE 9 */
    -moz-transform:scale(1.1);     /* Firefox */
    -webkit-transform:scale(1.1); /* Safari 和 Chrome */
    -o-transform:scale(1.1);
  }
</style>

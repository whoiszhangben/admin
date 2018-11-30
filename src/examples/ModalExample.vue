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
      this.$bus.$emit('modal-open', {
        title: 'Hello',
        description: '这是描述信息',
        type: 'modal-primary',
        confirmText: '确定',
        cancelText: '取消',
        confirmBefore: () => {
          window.alert('确定前触发')
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

<template>
  <div class="info-box" :class="wrapBgColor">
    <span class="info-box-icon" v-bind:class="bgColor">
      <i style="display: inline-block;height: 90px;width: 90px;" v-bind:style="{backgroundImage: 'url(' + bgIcon + ')'}"></i>
    </span>
    <div class="info-box-content">
      <span class="info-box-text">{{text}}</span>
      <span>{{parseNumber}}</span>

      <div class="progress" v-if="isProgress">
        <div class="progress-bar" :style="`width: ${percentage}%`"></div>
      </div>
      <span class="progress-description">
        {{ progressDescription }}
      </span>
    </div>
  </div>
</template>

<script>
// TODO: move to CONSTANT
  export default {
    name: 'va-info-box',
    props: {
      'wrapBgColor': {
        type: String
      },
      'bgColor': {
        type: String
      },
      'bgIcon': {
        type: String
      },
      'text': {
        type: String,
        required: true
      },
      'number': {
        type: String,
        default: 0
      },
      'numberType': {
        type: String
      },
      'percentage': {
        type: Number,
        default: 0
      },
      'progressDescription': {
        type: String,
        default: ''
      },
      'isProgress': {
        type: Boolean,
        default: false
      }
    },
    computed: {
      parseNumber () {
        let result = this.number
        // FIXME: using constant
        switch (this.numberType) {
          case 'percentage':
            result += '%'
            break
          case 'comma':
            result = Number(result).toLocaleString('en')
            break
          default:
            break
        }
        return result
      }
    }
  }
</script>

<style lang="">
  .info-box-text{
    font-weight: bolder;
  }
</style>

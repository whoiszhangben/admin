<template>
  <div class="container">
    <div class="panel panel-default panel-edit">
      <div class="panel-heading">
        客户信息详情
      </div>
      <div class="panel-body">
        <div class="row col-md-10">
          <form class="form-horizontal" v-model="postForm">
            <div class="form-group">
              <label for="CustomerCode" class="col-sm-3 control-label">客户代码</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="postForm.CustomerCode" id="CustomerCode" placeholder="请输入客户代码">
              </div>
            </div>
            <div class="form-group">
              <label for="CustomerName" class="col-sm-3 control-label">客户名称</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="postForm.CustomerName" id="CustomerName" placeholder="请输入客户名称">
              </div>
            </div>
            <div class="form-group">
              <label for="CustomerTel" class="col-sm-3 control-label">客户电话</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="postForm.CustomerTel" id="CustomerTel" placeholder="请输入客户电话">
              </div>
            </div>
            <div class="form-group">
              <label for="CustomerAddr" class="col-sm-3 control-label">客户地址</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" v-model="postForm.CustomerAddr" id="CustomerAddr" placeholder="请输入客户地址">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-3 control-label">客户logo</label>
              <div class="col-sm-4" style="height: 200px">
                <input type="file" id="coverImg" style="margin-top:15px;" ref="inputer" @change="uploadImg()" />
                <img id="img" :src="postForm.UploadImg" alt="logo" />
              </div>
            </div>
            <div class="form-group">
              <label for="CustomerRemark" class="col-sm-3 control-label">客户备注</label>
              <div class="col-sm-8">
                <textarea class="form-control" v-model="postForm.CustomerRemark" rows="5" id="CustomerRemark"></textarea>
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
  import * as types from '../../vuex/mutation-types'

  export default {
    data () {
      return {
        postForm: {
          CustomerCode: '',
          CustomerName: '',
          CustomerTel: '',
          CustomerAddr: '',
          CustomerRemark: '',
          UploadImg: ''
        }
      }
    },
    components: {
      'va-info-box': VAInfoBox
    },
    created () {
      debugger
      if (this.$route.query.type !== 0) {
        let customerId = this.$route.query.id
        if (this.totalCustomer.length > 0) {
          let currentCus = this.totalCustomer.find(item => {
            return item.CustomerCode === customerId
          })
          if (currentCus) {
            this.loadCustomer(currentCus)
          }
        }
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
      saveCustomer () {
        let arr = []
        this.totalCustomer.forEach(item => {
          arr.push({
            'CustomerCode': item.CustomerCode,
            'CustomerName': item.CustomerName,
            'CustomerRemark': item.CustomerRemark,
            'UploadImg': item.UploadImg
          })
        })
        arr.push(this.postForm)
        this.$store.commit(types.FETCH_CUSTOMER, arr)
        this.backToList()
      },
      backToList () {
        this.$router.push('/HK/Customer')
      },
      loadCustomer (item) {
        this.postForm.CustomerCode = item.CustomerCode
        this.postForm.CustomerName = item.CustomerName
        this.postForm.CustomerTel = item.CustomerTel
        this.postForm.CustomerRemark = item.CustomerRemark
        this.postForm.CustomerAddr = item.CustomerAddr
        this.postForm.UploadImg = item.UploadImg
      },
      uploadImg () {
        let inputDOM = this.$refs.inputer
        this.files = inputDOM.files
        let file = this.files[0]
        if (!/image\/\w+/.test(file.type)) {
          alert('请确保文件为图像类型')
          return false
        }
        let reader = new FileReader()
        reader.readAsDataURL(file)
        let that = this
        reader.onload = function (e) {
          that.dealImage(reader.result, {height: 90, width: 90}, function (base) {
            that.postForm.UploadImg = base
          })
        }
      },
      dealImage (path, obj, callback) {
        let img = new Image()
        img.src = path
        img.onload = function () {
          let that = this
          // 默认按比例压缩
          let w = that.width
          let h = that.height
          let scale = w / h
          w = obj.width || w
          h = obj.height || (w / scale)
          let quality = 0.7 // 默认图片质量为0.7
          // 生成canvas
          let canvas = document.createElement('canvas')
          let ctx = canvas.getContext('2d')
          // 创建属性节点
          let anw = document.createAttribute('width')
          anw.nodeValue = w
          let anh = document.createAttribute('height')
          anh.nodeValue = h
          canvas.setAttributeNode(anw)
          canvas.setAttributeNode(anh)
          ctx.drawImage(that, 0, 0, w, h)
          // 图像质量
          if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
            quality = obj.quality
          }
          // quality值越小，所绘制出的图像越模糊
          let base64 = canvas.toDataURL('image/jpeg', quality)
          // 回调函数返回base64的值
          callback(base64)
        }
      }
    }
  }
</script>
<style lang="css">
</style>

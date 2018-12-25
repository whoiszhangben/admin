<template>
  <div id="app">
    <!--<div class="wrapper">-->
      <!--<va-navibar></va-navibar>-->
      <!--<va-slider :slideMenuItems="slideMenuItems"></va-slider>-->
      <!--<va-content-wrap></va-content-wrap>-->
      <!--<form-modal></form-modal>-->
    <!--</div>-->
    <div class="wrapper" v-show="currentUser.IsLogin">
      <va-navibar></va-navibar>
      <va-slider :slideMenuItems="slideMenuItems"></va-slider>
      <va-content-wrap></va-content-wrap>
      <form-modal></form-modal>
    </div>
    <div v-if="!currentUser.IsLogin">
      <img src="../static/img/loginbg.png" style="position: absolute;margin: auto;width: 100%;height: 100%;"/>
      <div style="position: absolute;margin: auto;width: 100%;height: 100%; opacity: 100;">
        <div id="loginForm" style="position: absolute;width: 400px;height: 250px;left:0;right:0;top:0;bottom:0;margin: auto;border-radius: 10px;background: #5eafc7;">
          <div style="width: 100%;text-align: center;color: #fefcfd; font-size: 20px;letter-spacing: 4px;font-weight: 600;line-height: 24px;padding: 10px;">
            <i class="fa fa-skyatlas fa-2x"></i>
            系统登录</div>
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-4">
              <i class="fa fa-shield fa-5x" style="padding-left: 50px;padding-top: 45px; color: #0d6aad"></i>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
              <p style="margin-top: 15px;margin-bottom: 15px;"><input type="text" placeholder="  用户名" style="border-radius: 5px;width: 200px;height: 35px;"/></p>
              <p style="margin-top: 15px;margin-bottom: 15px;"><input type="text" placeholder="  密  码" style="border-radius: 5px;width: 200px;height: 35px;"/></p>
              <p style="margin-top: 15px;margin-bottom: 15px;"><input type="button" @click="doLogin" value="登  录" class="btn btn-danger" style="width: 200px;height: 35px;"/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from './vuex/mutation-types'
  import VANaviBar from 'NaviBar.vue'
  import VASlider from 'Slider.vue'
  import VAContentWrap from 'ContentWrap.vue'
  import FormModal from './components/FormModal.vue'
  import store from './vuex/store.js'
  // import slideMenuItems from './lib/slideMenuItems.js'

  export default {
    name: 'app',
    data () {
      return {
        slideMenuItems: []
      }
    },
    created () {
    },
    computed: {
      ...mapGetters([
        'currentUser'
      ])
    },
    components: {
      'va-navibar': VANaviBar,
      'va-slider': VASlider,
      'va-content-wrap': VAContentWrap,
      FormModal
    },
    store,
    methods: {
      ...mapActions([
        'fetchCurrentUser'
      ]),
      doLogin () {
        this.$store.commit(types.FETCH_CURRENTUSER, {
          LoginID: 1,
          LoginAccount: 'zk_admin',
          RoleID: 1,
          RoleName: '电商总管理员',
          IsLogin: true,
          MenuRights: [
            {
              MenuID: 0,
              MenuName: '主页',
              MenuURL: '/',
              MenuLevel: 1,
              ParentID: 0,
              MenuIcon: 'fa fa-home'
            },
            {
              MenuID: 1,
              MenuName: '管理员管理',
              MenuURL: '',
              MenuLevel: 1,
              ParentID: 0,
              MenuIcon: 'fa fa-shield'
            },
            {
              MenuID: 8,
              MenuName: '设置角色权限',
              MenuURL: '/Manage/RoleRights',
              MenuLevel: 2,
              ParentID: 1,
              MenuIcon: 'fa fa-circle-o'
            },
            {
              MenuID: 9,
              MenuName: '设置管理员角色',
              MenuURL: '/Manage/ManagerRole',
              MenuLevel: 2,
              ParentID: 1,
              MenuIcon: 'fa fa-circle-o'
            },
            {
              MenuID: 10,
              MenuName: '管理员信息',
              MenuURL: '/Manage/ManagerInfo',
              MenuLevel: 2,
              ParentID: 1,
              MenuIcon: 'fa fa-circle-o'
            }
          ]
        })
      },
      getRouteNameByPath (path) {
        let router = this.$router.options.routes
        let current = router.find(item => {
          return item.path === path
        })
        if (current) {
          return current.name
        }
      },
      showMenu (authMenus) {
        // 显示用户权限菜单
        let retMenuArr = []
        let lvlOneArr = authMenus.filter(item => {
          return item.MenuLevel === 1
        })
        let lvlTwoArr = authMenus.filter(item => {
          return item.MenuLevel === 2
        })
        lvlOneArr.forEach(item => {
          let lvlTwoArrByMenuID = lvlTwoArr.filter(subItem => {
            return subItem.ParentID === item.MenuID
          })
          let subMenus = []
          if (lvlTwoArrByMenuID && lvlTwoArrByMenuID.length > 0) {
            lvlTwoArrByMenuID.forEach(i => {
              subMenus.push({
                type: 'item',
                icon: i.MenuIcon,
                name: i.MenuName,
                router: {
                  name: this.getRouteNameByPath(i.MenuURL)
                }
              })
            })
            retMenuArr.push({
              type: 'tree',
              icon: item.MenuIcon,
              name: item.MenuName,
              items: subMenus
            })
          } else {
            retMenuArr.push({
              type: 'tree',
              icon: item.MenuIcon,
              name: item.MenuName,
              router: {
                name: this.getRouteNameByPath(item.MenuURL)
              }
            })
          }
        })
        return retMenuArr
      }
    },
    watch: {
      'currentUser.IsLogin' (nVal) {
        if (nVal) {
          debugger
          this.slideMenuItems = this.showMenu(this.currentUser.MenuRights)
        }
      }
    }
  }
</script>

<style>
  @media screen and (max-width: 769px) and (min-width: 320px) {
    #loginForm {
      width: 80%;
    }
  }
</style>

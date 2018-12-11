import Vue from 'vue'
import Router from 'vue-router'
import Sample from 'components/Sample.vue'
import DashboardV1 from 'examples/Dashboard.v1.vue'
import DashboardV2 from 'examples/Dashboard.v2.vue'
import ChartExample from 'examples/ChartExample'
import AlertExample from 'examples/AlertExample'
import ModalExample from 'examples/ModalExample'
import WidgetsExample from 'examples/WidgetsExample'
import APIExample from 'examples/APIExample'

// UI Element Groups
import General from 'pages/ui-elements/General.vue'
import Icons from 'pages/ui-elements/Icons.vue'
import Buttons from 'pages/ui-elements/Buttons.vue'
import Sliders from 'pages/ui-elements/Sliders.vue'
import Timeline from 'pages/ui-elements/Timeline.vue'
import Modals from 'pages/ui-elements/Modals.vue'

// forms
import AdvancedElements from 'pages/forms/AdvancedElements.vue'
import HXProfile from 'pages/forms/profile.vue'
import HKVendor from 'pages/forms/vendor.vue'
import HKCustomer from 'pages/forms/customer.vue'
import HKCustomerOP from 'pages/forms/customerop.vue'
import HKGoods from 'pages/forms/goods.vue'
import MallOPCenter from 'pages/forms/mall/opcenter.vue'
import RoleRights from 'pages/forms/manage/rolerights.vue'
import AuthRights from 'pages/forms/manage/authrights.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ChartExample
    },
    {
      path: '/sample',
      name: 'Sample',
      component: Sample
    },
    {
      path: '/dashboard/v1',
      name: 'DashboardV1',
      component: DashboardV1
    },
    {
      path: '/dashboard/v2',
      name: 'DashboardV2',
      component: DashboardV2
    },
    {
      path: '/Manage/RoleRights',
      name: 'RoleRights',
      component: RoleRights
    },
    {
      path: '/Manage/AuthRights',
      name: 'AuthRights',
      component: AuthRights
    },
    {
      path: '/HK/Vendor',
      name: 'HKVendor',
      component: HKVendor
    },
    {
      path: '/HK/Customer',
      name: 'HKCustomer',
      component: HKCustomer
    },
    {
      path: '/HK/CustomerOP',
      name: 'HKCustomerOP',
      component: HKCustomerOP
    },
    {
      path: '/HK/Goods',
      name: 'HKGoods',
      component: HKGoods
    },
    {
      path: '/Mall/OPCenter',
      name: 'MallOPCenter',
      component: MallOPCenter
    },
    {
      path: '/examples/chart',
      name: 'ChartExample',
      component: ChartExample
    },
    {
      path: '/examples/alert',
      name: 'AlertExample',
      component: AlertExample
    },
    {
      path: '/examples/modal',
      name: 'ModalExample',
      component: ModalExample
    },
    {
      path: '/examples/widgets',
      name: 'WidgetsExample',
      component: WidgetsExample
    },
    {
      path: '/examples/api-example',
      name: 'APIExample',
      component: APIExample
    },
    {
      path: '/ui-elements/general',
      name: 'General',
      component: General
    },
    {
      path: '/ui-elements/icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/ui-elements/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/ui-elements/sliders',
      name: 'Sliders',
      component: Sliders
    },
    {
      path: '/ui-elements/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/ui-elements/modals',
      name: 'Modals',
      component: Modals
    },
    {
      path: '/HX/Profile',
      name: 'HXProfile',
      component: HXProfile
    },
    {
      path: '/forms/advanced-elements',
      name: 'AdvancedElements',
      component: AdvancedElements
    }
  ],
  linkActiveClass: 'active'
})

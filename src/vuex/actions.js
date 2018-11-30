import * as types from './mutation-types'
import { services } from './api'

export const fetchProduct = ({ commit }) => {
  // API request
  return services.products.getAll()
  .then((response) => {
    console.log(response)
    commit(types.FETCH_PRODUCT, response.data)
  })
  .catch((error) => {
    console.error(error)
  })
}

export const fetchProfile = ({ commit }) => {
  commit(types.FETCH_PROFILE, [{
    ProfileNo: 'HX-QT-00001',
    EmpName: '刘一',
    EmpIDNo: '421563199010056531',
    EmpTelNo: '13123001212',
    RelationVal: 4}, {
      ProfileNo: 'HX-QT-00001',
      EmpName: '刘一',
      EmpIDNo: '421563199010056531',
      EmpTelNo: '13123001212',
      RelationVal: 4 }])
  // return services.profiles.getAll()
  //   .then(response => {
  //     commit(types.FETCH_PROFILE, response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
}

export const fetchCustomer = ({ commit }) => {
  commit(types.FETCH_CUSTOMER, [{
    CustomerColor: 'bg-aqua',
    CustomerIcon: 'ion ion-ios-gear-outline',
    CustomerName: '万宁',
    CustomerDesc: '牛奶公司旗下的健与美连锁品牌'}, {
      CustomerColor: 'bg-red',
      CustomerIcon: 'fa fa-google-plus',
      CustomerName: '屈臣氏',
      CustomerDesc: '品质过硬'}, {
        CustomerColor: 'bg-red',
        CustomerIcon: 'fa fa-google-plus',
        CustomerName: 'BabyLink',
        CustomerDesc: '大家信赖 质量放心'}, {
          CustomerColor: 'bg-red',
          CustomerIcon: 'fa fa-google-plus',
          CustomerName: '周大福',
          CustomerDesc: '尽显尊贵'}, {
            CustomerColor: 'bg-red',
            CustomerIcon: 'fa fa-google-plus',
            CustomerName: '家乐福',
            CustomerDesc: '好名字'}])
  // return services.customers.getAll()
  //   .then(response => {
  //     commit(types.FETCH_CUSTOMER, response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
}

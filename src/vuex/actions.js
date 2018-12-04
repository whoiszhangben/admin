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
    CustomerCode: 'Wannings',
    CustomerColor: 'bg-aqua',
    UploadImg: 'data:image/jpeg;base64,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',
    CustomerName: '万宁',
    CustomerRemark: '牛奶公司旗下的健与美连锁品牌'}])
  // return services.customers.getAll()
  //   .then(response => {
  //     commit(types.FETCH_CUSTOMER, response.data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
}

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

export const fetchOPCenter = ({ commit }) => {
  commit(types.FETCH_OPCENTER, [
    {
      UserNo: '555',
      UserName: '555运营',
      CardType: 0,
      CardNo: '429001198410055637',
      UserAccount: '101559',
      UserPassword: '123456',
      Contact: '张三',
      ContactTel: '15013843457',
      CreateTime: '2018/12/15 10:40:10'
    },
    {
      UserNo: '555',
      UserName: '555运营',
      CardType: 0,
      CardNo: '429001198410055637',
      UserAccount: '101559',
      UserPassword: '123456',
      Contact: '张三',
      ContactTel: '15013843457',
      CreateTime: '2018/12/15 10:40:10'
    },
    {
      UserNo: '555',
      UserName: '555运营',
      CardType: 0,
      CardNo: '429001198410055637',
      UserAccount: '101559',
      UserPassword: '123456',
      Contact: '张三',
      ContactTel: '15013843457',
      CreateTime: '2018/12/15 10:40:10'
    }
  ])
}

export const fetchRoles = ({ commit }) => {
  commit(types.FETCH_ROLE, [
    {
      RoleID: 1,
      RoleName: '电商总管理员'
    },
    {
      RoleID: 2,
      RoleName: '会员超级管理员'
    },
    {
      RoleID: 3,
      RoleName: '机构管理员'
    },
    {
      RoleID: 4,
      RoleName: '运营中心管理员'
    }
  ])
}

export const fetchMenuRoles = ({ commit }) => {
  commit(types.FETCH_MENUROLE, [
    {
      MenuID: 1,
      MenuName: '管理员管理',
      MenuURL: '',
      MenuLevel: 1,
      ParentID: 0,
      RoleID: 1,
      RoleName: '电商总管理员'
    },
    {
      MenuID: 8,
      MenuName: '设置角色权限',
      MenuURL: '/Manage/RoleRights',
      MenuLevel: 2,
      ParentID: 1,
      RoleID: 1,
      RoleName: '电商总管理员'
    },
    {
      MenuID: 9,
      MenuName: '设置管理员角色',
      MenuURL: '/Manage/ManagerRole',
      MenuLevel: 2,
      ParentID: 1,
      RoleID: 1,
      RoleName: '电商总管理员'
    },
    {
      MenuID: 10,
      MenuName: '管理员信息',
      MenuURL: '/Manage/ManagerInfo',
      MenuLevel: 2,
      ParentID: 1,
      RoleID: 1,
      RoleName: '电商总管理员'
    },
    {
      MenuID: 2,
      MenuName: '香港代购',
      MenuURL: '',
      MenuLevel: 1,
      RoleID: 0,
      ParentID: 0,
      RoleName: ''
    },
    {
      MenuID: 11,
      MenuName: '客户管理',
      MenuURL: '/HK/Customer',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 2,
      RoleName: ''
    },
    {
      MenuID: 12,
      MenuName: '商品管理',
      MenuURL: '/HK/Goods',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 2,
      RoleName: ''
    },
    {
      MenuID: 13,
      MenuName: '供应商管理',
      MenuURL: '/HK/Vendor',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 2,
      RoleName: ''
    },
    {
      MenuID: 14,
      MenuName: '采购管理',
      MenuURL: '/HK/Purchase',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 2,
      RoleName: ''
    },
    {
      MenuID: 15,
      MenuName: '销售管理',
      MenuURL: '/HK/Sale',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 2,
      RoleName: ''
    },
    {
      MenuID: 3,
      MenuName: '华信工作',
      MenuURL: '',
      MenuLevel: 1,
      RoleID: 0,
      ParentID: 0,
      RoleName: ''
    },
    {
      MenuID: 16,
      MenuName: '档案管理',
      MenuURL: '/HX/Profile',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 3,
      RoleName: ''
    },
    {
      MenuID: 17,
      MenuName: '扩展功能',
      MenuURL: '/HX/Ext',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 3,
      RoleName: ''
    },
    {
      MenuID: 4,
      MenuName: '会员管理',
      MenuURL: '',
      MenuLevel: 1,
      RoleID: 0,
      ParentID: 0,
      RoleName: ''
    },
    {
      MenuID: 18,
      MenuName: '电商账户',
      MenuURL: '/Member/ECAccount',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 4,
      RoleName: ''
    },
    {
      MenuID: 19,
      MenuName: '运营中心',
      MenuURL: '/Member/OPCenter',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 4,
      RoleName: ''
    },
    {
      MenuID: 20,
      MenuName: '综合会员',
      MenuURL: '/Member/GeneralMember',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 4,
      RoleName: ''
    },
    {
      MenuID: 21,
      MenuName: '机构信息',
      MenuURL: '/Member/AreaInfo',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 4,
      RoleName: ''
    },
    {
      MenuID: 22,
      MenuName: '公众号信息',
      MenuURL: '/Member/Wechat',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 4,
      RoleName: ''
    },
    {
      MenuID: 23,
      MenuName: '手工兑换',
      MenuURL: '/Member/Exchange',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 4,
      RoleName: ''
    },
    {
      MenuID: 5,
      MenuName: '商城管理',
      MenuURL: '',
      MenuLevel: 1,
      RoleID: 0,
      ParentID: 0,
      RoleName: ''
    },
    {
      MenuID: 24,
      MenuName: '客户资料',
      MenuURL: '/Mall/Customer',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 5,
      RoleName: ''
    },
    {
      MenuID: 25,
      MenuName: '商品管理',
      MenuURL: '/Mall/Goods',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 5,
      RoleName: ''
    },
    {
      MenuID: 26,
      MenuName: '评价管理',
      MenuURL: '/Mall/Comment',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 5,
      RoleName: ''
    },
    {
      MenuID: 27,
      MenuName: '提货管理',
      MenuURL: '/Mall/Delivery',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 5,
      RoleName: ''
    },
    {
      MenuID: 28,
      MenuName: '代售管理',
      MenuURL: '/Mall/Commission',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 5,
      RoleName: ''
    },
    {
      MenuID: 29,
      MenuName: '快递管理',
      MenuURL: '/Mall/Express',
      MenuLevel: 2,
      RoleID: 0,
      ParentID: 5,
      RoleName: ''
    },
    {
      MenuID: 6,
      MenuName: '报表查询',
      MenuURL: '',
      MenuLevel: 1,
      RoleID: 0,
      ParentID: 0,
      RoleName: ''
    },
    {
      MenuID: 7,
      MenuName: '个人点滴',
      MenuURL: '',
      MenuLevel: 1,
      RoleID: 0,
      ParentID: 0,
      RoleName: ''
    }
  ])
}

export const fetchAdmins = ({ commit }) => {
  commit(types.FETCH_ADMIN, [
    {
      LoginID: 1,
      UserID: 1,
      LoginAccount: 'zk_admin',
      AccountType: 10,
      AccountStatus: 1,
      Mobile: '15013843457',
      CreateTime: '2018-12-12 11:11:08',
      UpdateTime: ''
    },
    {
      LoginID: 2,
      UserID: 2,
      LoginAccount: '999_admin',
      AccountType: 12,
      AccountStatus: 1,
      Mobile: '15013843457',
      CreateTime: '2018-12-12 11:11:08',
      UpdateTime: ''
    },
    {
      LoginID: 3,
      UserID: 3,
      LoginAccount: '901_admin',
      AccountType: 14,
      AccountStatus: 1,
      Mobile: '15013843457',
      CreateTime: '2018-12-12 11:11:08',
      UpdateTime: ''
    },
    {
      LoginID: 4,
      UserID: 4,
      LoginAccount: '888_admin',
      AccountType: 15,
      AccountStatus: 2,
      Mobile: '15013843457',
      CreateTime: '2018-12-12 11:11:08',
      UpdateTime: ''
    }
  ])
}

export const fetchAdminRoles = ({ commit }) => {
  commit(types.FETCH_ADMINROLE, [
    {
      LoginID: 1,
      LoginAccount: 'zk_admin',
      RoleID: 1,
      RoleName: '电商总管理员'
    },
    {
      LoginID: 1,
      LoginAccount: 'zk_admin',
      RoleID: 1,
      RoleName: '电商总管理员'
    },
    {
      LoginID: 1,
      LoginAccount: 'zk_admin',
      RoleID: 1,
      RoleName: '电商总管理员'
    },
    {
      LoginID: 1,
      LoginAccount: 'zk_admin',
      RoleID: 1,
      RoleName: '电商总管理员'
    }
  ])
}

export const fetchCurrentUser = ({ commit }) => {
  commit(types.FETCH_CURRENTUSER, {
    LoginID: 1,
    LoginAccount: 'zk_admin',
    RoleID: 1,
    RoleName: '电商总管理员',
    IsLogin: true,
    MenuRights: [
      {
        MenuID: 1,
        MenuName: '管理员管理',
        MenuURL: '',
        MenuLevel: 1,
        ParentID: 0
      },
      {
        MenuID: 8,
        MenuName: '设置角色权限',
        MenuURL: '/Manage/RoleRights',
        MenuLevel: 2,
        ParentID: 1
      },
      {
        MenuID: 9,
        MenuName: '设置管理员角色',
        MenuURL: '/Manage/ManagerRole',
        MenuLevel: 2,
        ParentID: 1
      },
      {
        MenuID: 10,
        MenuName: '管理员信息',
        MenuURL: '/Manage/ManagerInfo',
        MenuLevel: 2,
        ParentID: 1
      }
    ]
  })
}

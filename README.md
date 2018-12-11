这个项目主要用vue+adminLTE+bootstrap去改之前基于asp.net mvc做得HKShoppingPrj项目，主要是单页面SPA应用
为了实现更轻量级

2018/12/05 增加管理后台的权限控制
1 增加了MenuInfo菜单信息表 MenuID(菜单ID)，MenuName(菜单名称),MenuURL(菜单URL),ParentID(父菜单ID)，MenuLevel(菜单层级)
2 增加了SysRole管理角色表 RoleID(角色编号，自增长ID),RoleName(角色名称)
3 增加了MenuRole角色菜单映射表 ID(自增长ID),MenuID(菜单ID)，MenuName(菜单名称),RoleId(角色编号),RoleName(角色名称)
4 增加了UserInfo用户表 UserID(用户ID，自增长),UserNo(用户编码),UserName(用户名称),CardType(证件类型),CardNo(证件号码),UserTelNo(电话号码),UserStatus(用户状态),MemberID(会员ID),OrgID(机构ID),BrokerID(经济人ID),
  OrgCode(机构代码),OrgName(机构名称),CreateTime(创建时间),Creator(创建人),UpdateTime(更新时间),Updator(更新人)
5 增加了LoginAccount登录账户表 LoginID(登录ID，自增长)，UserID(用户表主键),LoginAccount(登录账号),LoginPassword(登录密码),AccountType(账户类型),AccountStatus(账户状态),Mobile(手机号码),CreateTime(创建时间),Creator(创建人),UpdateTime(更新时间),Updator(更新人)
6 增加了TaAccount资金账户表 TaAccountID(资金账户ID，自增长),UserID(用户表主键),Balance(资金余额),HasCheck,DesCheck,MemberID,OrgID,BrokerID,Status
7 增加了 LoginAccountRole登录账户角色映射表 ID(自增长ID),RoleId(角色编号),LoginID(登录ID)

系统的菜单设计
客户管理	/HK/Customer
商品管理	/HK/Goods
供应商管理	/HK/Vendor
采购管理	/HK/Purchase
销售管理	/HK/Sale

档案管理	/HX/Profile
扩展功能	/HX/Ext

管理员管理
设置角色权限	/Manage/RoleRights
设置管理员角色	/Manage/ManagerRole
管理员信息	/Manage/ManagerInfo

会员信息
电商账户	/Member/ECAccount
运营中心	/Member/OPCenter
综合会员	/Member/GeneralMember
机构信息	/Member/AreaInfo
公众号信息	/Member/Wechat
手工兑换	/Member/Exchange

商城管理
客户资料	/Mall/Customer
商品管理	/Mall/Goods
评价管理	/Mall/Comment
提货管理	/Mall/Delivery
代售管理	/Mall/Commission
快递管理	/Mall/Express







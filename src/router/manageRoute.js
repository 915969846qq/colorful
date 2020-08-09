import AdvertManage from '../component/manage/guanggaoManage/advertManage'
import OrderStatistics from '../component/manage/orderStatistics/orderStatistics'
import RootManage from '../component/manage/rootManage/rootManage'
import SearchManage from '../component/manage/searchManage/searchManage'
import UsersStatistics from '../component/manage/usersStatistics/usersStatistics'
import Usersaudit from '../component/manage/usersaudit/usersaudit'
import Usersaudited from '../component/manage/usersaudit/usersaudited'
import Orderdetails from '../component/manage/orderStatistics/Orderdetails'


export const secroutes = [
  {
    path: '/manage/AdvertManage',
    component: AdvertManage,
  },
  {
    path: '/manage/OrderStatistics',
    component: OrderStatistics,
  },
  {
    path: '/manage/RootManage',
    component: RootManage,
  },
  {
    path: '/manage/SearchManage',
    component: SearchManage,
  },
  {
    path: '/manage/UsersStatistics',
    component: UsersStatistics,
  },
  {
    path: '/manage/Usersaudit',
    component: Usersaudit,
  },
  {
    path: '/manage/Usersaudited',
    component: Usersaudited,
  },
  {
    path: '/manage/Orderdetails',
    component: Orderdetails,
  },
]

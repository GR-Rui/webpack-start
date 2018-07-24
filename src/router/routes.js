import Home from 'views/Home'
import First from 'views/First'
import Second from 'views/Second'

export default [
  {path: '/',redirect: 'home'},
  {path: '/home',name: 'home',component: Home},
  {path: '/first',name: 'first',component: First},
  {path: '/second',name: 'second',component: Second}
] 
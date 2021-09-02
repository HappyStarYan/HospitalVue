import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const Login  = ()=> import('../views/login/Login')
const Register = ()=> import('../views/register/Register')
const Home = ()=> import('../views/home/Home')

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '用户登陆',
      component:Login
    },
    {
      path: '/register',
      name:'用户注册',
      meta:{index:1,title:'用户注册'},
      component:Register
    },
    {
      path:'/login',
      name:'用户登陆',
      meta:{index:2,title:'用户登陆'},
      component:Login
    },
    {
      path:'/home',
      name:'首页',
      meta:{index:3,title:'首页'},
      component:Home
    }
  ]
})

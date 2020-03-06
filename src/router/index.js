import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Shopcart from '@/components/Shopcart'
import Search from '@/components/Search'
import newsList from '@/components/News/newsList'
import newsDetail from '@/components/News/newsDetail'
import photoList from '@/components/PhotoList/photoList'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/Home'},
    {
      path: '/Home',name: 'Home',component: Home,
    },
    {
      path:'/Home/newsList',name:'newsList',component:newsList
    },
    {
      path:'/Home/newsList/newsDetail/:id',name:'newsDetail',component:newsDetail
    },
    {
      path: '/Member',name: 'Member',component: Member
    },   
    {
      path: '/Shopcart',name: 'Shopcart',component: Shopcart
    },    
    {
      path: '/Search',name: 'Search',component: Search
    },
    {
      path:'/photoList',name:"photoList",component:photoList
    }
  ]
})

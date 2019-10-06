import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/Menber.vue'
import ShopcarContainer from './components/tabbar/ShoppingCart.vue'
import SearchContainer from './components/tabbar/Search.vue'
import newslist from './components/news/newslist.vue'
import NewsInfo from './components/news/newsinfo.vue'
import PhotoList from './components/photo/photolist.vue'
import PhotoInfo from './components/photo/photoinfo.vue'
import GoodList from './components/goods/goodslist.vue'
import GoodInfo from './components/goods/goodsinfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: newslist },
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodList },
    { path: '/home/goodsinfo/:id', component: GoodInfo ,name:"goodsinfo"},
    { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
  ],
  linkActiveClass: 'mui-active' 
})

// 把路由对象暴露出去
export default router
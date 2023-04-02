// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
  mode:'history',
  routes: [
    {
      name: 'about',
      path: '/about',
      meta: { title: '新闻' },
      component: About
    },
    {
      name: 'home',
      path: '/home',
      meta: { title: '主页' },
      component: Home,
      children: [
        {
          name: 'news',
          path: 'news',
          meta: { isAuth: true, title: '新闻' },
          component: News,
          //  独享守卫:
          beforeEnter (to, from, next) {
            console.log('beforeEnter', to, from)
            if (to.meta.isAuth) { //判断当前路由是否需要进行权限控制
              if (localStorage.getItem('school') === 'atguigu') {
                next()
              } else {
                alert('暂无权限查看')
              }
            } else {
              next()
            }
          }
        },
        {
          name: 'message',
          path: 'message',
          meta: { isAuth: true, title: '消息' },
          component: Message,
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: Detail,
              meta: { isAuth: true, title: '细节' },
              props ($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title
                }
              }
            }
          ]
        }
      ]
    }
  ]
})
//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem('password') === '123456') {
      next()
    }
    else { alert('请输入密码') }
  }
  else {
    next()
  }
})

//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title //修改网页的title
  } else {
    document.title = '硅谷系统'
    console.log(to, from)
  }
})

export default router
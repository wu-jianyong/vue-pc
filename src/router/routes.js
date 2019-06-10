import HelloWorld from '../components/HelloWorld.vue'
import firstPage from '../components/firstPage.vue'
import secondPage from '../components/secondPage.vue'
export default [
  {
    path: '/HelloWorld',
    component: HelloWorld
  },
  {
    path: '/firstPage',
    component: firstPage
  },
  {
    path: '/secondPage',
    component: secondPage
  },
  {
    path: '/',
    redirect: '/HelloWorld'
  }
]

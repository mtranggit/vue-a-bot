import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../home/HomePage.vue'
import RobotBuilder from '../build/RobotBuilder.vue'
import PartInfo from '../parts/PartInfo.vue'
import BrowseParts from '../parts/BrowseParts.vue'
import RobotHeads from '../parts/RobotHeads.vue'
import RobotArms from '../parts/RobotArms.vue'
import RobotBases from '../parts/RobotBases.vue'
import RobotTorsos from '../parts/RobotTorsos.vue'
import SidebarStandard from '../sidebars/SidebarStandard.vue'
import SidebarBuild from '../sidebars/SidebarBuild.vue'
import SidebarBrowse from '../sidebars/SidebarBrowse.vue'
import ShoppingCart from '../cart/ShoppingCart.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
    // component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
    // component: RobotBuilder,
  },
  {
    path: '/parts/browse',
    name: 'Browse',
    components: {
      default: BrowseParts,
      sidebar: SidebarBrowse,
    },
    // component: BrowseParts,
    children: [
      {
        path: 'heads',
        name: 'BrowseHeads',
        component: RobotHeads,
      },
      {
        path: 'arms',
        name: 'BrowseArms',
        component: RobotArms,
      },
      {
        path: 'torsos',
        name: 'BrowseTorsos',
        component: RobotTorsos,
      },
      {
        path: 'bases',
        name: 'BrowseBases',
        component: RobotBases,
      },
    ],
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    // multi rouer view does not work with passing router params as props!!!
    // components: {
    //   default: PartInfo,
    //   sidebar: SidebarBuild,
    // },
    component: PartInfo,
    props: true, // pass router params as props
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id))
      next(isValidId)
    },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  },
]

export default new Router({
  mode: 'history',
  routes,
})

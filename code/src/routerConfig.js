

import Statistics from './pages/Statistics.vue'
import oofLine from './pages/offLine.vue'

export default{
  routes:[
    {path:'/onLine',component:Statistics},
    {path:'/soldOut',component:oofLine},
    {path:'*',redirect:'/soldOut'}
  ]
}



import WildView from './components/views/wild/WildView.vue';
import VividView from './components/views/vivid/VividView.vue';
import PrimalView from './components/views/primal/PrimalView.vue';
import Home from './components/views/Home.vue'

export const routes = [

    {path: '', component: Home},
    {path: '/Wild', component: WildView},
    {path: '/vivid', component: VividView},
    {path: '/primal', component: PrimalView}

];
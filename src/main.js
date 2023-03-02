import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import './assets/tooltip.css'
import { TooltipDirective } from './directives/TooltipDirective'

const app = createApp(App)

app.directive('tooltip', TooltipDirective )

app.mount('#app')

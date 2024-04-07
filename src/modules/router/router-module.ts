import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import { createRouter, createWebHistory } from 'vue-router'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import App from './components/App.vue'

export class RouterModule implements VueModule {
  readonly name = 'router'
  router?: ReturnType<typeof createRouter>;
  install(Vue: typeof _Vue) {
    this.router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      mode: 'history',
      base: process.env.BASE_URL
    })
  }
}

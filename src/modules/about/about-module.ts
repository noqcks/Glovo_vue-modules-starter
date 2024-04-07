import { Vue as _Vue } from 'vue/types/vue'
import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { aboutRoutes } from './router/about-routes'

export class AboutModule implements VueModule {
  readonly name = 'about'
  constructor(private router: Router) {}

  install(Vue: typeof _Vue) {
    aboutRoutes.forEach(route => this.router.addRoute(route))
  }
}

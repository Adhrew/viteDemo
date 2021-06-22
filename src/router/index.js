import { createRouter, createWebHistory } from "vue-router";
import settings from "../config/index";
import NotFound from "@/views/NotFound.vue";
import BaseLayout from '@/layout/basic_layout.vue';
const modulesFiles = import.meta.globEager('./modules/*.js')
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
let modules = []
for (const path in modulesFiles) {
  modules.push(...modulesFiles[path].default)
}
let routes = [ ...modules ];
const customize = settings.customize;
routes = routes.filter(item => {
  return customize.filter(custom => item.customize.includes(custom)).length > 0;
});
const defaultRoute = [
  {
    path: '/',
    name: 'home',
    component: BaseLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import("@/views/index.vue")
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: NotFound
  }
]
routes.push(...defaultRoute);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
export default router;

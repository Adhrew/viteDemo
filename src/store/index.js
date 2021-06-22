import { createStore } from "vuex";
import getters from "./getters";
const modulesFiles = import.meta.globEager('./modules/*.js')
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
let modules = []
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  const value = modulesFiles[path];
  modules[moduleName] = value.default;
}
export default createStore({
  modules,
  getters
});

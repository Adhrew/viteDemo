import { createI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";
import settings from "../config/index";
const locale = window.localStorage.getItem("locale") || settings.languages[0];
const messages = {};
const modulesFiles = import.meta.globEager('./*.js');
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  if (settings.languages.includes(moduleName)) {
    const value = modulesFiles[path].default;
    messages[moduleName] = value;
  }
}
const i18n = createI18n({
  // something vue-i18n options here ...
  locale,
  silentFallbackWarn: true,
  messages: messages
});
export default i18n;

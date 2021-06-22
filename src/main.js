import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
// i18n
import i18n from "./lang/index";
// 全局scss
import "@/styles/basic.scss";
// 全局settings
import settings from './config/index';
// ant-design-vue@next
import { Button, message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.js';
const app = createApp(App);
// 引入全局settings
app.config.globalProperties.settings = settings;
// 引入vue-i18n-next
app.use(i18n);
// 引入 ant-design-vue@next
app.use(Button);
app.config.globalProperties.$message = message;

app
  .use(store)
  .use(router)
  .mount("#app");

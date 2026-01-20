import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import "virtual:windi.css";
import { router } from "./router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import stroe from "./store";
import "./permission";
import "nprogress/nprogress.css";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(ElementPlus);
app.use(stroe);
app.mount("#app");

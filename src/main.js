import { router } from "@/routes";
import App from "./App.vue";
import { createApp } from "vue";
import "@/assets/scss/base.scss";

createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
import "./assets/main.css";

app.use(router);
app.use(MotionPlugin);

app.mount("#app");

import { createApp } from "vue";
import "./assets/base.scss";
import "vue3-carousel/dist/carousel.css";
import "./assets/customVC.css";

import App from "./App.vue";
import route from "./router";

const app = createApp(App);

app.use(route).mount("#app");

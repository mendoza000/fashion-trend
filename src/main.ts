import { createApp } from "vue";
import { createPinia } from "pinia";
// import VAnimateCss from "v-animate-css";
import App from "./App.vue";

import "./assets/main.css";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(VAnimateCss);

app.mount("#app");

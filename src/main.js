import { createApp } from "vue";
import "bootstrap";

import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";

const app = createApp(App);

import BaseButton from "./components/ui/BaseButton.vue";
import BaseLoader from "./components/ui/BaseLoader.vue";

app.component("base-button", BaseButton);
app.component("base-loader", BaseLoader);

app.use(router);
app.use(store);
app.mount("#app");

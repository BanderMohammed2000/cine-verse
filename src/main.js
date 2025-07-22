import { createApp } from "vue";
import "bootstrap";

import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";

const app = createApp(App);

import BaseButton from "./components/ui/BaseButton.vue";
import BaseLoader from "./components/ui/BaseLoader.vue";
import BaseOverlay from "./components/ui/BaseOverlay.vue";
import BaseInput from "./components/ui/BaseInput.vue";

app.component("base-button", BaseButton);
app.component("base-loader", BaseLoader);
app.component("base-overlay", BaseOverlay);
app.component("base-input", BaseInput);

app.use(router);
app.use(store);

// Promise.all([
//   document.fonts.load('1rem "Poppins"'),
//   document.fonts.load('1rem "Tajawal"'),
// ]).then(() => {
//   document.body.style.visibility = "visible";
// });

app.mount("#app");

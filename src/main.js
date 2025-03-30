import { createApp } from "vue";
import "bootstrap";
import App from "./App.vue";

const app = createApp(App);

import BaseButton from "./components/ui/BaseButton.vue";

app.component("base-button", BaseButton);

app.mount("#app");

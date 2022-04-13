import { createApp } from "vue";
import App from "./App.vue";
import "./input.css";
import router from "./router";
import Vuex from 'vuex';

import { account } from './store/account';
import { alert  } from "./store/alert";
const app = createApp(App);
export const store = new Vuex.Store({
    modules: {
        account,
        alert
    }
});

app.use(router);
app.use(store)
app.mount("#app");

require('./bootstrap');
window.Vue = require('vue').default;

import {createApp} from "vue";
const app = createApp({})

import router from "./router";

app.use(router).mount("#app")


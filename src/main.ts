import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// @ts-ignore
import {createProvider} from './vue-apollo';

import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;

// @ts-ignore
new Vue({
    router,
    store,

    // @ts-ignore
    apolloProvider: createProvider(),

    vuetify,
    render: (h) => h(App)
}).$mount('#app');

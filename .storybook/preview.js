import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import Vue plugins
import Vuex from 'vuex';

// Import your global components.
// import Mybutton from '../src/stories/Button.vue';

// Install Vue plugins.
Vue.use(Vuex);

// Register global components.
// Vue.component('my-button', Mybutton);

configure(require.context('../src', true, /\stories\.ts$/), module);

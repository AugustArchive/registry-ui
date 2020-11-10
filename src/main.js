import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

const vm = createApp(App);
vm.use(router);
vm.mount('#app');

// Hot module replacement, view here for more information
// https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => vm.unmount());
}

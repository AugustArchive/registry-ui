import { createRouter, createWebHistory } from 'vue-router';

/**
 * Represents a route directive
 * @param {string} path The path to use
 * @param {string} name The name of the component
 * @param {string} title The title to set as
 * @param {string} component The component URL
 * @returns {import('vue-router').RouteRecordRaw}
 */
const route = (path, name, title, component) => ({
  component: () => import(`./views/${component}.vue`),
  name: `${name}Component`,
  path,
  meta: {
    title
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    route('/', 'Home', 'Home', 'Home')
  ]
});

export default router;

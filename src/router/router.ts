import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import routes from './routes';

Vue.use(Router);

// Create a new router
export const router = new Router({
  mode: 'history',
  routes,
});

Vue.use(Meta);

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('jwtToken');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  // TODO This won't activate if a page is refreshed
  document.title = to.meta.title;

  next();
});

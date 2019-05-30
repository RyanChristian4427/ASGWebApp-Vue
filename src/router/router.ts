import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import routes from './routes';
import {getToken} from '@/services/jwt-service';
import {store} from '@/store';

Vue.use(Router);

// Create a new router
export const router = new Router({
    mode: 'history',
    routes,
});

Vue.use(Meta);

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!getToken()) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath },
            });
        } else {
            const user = store.getters['authentication/currentUser'];
            if (to.matched.some((record) => record.meta.isAdmin)) {
                if (user.role === 'Admin') {
                    next();
                } else {
                    next({ name: 'Dashboard'});
                }
            } else {
                next();
            }
        }
    } else {
        next();
    }

    // TODO This won't activate if a page is refreshed
    document.title = to.meta.title;
});

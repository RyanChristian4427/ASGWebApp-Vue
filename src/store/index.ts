import Vue from 'vue';
import Vuex from 'vuex';

import alert from '@/store/modules/alert';
import authentication from '@/store/modules/authentication';
import users from '@/store/modules/users';
import app from '@/store/modules/material-app';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        authentication,
        users,
        app,
    },
    plugins: [
        createPersistedState({
            paths: ['authentication', 'app'],
        }),
    ],
});

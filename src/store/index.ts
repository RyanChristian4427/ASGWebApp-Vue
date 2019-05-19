import Vue from 'vue';
import Vuex from 'vuex';

import alert from '@/store/modules/alert';
import authentication from '@/store/modules/authentication';
import candidates from '@/store/modules/candidates';
import app from '@/store/modules/material-app';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        alert,
        authentication,
        candidates,
        app,
    },
    plugins: [
        createPersistedState({
            paths: ['authentication', 'candidates', 'app'],
        }),
    ],
});

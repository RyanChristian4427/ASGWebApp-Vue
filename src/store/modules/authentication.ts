import ApiService from '@/plugins/api.axios';
import JwtService from '@/services/jwt-service';

const state = {
    errors: null,
    user: {},
    status: {},
    isAuthenticated: !!JwtService.getToken(),
};

const getters = {
    currentUser(state: { user: any; }) {
        return state.user;
    },
    isAuthenticated(state: { isAuthenticated: any; }) {
        return state.isAuthenticated;
    },
};

const actions = {
    login(context: any, credentials: any) {
        return new Promise((resolve) => {
            context.commit('authRequest');
            ApiService.post('auth/login', credentials)
                .then(({ data }) => {
                    context.commit('setAuth', data.jwtToken);
                    ApiService.setHeader();
                    resolve(data);
                })
                .catch(({ response }) => {
                    if (response !== undefined) {
                        context.commit('setError', response.data.errors);
                    } else {
                        context.commit('setError', 'Unknown Error');
                    }
                });
        });
    },
    logout(context: any) {
        context.commit('purgeAuth');
    },
    register(context: any, credentials: any) {
        return new Promise((resolve, reject) => {
            context.commit('registerRequest');
            ApiService.post('auth/register', credentials)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit('setError', response.data.errors);
                    reject(response);
                });
        });
    },
    // checkAuth(context: any) {
    //     const token = JwtService.getToken();
    //     if (!!token) {
    //         // ApiService.setHeader();
    //         context.commit('setAuth', token);
    //     } else {
    //         context.commit('purgeAuth');
    //     }
    // },
    // updateUser(context, payload) {
    //     const { email, username, password, image, bio } = payload;
    //     const user = {
    //         email,
    //         username,
    //         bio,
    //         image
    //     };
    //     if (password) {
    //         user.password = password;
    //     }
    //
    //     return ApiService.put("user", user).then(({ data }) => {
    //         context.commit(SET_AUTH, data.user);
    //         return data;
    //     });
    // }
};

const mutations = {
    authRequest(state: { status: any; }) {
        state.status = { loggingIn: true };
    },
    registerRequest(state: { status: any; }) {
        state.status = { registering: true };
    },
    setError(state: { errors: any; }, error: string) {
        state.errors = error;
    },
    setAuth(state: { status: {}; isAuthenticated: boolean;
                     user: { name: string; email: string; role: string; token: string; };
                     errors: {}; }, jwtToken: string) {
        const userData = JSON.parse(atob(jwtToken.split('.')[1]));
        state.user = {
            name: userData.unique_name,
            email: userData.email,
            role: userData.role,
            token: jwtToken,
        };
        state.isAuthenticated = true;
        state.status = { loggedIn: true};
        state.errors = {};
        JwtService.saveToken(jwtToken);
    },
    purgeAuth(state: { status: {}; isAuthenticated: boolean; user: {}; errors: {}; }) {
        state.isAuthenticated = false;
        state.status = {};
        state.user = {};
        state.errors = {};
        JwtService.destroyToken();
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

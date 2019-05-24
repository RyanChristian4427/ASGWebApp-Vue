import ApiService from '@/plugins/api.axios';

const state = {
    all: {},
};

const getters = {
    currentCandidates(state: { all: any; }) {
        return state.all;
    },
};

const actions = {
    fetchCandidates(context: any) {
        return new Promise((resolve) => {
            ApiService.get('user/getAllCandidates')
                .then(({ data }) => {
                    context.commit('getAllSuccess', data);
                    resolve(data);
                })
                .catch(({ response }) => {
                    if (response !== undefined) {
                        context.commit('getAllFailure', response.data.errors);
                    } else {
                        context.commit('getAllFailure', 'Unknown Error');
                    }
                });
        });
    },
};

const mutations = {
    getAllRequest(state: { all: { loading: boolean; }; }) {
        state.all = { loading: true };
    },
    getAllSuccess(state: { all: { items: any; }; }, candidates: any) {
        state.all = { items: candidates };
    },
    getAllFailure(state: { all: { error: any; }; }, error: any) {
        state.all = { error };
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

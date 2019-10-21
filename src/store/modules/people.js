import Vue from 'vue';
import {getPerson,getPage} from '../services/people';

const state = {
    all: {},
    loading: false,
    next: null
};

const getters = {
    all: () => state.all,
    loading: () => state.loading,
    person: () => (id) => state.all[id] || false
};

const mutations = {
    add(state, item) {
        const id = item.url.match(/(?<=people\/)(\d*)(?=\/$)/g)[0];

        item.starships = item.starships.map(s => s.match(/(?<=starships\/)(\d*)(?=\/$)/g)[0]);
        item.films = item.films.map(s => s.match(/(?<=films\/)(\d*)(?=\/$)/g)[0]);

        Vue.set(state.all, id, item);
    },
    loading(state, loading){
        state.loading = loading;
    },
    next(state, next){
        state.next = next
    }
};

const actions = {
    all({commit}, payload){
        for (let item of payload)
            commit('add', item);
    },
    async fetch({commit, dispatch}, page = 1){
        commit('loading', true);

        const resp = await getPage(page);
        if(resp) {
            dispatch('all', resp.results);
            if(resp.next){
                dispatch('fetch', resp.next.match(/(?<=\?page=)(\d*)(?=$)/g)[0])
            }else{
                commit('loading', false);
            }
        }

    },
    async getPerson({commit}, id){
        commit('loading', true);

        const resp = await getPerson(id);
        if(resp)
            commit('add', resp);

        commit('loading', false);
    }

};

export default {namespaced: true, state, getters, mutations, actions};
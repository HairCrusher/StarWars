import Vue from 'vue';
import {getFilm} from '../services/films';

const state = {
    all: {}
};

const getters = {
    get: () => (id) => state.all[id] || false
};

const mutations = {
    add(state, item){
        const id = item.url.match(/(?<=films\/)(\d*)(?=\/$)/g)[0];

        Vue.set(state.all, id, item);
    }
};

const actions = {
    async load({commit}, id) {
        const resp =  await getFilm(id);
        if(resp)
            commit('add', resp)
    }
};

export default {namespaced:true, state, getters, mutations, actions};
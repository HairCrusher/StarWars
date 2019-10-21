import Vue from 'vue';
import {getSShip} from '../services/starships';

const state = {
    all: {}
};

const getters = {
    get: () => (id) => state.all[id] || false
};

const mutations = {
    add(state, item){
        const id = item.url.match(/(?<=starships\/)(\d*)(?=\/$)/g)[0];

        Vue.set(state.all, id, item);
    }
};

const actions = {
    async load({commit}, id) {
        const resp =  await getSShip(id);
        if(resp)
            commit('add', resp)
    }
};

export default {namespaced:true, state, getters, mutations, actions};
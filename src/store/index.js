import Vue from 'vue';
import Vuex from 'vuex';

import people from "./modules/people";
import starShips from "./modules/starships";
import films from "./modules/films";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        people,
        starShips,
        films
    }
});
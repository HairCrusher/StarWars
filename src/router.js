import Vue from 'vue';
import Router from 'vue-router';

import PeopleList from "./components/PeopleList";
import Person from "./components/Person";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'peopleList',
            component: PeopleList
        },
        {
            path: '/person/:id',
            name: 'person',
            component: Person
        }
    ]
});
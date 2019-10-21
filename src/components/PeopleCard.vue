<template>
    <div class="card mb-3">
        <router-link :to="{name: 'person', params: {id}}">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
            </div>
        </router-link>
        <ul v-if="item.starships.length" class="list-group list-group-flush">
            <li class="list-group-item"><b>Ships</b></li>
            <li v-for="(shipID, i) in item.starships" class="list-group-item" :key="i">
                <span>{{starShip(shipID).name || 'loading...'}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "PeopleCard",
        props: {
            item: {
                type: Object
            },
            id: {
                type: Number
            }
        },
        computed: {
            ...mapGetters({
                starShip: 'starShips/get'
            })
        },
        mounted() {
            this.item.starships.forEach(shipID => {
                if(!this.starShip(shipID))
                    this.$store.dispatch('starShips/load', shipID);
            });
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        background-color: #dcdce5;
    }

    h5 {
        color: #218cd0;
    }
</style>
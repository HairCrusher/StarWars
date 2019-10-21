<template>
    <div class="row pt-3">
        <transition-group name="list" tag="div" class="col-md-4">
            <div v-for="(item, i) in list" :key="i">
                <PeopleCard class="mb-3" v-if="i % 3 === 1" :item="item" :id="parseInt(i)"/>
            </div>
        </transition-group>
        <transition-group name="list" tag="div" class="col-md-4">
            <div v-for="(item, i) in list" :key="i">
                <PeopleCard class="mb-3" v-if="i % 3 === 2" :item="item" :id="parseInt(i)"/>
            </div>
        </transition-group>
        <transition-group name="list" tag="div" class="col-md-4">
            <div v-for="(item, i) in list" :key="i">
                <PeopleCard class="mb-3" v-if="i % 3 === 0" :item="item" :id="parseInt(i)"/>
            </div>
        </transition-group>
        <div v-if="loading" class="col-md-12" key="loading">
            <div class="loader">
                <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Darth_Vader_-_correct_file.gif"
                     alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import PeopleCard from "./PeopleCard";

    export default {
        name: "PeopleList",
        components: {
            PeopleCard
        },
        computed: mapGetters({
            list: 'people/all',
            loading: 'people/loading'
        }),
        mounted() {
            this.$store.dispatch('people/fetch');
        }
    }
</script>

<style lang="scss" scoped>
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }

    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
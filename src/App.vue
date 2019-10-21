<template>
    <div id="app">
        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'app',
        computed: mapGetters({
            loading: 'people/loading'
        }),
    }
</script>

<style lang="scss">
    #app {
        background: url("https://www.toptal.com/designers/subtlepatterns/patterns/beanstalk-dark.png");
        min-height: 100vh;
    }

    .loader {
        position: relative;
        height: 100vh;

        img {
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            top: 0;
            bottom: 0;
            max-height: 80%;
        }
    }

    a:hover {
      text-decoration: none;
    }

</style>

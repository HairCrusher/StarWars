<template>
    <div v-if="person" class="row justify-content-center pt-3">
        <div class="col-md-3">
            <div class="card info">
                <div class="card-body">
                    <h5 class="card-title">{{person.name}}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between">Height: <span>{{person.height}}</span></li>
                    <li class="list-group-item d-flex justify-content-between">Mass: <span>{{person.mass}}</span></li>
                    <li class="list-group-item d-flex justify-content-between">Hair color: <span>{{person.hair_color}}</span></li>
                    <li class="list-group-item d-flex justify-content-between">Skin color: <span>{{person.skin_color}}</span></li>
                    <li class="list-group-item d-flex justify-content-between">Eye color: <span>{{person.eye_color}}</span></li>
                    <li class="list-group-item d-flex justify-content-between">Birth year: <span>{{person.birth_year}}</span></li>
                    <li class="list-group-item d-flex justify-content-between">Gender: <span>{{person.gender}}</span></li>
                </ul>
            </div>
        </div>
        <div class="col-md-9 mb-3">
            <div class="card">
                <div class="card-body">
                    <p class="card-title"><b>Films</b></p>
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="(filmID, i) in person.films" class="list-group-item" :key="i">
                        <h6><b>{{film(filmID).title || 'loading...'}}</b></h6>
                        <p>{{film(filmID).opening_crawl}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="loader">
            <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Darth_Vader_-_correct_file.gif"
                 alt="">
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Person",
        computed: {
            ...mapGetters({
                getPerson: 'people/person',
                film: 'films/get'
            }),
            id: function() {
                return this.$route.params.id;
            },
            person: function () {
                return this.getPerson(this.id);
            }
        },
        mounted() {
            if(!this.person)
                this.$store.dispatch('people/getPerson', this.id);
            else
                this.person.films.forEach(filmID => {
                    this.$store.dispatch('films/load', filmID);
                });
        },
        watch: {
            person(newVal){
                if(newVal) {
                    newVal.films.forEach(filmID => {
                       this.$store.dispatch('films/load', filmID);
                    });
                }
            }
        }

    }
</script>

<style scoped>
    .info {
        position: sticky;
        top: 10px;
    }
</style>
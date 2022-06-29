<template>
    <div class="cdMainContainer">

        <div class="container py-5">

            <div class="pb-5">
                <h1>Ciao, {{userName}}!</h1>
            </div>

            <div v-if="state.searchText === ''" class="alert alert-dark" role="alert">
                Inizia una ricerca per visualizzare i film e le serie tv desiderate!
            </div>

            <div v-else>

                <!-- Movies List -->
                <div id="moviesList">
                    <h3 class="mb-5">Risultati per film:</h3>

                    <div v-if="state.moviesArray.length === 0">
                        <div class="alert alert-danger" role="alert">
                            Spiacente, non ci sono film con i dati ricercati!
                        </div>
                    </div>

                    <div class="d-flex cdCardContainerOverflow" v-else>
                        <div v-for="(movie, i) in state.moviesArray" :key="i">
                            <MovieCard :movie="movie" />
                        </div>
                    </div>
                </div>

                <!-- Series List -->
                <div id="seriesList">
                    <h3 class="my-5">Risultati per serie tv:</h3>

                    <div v-if="state.seriesArray.length === 0">
                        <div class="alert alert-danger" role="alert">
                            Spiacente, non ci sono film con i dati ricercati!
                        </div>
                    </div>

                    <div class="d-flex cdCardContainerOverflow" v-else>
                        <div v-for="(serie, i) in state.seriesArray" :key="i">
                            <SerieCard :serie="serie" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<!-- ------------------------------------------------ -->

<script>

// Import
import { state } from "../store";
import {fetchGenres} from "../store";
import MovieCard from "./MovieCard.vue";
import SerieCard from "./SerieCard.vue";

// Export
export default {

    // Name
    name: "TheMain",

    // Data
    data(){
        return {
            userName: "",
        }
    },

    // Components
    components: { MovieCard, SerieCard },

    // Computed
    computed: {
        state() {
            return state;
        }
    },

    // Methods
    methods: {
        getUserName(){
            this.userName = prompt("Come ti chiami?");
        }
    },

    // Mounted
    mounted(){
        this.getUserName();
        fetchGenres();
    }

}
</script>

<!-- ------------------------------------------------ -->

<style lang="scss">

.cdMainContainer {
    background-color: #1e1e1e;
    color: #FFFFFF;
    flex-grow: 1;
    overflow: auto;

    .cdCardContainerOverflow {
        overflow-x: auto;
    }
}

</style>
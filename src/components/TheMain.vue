<template>
    <div>

        <div class="container py-5">

            <div v-if="state.searchText === ''" class="alert alert-dark" role="alert">
                Inizia una ricerca per visualizzare i film e le serie tv desiderate!
            </div>

            <div v-else>

                <!-- Movies List -->
                <div id="moviesList">
                    <h3 class="mb-5">Risultati per film:</h3>
                    <ul>
                        <li v-for="(movie, i) in state.moviesArray" :key="i">
                            <MovieCard :movie="movie" />
                        </li>
                    </ul>
                </div>

                <!-- Series List -->
                <div id="seriesList">
                    <h3 class="my-5">Risultati per serie tv:</h3>
                    <ul>
                        <li v-for="(serie, i) in state.seriesArray" :key="i">
                            <SerieCard :serie="serie" />
                        </li>
                    </ul>
                </div>

            </div>

        </div>

    </div>
</template>

<!-- ------------------------------------------------ -->

<script>

// Import
import { state } from "../store";
import MovieCard from "./MovieCard.vue";
import SerieCard from "./SerieCard.vue";

// Export
export default {

    // Name
    name: "TheMain",

    // Components
    components: { MovieCard, SerieCard },

    // Computed
    computed: {
        state() {
            return state;
        }
    },

}
</script>

<!-- ------------------------------------------------ -->

<style lang="scss">

</style>
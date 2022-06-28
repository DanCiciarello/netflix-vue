<template>
    <div>

        <div class="container py-5">
            <!-- Movies List -->
            <div id="moviesList">
                <ul>
                    <li v-for="(movie, i) in state.moviesArray" :key="i">
                        <MovieCard :movie="movie"/>
                    </li>
                </ul>
            </div>
    
            <!-- Series List -->
            <div id="seriesList">
    
            </div>
        </div>

    </div>
</template>

<!-- ------------------------------------------------ -->

<script>

// Import
import { state } from "../store";
import MovieCard from "./MovieCard.vue";

// Export
export default {

    // Name
    name: "TheMain",

    // Components
    components: { MovieCard },

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
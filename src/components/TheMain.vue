<template>
    <div>

        <!-- Movies List -->
        <div id="moviesList">
            <ul>
                <li v-for="(movie, i) in state.moviesArray" :key="i">
                    {{movie.original_title}}
                </li>
            </ul>
        </div>

        <!-- Series List -->
        <div id="seriesList">

        </div>

    </div>
</template>

<!-- ------------------------------------------------ -->

<script>

// Import
import { fetchData } from "../store";
import { state } from "../store";

// Export
export default {
    name: "TheMain",

    // Computed
    computed: {
        state() {
            return state;
        }
    },

    // Mounted
    mounted() {
        fetchData("movie", "back to the future");
    }

}
</script>

<!-- ------------------------------------------------ -->

<style>

</style>
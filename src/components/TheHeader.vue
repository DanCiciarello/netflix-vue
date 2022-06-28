<template>
    <nav class="cdNavbar">
        <div class="container d-flex align-items-center justify-content-between">

            <!-- Logo -->
            <div>
                <span>Boolflix</span>
            </div>

            <!-- Search bar -->
            <div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Cerca un titolo..." aria-describedby="button-search" v-model="searchText" @keyup.enter="onSearchClick">
                    <button class="btn btn-outline-light" type="button" id="button-search" @click="onSearchClick">Cerca</button>
                </div>
            </div>

        </div>
    </nav>
</template>

<!-- ------------------------------------------------ -->

<script>

// Import
import { fetchData } from "../store";
import { state } from "../store";

// Export
export default {
    
    // Name
    name: "TheHeader",

    // Data
    data(){
        return {
            searchText: "",
        }
    },

    // Methods
    methods: {
        onSearchClick(){
            state.searchText = this.searchText;
            fetchData("movie");
            fetchData("tv");
        },
    },

    // Mounted
    mounted() {

    },

}
</script>

<!-- ------------------------------------------------ -->

<style lang="scss" scoped>

@import "../assets/scss/variables";

.cdNavbar {
    padding: 20px 0;
    background-color: $dark;
    color: #FFFFFF
}

</style>
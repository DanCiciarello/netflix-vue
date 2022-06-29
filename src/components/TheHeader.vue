<template>
    <nav class="cdNavbar">
        <div class="container d-flex align-items-center justify-content-between">

            <!-- Logo -->
            <div>
                <span class="cdLogo">Boolflix</span>
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
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.cdNavbar {
    padding: 5px 0;
    background-color: $dark;
    color: #FFFFFF;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    .cdLogo {
        font-family: 'Bebas Neue', cursive;
        color: red;
        font-size: 50px;
    }
}

</style>
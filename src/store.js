// Import
import Vue from "vue";
import axios from "axios";

// ------------------------------------------------

// State object
export const state = Vue.observable({
    // API basic info
    apiKey: "bc0127f1faf5f540fecdbbf665559139",
    apiLanguage: "it-IT",
    // API actions
    apiSearch: "https://api.themoviedb.org/3/search/",
    // General
    moviesArray: [],
    seriesArray: [],
    // Search
    searchText: "",
});

// ------------------------------------------------

// Functions

export function fetchData(searchType) {
    axios.get(state.apiSearch + searchType, {
        params: {
            api_key: state.apiKey,
            language: state.apiLanguage,
            query: state.searchText,
        }
    })
    .then((resp) => {
        if (searchType === "movie") {
            state.moviesArray = resp.data.results;
        } else if (searchType === "tv") {
            state.seriesArray = resp.data.results;
        }
    })
}
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
    apiGenres: "https://api.themoviedb.org/3/genre/movie/list",
    // General
    moviesArray: [],
    seriesArray: [],
    genresArray: [],
    // Search
    searchText: "",
});

// ------------------------------------------------

// Functions

export function fetchData(searchType) {

    state.moviesArray = [];
    state.seriesArray = [];

    axios
    .get(state.apiSearch + searchType, {
        params: {
            api_key: state.apiKey,
            language: state.apiLanguage,
            query: state.searchText,
        }
    })
    .then((resp) => {
        if (searchType === "movie") {
            // Valorizzo l'array dei film
            state.moviesArray = resp.data.results;
            
            // for(let i = 0; i < state.moviesArray.length; i++){
                
            //     for(let n = 0; n < state.moviesArray[i].genre_ids[n].length; n++){
            //         let genreToFind = state.moviesArray[i].genre_ids[n];
            //         let genreFounded = state.genresArray.id.find(genreToFind);
                    
            //     }
            // }

        } else if (searchType === "tv") {
            state.seriesArray = resp.data.results;
        }
    })
}

export function fetchGenres(){
    axios
    .get(state.apiGenres, {
        params: {
            api_key: state.apiKey,
            language: state.apiLanguage,
        }
    })
    .then((resp) => {
        state.genresArray = resp.data.genres;
    })
}
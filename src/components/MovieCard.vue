<template>
    <div>
        <img :src="getPosterUrl(movie.poster_path)" :alt="'Image of' + movie.title" />
        <p>Titolo: {{movie.title}}</p>
        <p>Titolo originale: {{movie.original_title}}</p>
        <p>Lingua originale: <img :src="getImageUrl(movie.original_language)" width="20" height="auto"/></p>
        <p>Voto: {{movie.vote_average}}</p>
        <hr>
    </div>
</template>

<!-- ------------------------------------------------ -->

<script>

// Export
export default {

    // Name
    name: "MovieCard",

    // Props
    props: {
        movie: Object,
    },

    // Methods
    methods: {
        getImageUrl(id){
            try {
                return require("../assets/img/flags/4x3/" + id + ".svg");}
            catch {
                return require("../assets/img/flags/4x3/xx.svg");
            }
        },
        getPosterUrl(id){
            if(this.movie.poster_path !== null) {
                return ("https://image.tmdb.org/t/p/w185/" + id);
            } else {
                return ("https://via.placeholder.com/185/");
            }
        }
    }
}
</script>

<!-- ------------------------------------------------ -->

<style lang="scss">

</style>
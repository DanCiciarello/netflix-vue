<template>
    <div>
        <img :src="getPosterUrl(movie.poster_path)" :alt="'Image of' + movie.title" />
        <p>Titolo: {{movie.title}}</p>
        <p>Titolo originale: {{movie.original_title}}</p>
        <p>Lingua originale: <img :src="getImageUrl(movie.original_language)" width="20" height="auto"/></p>
        <span class="pe-2">Voto:</span>
        <i v-for="(star, i) in getVote(movie.vote_average, 'full')" :key="i" class="fa-solid fa-star"></i>
        <i v-for="(star, i) in getVote(movie.vote_average, 'empty')" :key="i + 5" class="fa-regular fa-star"></i>
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
                return ("https://image.tmdb.org/t/p/w342/" + id);
            } else {
                return require("../assets/img/no_postthumb.jpeg");
            }
        },
        getVote(element, type){
            if(type === "full"){
                const stars = Math.round(element / 2);
                return stars;
            } else if (type === "empty") {
                const stars = 5 - Math.round(element / 2);
                return stars;
            }
        }
    }
}

</script>

<!-- ------------------------------------------------ -->

<style lang="scss">

</style>
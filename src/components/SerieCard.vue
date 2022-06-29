<template>
    <div>
        <img :src="getPosterUrl(serie.poster_path)" :alt="'Image of' + serie.name" />
        <p>Titolo: {{serie.name}}</p>
        <p>Titolo originale: {{serie.original_name}}</p>        
        <p>Lingua originale: <img :src="getImageUrl(serie.original_language)" width="20" height="auto"/></p>
        <span class="pe-2">Voto:</span>
        <i v-for="(star, i) in getVote(serie.vote_average, 'full')" :key="i" class="fa-solid fa-star"></i>
        <i v-for="(star, i) in getVote(serie.vote_average, 'empty')" :key="i + 5" class="fa-regular fa-star"></i>
        <hr>
    </div>
</template>

<!-- ------------------------------------------------ -->

<script>
export default {

    // Name
    name: "SerieCard",

    // Props
    props: {
        serie: Object,
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
            if(this.serie.poster_path !== null) {
                return ("https://image.tmdb.org/t/p/w185/" + id);
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

<style>

</style>
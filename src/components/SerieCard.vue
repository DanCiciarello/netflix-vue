<template>
    <div>
        <p>Titolo: {{serie.name}}</p>
        <p>Titolo originale: {{serie.original_name}}</p>        
        <p>Lingua originale: <img :src="getImageUrl(serie.original_language)" width="20" height="auto"/></p>
        <p>Voto: {{serie.vote_average}}</p>
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
        }
    }

}
</script>

<!-- ------------------------------------------------ -->

<style>

</style>
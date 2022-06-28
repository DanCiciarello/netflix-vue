<template>
    <div>
        <p>Titolo: {{movie.title}}</p>
        <p>Titolo originale: {{movie.original_title}}</p>
        <p>Lingua originale: {{movie.original_language}}</p>
        <p>Voto: {{movie.vote_average}}</p>
        <hr>
    </div>
</template>

<!-- ------------------------------------------------ -->

<script>
export default {

    // Name
    name: "MovieCard",

    // Props
    props: {
        movie: Object,
    }
}
</script>

<!-- ------------------------------------------------ -->

<style lang="scss">

</style>
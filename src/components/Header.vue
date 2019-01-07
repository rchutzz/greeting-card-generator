<template>
    <div>
        <h1 class="text-center">Greeting Card Generator</h1>
        <ul class="nav justify-content-center">
            <li class="nav-item"><a class="nav-link" @click="pageSelected='cardFront'">Front</a></li>
            <li class="nav-item"><a class="nav-link" @click="pageSelected='cardInsideLeft'">Inside Left</a></li>
            <li class="nav-item"><a class="nav-link" @click="pageSelected='cardInsideRight'">Inside Right</a></li>
            <li class="nav-item"><a class="nav-link" @click="pageSelected='cardBack'">Back</a></li>
        </ul>
        <hr>
        <cc-card-progress></cc-card-progress>
    </div>
</template>

<script>
    import CardProgress from './card/CardProgress.vue'

    export default {
        data: function() {
            return {
                pageSelected: ''
            }
        },
        watch: {
            pageSelected: function() {
                this.$emit('pageWasChanged', this.pageSelected)
            }
        },
        components: {
            ccCardProgress: CardProgress
        }
    }
</script>

<style>
    h1 {
        margin-top: 10px;
    }
    li {
        margin: 0px 5px;
    }
</style>

// Header component that lets users choose which part of the card to render alongside the progress bar
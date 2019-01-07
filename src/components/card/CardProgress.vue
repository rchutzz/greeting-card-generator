<template>
    <div class="row">
        <div class="col-sm-12">
            <p>Completed: <span id="counter">0</span>/4:</p>
            <progress value="0" max="100" id="cardProgress"></progress>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../../main.js'

    export default {
        created: function() {
            EventBus.$on('mark-as-completed', function(data) {
                if (!data) {
                    document.getElementById('counter').innerText++;
                    document.getElementById('cardProgress').value+=25;
                } else {
                    document.getElementById('counter').innerText--;
                    document.getElementById('cardProgress').value-=25;
                }
            })
        }
    }
</script>

<style scoped>
    progress {
        width: 100%;
        background: green;
    }
    progress[value]::-webkit-progress-value {
        background-image: -webkit-linear-gradient(-45deg,
        transparent 33%, rgba(0, 0, 0, .1) 33%,
        rgba(0, 0, 0, .1) 66%, transparent 66%),
        -webkit-linear-gradient(top,
        rgba(255, 255, 255, .25),
        rgba(0, 0, 0, .25)),
        -webkit-linear-gradient(left, rgb(204, 184, 0), rgb(84, 255, 68));

        border-radius: 2px;
        background-size: 35px 20px,
        100% 100%,
        100% 100%;
    }
</style>

// Component responsible for grabbing completed sections and rendering the number of total complete card views 
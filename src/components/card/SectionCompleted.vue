<template>
    <div class="row">
        <div class="form-check form-check-inline">
            <div class="form-check-label">
                <input type="checkbox" class="form-check-input" v-model="checked" @click="sectionCompleted"> Mark section Completed
            </div>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../../main.js'

    export default {
        data: function() {
            return {
                checked: ''
            }
        },
        methods: {
            sectionCompleted: function() {
                EventBus.$emit('mark-as-completed', this.checked)
            }
        }
    }
</script>
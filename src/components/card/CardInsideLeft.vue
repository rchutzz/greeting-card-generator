<template>
    <div class="row">
        <div class="col-sm-6 card edit-area" id="leftColor">
            <cc-text-input @displayTextChanged="textBoxValue1 = $event"></cc-text-input>
            <cc-section-completed></cc-section-completed>
        </div>
        <div class="col-sm-6 card card-display">
            <cc-text-output :displayText="textBoxValue1" :containerHeight="750"></cc-text-output>
        </div>
    </div>
</template>

<script>
    import TextInput from './TextInput.vue'
    import TextOutput from './TextOutput.vue'
    import SectionCompleted from './SectionCompleted.vue'

    export default {
        data: function() {
            return {
                textBoxValue1: ''
            }
        },
        components: {
            ccTextInput: TextInput,
            ccTextOutput: TextOutput,
            ccSectionCompleted: SectionCompleted
        }
    }
</script>

<style>

</style>
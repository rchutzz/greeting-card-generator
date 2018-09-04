<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <cc-text-input @displayTextChanged="textBoxValue1 = $event"></cc-text-input>
            <cc-text-input @displayTextChanged="textBoxValue2 = $event"></cc-text-input>
            <cc-text-input @displayTextChanged="textBoxValue3 = $event"></cc-text-input>
        </div>
        <div class="col-sm-6 card card-display">
            <cc-text-output :displayText="textBoxValue1" :containerHeight="240"></cc-text-output>
            <cc-text-output :displayText="textBoxValue2" :containerHeight="240"></cc-text-output>
            <cc-text-output :displayText="textBoxValue3" :containerHeight="240"></cc-text-output>
        </div>
    </div>
</template>

<script>
import TextInput from './TextInput.vue'
import TextOutput from './TextOutput.vue'

export default {
    data: function() {
        return {
            textBoxValue1: '',
            textBoxValue2: '',
            textBoxValue3: ''
        }
    },
    components: {
        ccTextInput: TextInput,
        ccTextOutput: TextOutput
    }
}
</script>

<style>

</style>
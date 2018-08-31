<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <cc-text-input @displayTextChanged="textBoxValue1 = $event"></cc-text-input>
            <cc-text-input @displayTextChanged="textBoxValue2 = $event"></cc-text-input>
            <cc-text-input @displayTextChanged="textBoxValue3 = $event"></cc-text-input>
       {{ textBoxValue1 }}
       {{ textBoxValue2 }}
       {{ textBoxValue3 }}
        </div>
        <div class="col-sm-6 card card-display">
            
        </div>
    </div>
</template>

<script>
import TextInput from './TextInput.vue'

export default {
    data: function() {
        return {
            textBoxValue1: '',
            textBoxValue2: '',
            textBoxValue3: '',
        }
    },
    components: {
        ccTextInput: TextInput
    }
}
</script>

<style>
    .edit-area {
        background: #d2f9f9;
        padding: 20px;
        height: 800px;
    }

    .card-display {
        height: 800px;
        padding: 20px;
    }
</style>
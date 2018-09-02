<template>
    <div class="row">
        <div class="col-sm-6 card edit-area">
            <cc-text-input @displayTextChanged="textBoxValue1 = $event"></cc-text-input>
            <cc-image-upload @displayImageChanged="imageName = $event"></cc-image-upload><hr>
            <cc-text-input @displayTextChanged="textBoxValue2 = $event"></cc-text-input>
            <cc-text-input @displayTextChanged="textBoxValue3 = $event"></cc-text-input>
        </div>
        <div class="col-sm-6 card card-display">
            <cc-text-output :displayText="textBoxValue1" :containerHeight="150"></cc-text-output>
            <cc-image-output :displayImage="imageName" :containerHeight="350" :clearImageProp="clearImage"></cc-image-output>
            <cc-text-output :displayText="textBoxValue2" :containerHeight="150"></cc-text-output>
            <cc-text-output :displayText="textBoxValue3" :containerHeight="150"></cc-text-output>
        </div>
    </div>
</template>

<script>
import TextInput from './TextInput.vue'
import TextOutput from './TextOutput.vue'
import ImageUpload from './ImageUpload.vue'
import ImageOutput from './ImageOutput.vue'

export default {
    data: function() {
        return {
            textBoxValue1: '',
            textBoxValue2: '',
            textBoxValue3: '',
            imageName: ''
        }
    },
    methods: {
        clearImage: function() {
            if (this.imageName !== '') {
                this.imageName = 'beach.jpeg'
            }
        }
    },
    components: {
        ccTextInput: TextInput,
        ccTextOutput: TextOutput,
        ccImageUpload: ImageUpload,
        ccImageOutput: ImageOutput
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
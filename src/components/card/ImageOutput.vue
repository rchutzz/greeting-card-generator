<template>
  <div class="img-container" :style="styleObject" @mouseover="showOptions = true" @mouseleave="showOptions = false">

    <button type="button" class="btn btn-outline-danger btn-sm" v-show="showOptions" @click="clearImageProp">Remove Image</button>
    <img id="outputImage">
  </div>
</template>

<script>
import Firebase from 'firebase'

  export default {
    props: {
      displayImage: {
        type: String
      },
      containerHeight: {
        type: Number,
        default: 200
      },
      clearImageProp: Function
    },
    data: function() {
      return {
        showOptions: false
      }
    },
    watch: {
      displayImage: function() {
        let storageRef = Firebase.storage().ref('user_uploads/' + this.displayImage);
        storageRef.getDownloadURL().then(function(url) {
          var img = document.getElementById('outputImage');
          img.src = url;
        })
      }
    },
    computed: {
      styleObject: function() {
        return {
          height: this.containerHeight + 'px'
        }
      }
    }
  }
</script>

<style>
  .img-container {
    border: 1px dotted grey;
    overflow: hidden;
    margin: 5px 0;
  }

  button {
    position: absolute;
    z-index: 1;
  }
</style>
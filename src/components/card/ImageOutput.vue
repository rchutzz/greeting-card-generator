<template>
  <div class="img-container" :style="styleObject">
    <img id="outputImage"> {{ displayImage }}
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
</style>
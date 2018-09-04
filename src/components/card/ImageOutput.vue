<template>
  <div class="img-container" :style="styleObject" @mouseover="showOptions = true" @mouseleave="showOptions = false">
    <transition name="scale">
      <button type="button" class="btn btn-outline-danger btn-sm" v-show="showOptions" @click="clearImageProp">Remove Image</button>
    </transition>
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
          setDraggable();
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


function setDraggable() {
  $('#outputImage').draggable();
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

  img {
    width: 130%;
  }

  .scale-enter-active {
    animation: scale-in 0.5s;
  }

  .scale-leave-active {
    animation: scale-out 0.5s;
  }

  @keyframes scale-in {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
  }

  @keyframes scale-out {
    0% { transform: scale(1); }
    100% { transform: scale(0); }
  }

</style>
<template>
  <div class="img-container">
    <img id="outputImage"> {{ displayImage }}
  </div>
</template>

<script>
  export default {
    props: {
      displayImage: {
        type: String
      },
      containerHeight: {
        type: Number,
        default: 200
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
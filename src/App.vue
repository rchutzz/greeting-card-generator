<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header></nav-header>
        <card-front></card-front>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import CardFront from './components/card/CardFront.vue'

export default {
  components: {
    navHeader: Header,
    cardFront: CardFront
  }
}
</script>

<style>
  body {
    font-family: Verdana, Geneva, sans-serif;
    color: #333;
  }

  a {
    cursor: pointer
  }
</style>

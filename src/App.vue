<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>
        
        <div id="instruction" class="text-center italic">
          <div class="row">
            <div class="col-sm-6">
              <p><em>&larr; Make changes in the edit card area below</em></p>
            </div>
            <div class="col-sm-6">
              <p><em>And they will show on the card! &larr;</em></p>
            </div>
          </div>
        </div>
        <transition name="fade" 
                    mode="out-in"
                    @enter="enter">
          <keep-alive>
            <component v-bind:is="currentPage"></component>
          </keep-alive>
        </transition>

        <cc-footer>
          <p class="text-center" slot="app-name">&copy; {{ appName }}</p>
          <nav>
            <ul class="nav justify-content-center">
              <li class="nav-item"><a class="nav-link">Home</a></li>
              <li class="nav-item"><a class="nav-link">About Us</a></li>
              <li class="nav-item"><a class="nav-link">Contact Us</a></li>
            </ul>
          </nav>
        </cc-footer>
      </div>
    </div>
  </div>
</template>

<script>
import FirebaseConfig from './config/firebaseConfig.js'
import Header from './components/Header.vue'
import CardFront from './components/card/CardFront.vue'
import CardInsideLeft from './components/card/CardInsideLeft.vue'
import CardInsideRight from './components/card/CardInsideRight.vue'
import CardBack from './components/card/CardBack.vue'
import Footer from './components/Footer.vue'

export default {
  data: function() {
    return {
      currentPage: 'cardFront',
      appName: 'Creative Cards'
    }
  },
  methods: {
    enter: function(el, document) {
      document.getElementById('instruction').style.display = "none";
      done();
    }
  },
  components: {
    navHeader: Header,
    cardFront: CardFront,
    cardInsideLeft: CardInsideLeft,
    cardInsideRight: CardInsideRight,
    cardBack: CardBack,
    ccFooter: Footer
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

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave.active {
      transition: opacity .5s;
  }
</style>

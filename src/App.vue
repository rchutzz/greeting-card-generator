<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <nav-header @pageWasChanged="currentPage = $event"></nav-header>
        
        <div id="instruction" class="text-center italic">
          <div class="row">
            <div class="col-sm-6">
              <p><em>&#8595; Make changes in the edit card area below</em></p>
            </div>
            <div class="col-sm-6">
              <p><em>And they will show on the card! &#x21B4;</em></p>
            </div>
          </div>
        </div>
            <transition appear
                        appear-active-class="custom-appaer-active-class"
                        name="fade" 
                        mode="out-in"
                        @enter="enter">
              <keep-alive>
                <div class="cardCC">
                <component v-bind:is="currentPage"></component>
                </div>
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
    enter: function(el) {
      document.getElementById('instruction').style.display = "none";
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
    font-family: 'Passion One', cursive;
    color: #182628;
    background-image: url('https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-0.3.5&s=69f63bf219eac4162a5cfdfb5a94f856&auto=format&fit=crop&w=1950&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 19px;
  }

  .cardCC {
    padding: 10px 0px;
    position: relative;
  }

  .cardCC:before, .cardCC:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 25px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 5000px;
    background: #777;
    -webkit-box-shadow: 0 35px 20px #777;
    -moz-box-shadow: 0 35px 20px #777;
    box-shadow: 0 35px 20px #777;
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
    -o-transform: rotate(-8deg);
    -ms-transform: rotate(-8deg);
    transform: rotate(-8deg);
  }

  .cardCC:after {
    -webkit-transform: rotate(8deg);
    -moz-transform: rotate(8deg);
    -o-transform: rotate(8deg);
    -ms-transform: rotate(8deg);
    transform: rotate(8deg);
    right: 10px;
    left: auto;
  }

  a {
    cursor: pointer
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active {
      transition: opacity .5s;
  }

  .custom-appaer-active-class {
    transition: opacity 1s;
  }

  .fade-leave-active {
    transition: opacity .5s;
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

import Vue from 'vue'
import App from './App.vue'

var component1 = {
  template: '<p>Component 1!!!</p>'
}

var component2 = {
  template: '<p>Component 2</p>'
}

new Vue({
  el: '#app',
  components: {
    'component1': component1
  }
  // render: h => h(App)
})

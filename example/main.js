import Vue from 'vue'
import App from './component'

const vm = new Vue({
  name: 'app',
  el: '#root',
  render (h) {
    return <App />
  }
})
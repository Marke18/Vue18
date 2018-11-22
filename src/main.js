// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//  il commento sotto disattiva il warning per la riga sottostante
// eslint-disable-next-line
import CSS from '../style.css'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

/*
new Vue({
  el: '#app-0',
  router,
  components: { App },
  template: '<App/>'
})
*/

// window.test = app1; --> per visualizzare nel modo in cui è detto sul sito
// var app1: va bene, ma non permette le verifiche su console
var app1 = new Vue({
  el: ' #app-1',
  data: {
    message: 'Cambia messaggio',
    pal: 'Stringa palindroma',
    palN: 'Stringa non palindroma',
    myCustomStyles: {
      color: 'blue'
    }
  },
/*  methods: {
    reverseMessage: function () {
      this.messageR = this.message.split('').reverse().join('')
    }
  }, esempio di un metodo */
  computed: {
    messageR: function () {
      return this.message.split('').reverse().join('')
    }
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    showMovies: true,
    showBooks: true,
    movies: [
      'Back to the Future',
      'Matrix',
      'Indipendence Day'
    ],
    drinks: {
      'water': 3,
      'cola': 4,
      'the': 2,
      'milk': 0,
      'beer': -5
    }
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    button: 0,
    button1Dis: false,
    button2Dis: false,
    firstname: 'Tuc',
    lastname: 'Tuc'
  },
  watch: {
    firstname: function (value) {
      this.button1Dis = value.length < 3
      this.button = 0
    },
    lastname: function (value) {
      this.button2Dis = value.length < 3
      this.button = 0
    }
  },
  filters: {
    uppercase: function (text) {
      return text.toUpperCase()
    },
    limit: function (text, length) {
      return text.substring(0, length)
    }
  },
  computed: {
    fullname: {
      get: function () {
        return this.firstname + ' ' + this.lastname
      },
      set: function (value) {
        var parts = value.split(' ')
        this.firstname = parts[0]
        this.lastname = parts[1]
      }
    }
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    people: [
      'Alberto',
      'Marco',
      'Luca',
      'Andrea'
    ]
  },
  methods: {
    shuffle: function() {
      this.people = this.people.sort(function() {
        return .5 - Math.random();
      });
    }
  }
});

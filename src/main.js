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
// eslint-disable-next-line
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
  computed: {
    messageR: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
// eslint-disable-next-line
var app2 = new Vue({
  el: '#app-2',
  data: {
    showDrinks: true,
    people: [
      'Alberto',
      'Marco',
      'Luca',
      'Andrea',
      'Gianfrancioschio'
    ],
    drinks: {
      'water': 3,
      'cola': 4,
      'the': 2,
      'milk': 0,
      'beer': -5
    }
  },
  methods: {
    shuffle: function () {
      this.people = this.people.sort(function () {
        return 0.5 - Math.random()
      })
    }
  }
})
// eslint-disable-next-line
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
// eslint-disable-next-line
var app4 = new Vue({
  el: '#app-4',
  data: {
    coord: '45.64153 10.49866',
    message: 'Scegli il Messaggio'
  },
  computed: {
    coordinate: {
      get: function () {
        var txt = ''
        var l1 = this.coord.length
        var l2 = this.message.length
        if (l1 < l2) {
          for (let i = l1; i < l2; i++) {
            txt += '0'
          }
        }
        return this.coord + txt
      }
    },
    messageL: {
      get: function () {
        var txt = ''
        var l1 = this.coord.length
        var l2 = this.message.length
        if (l1 > l2) {
          for (let i = l2; i < l1; i++) {
            txt += ' '
          }
        }
        return this.message + txt
      }
    }
  },
  methods: {
    converti: function () {
      let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 '
      let txt = this.messageL.split('')
      let coord = this.coord.split('')
      for (let i = 0; i <= this.messageL.length; i++) {
        var id = setInterval(() => {
          if (txt[i] !== coord[i]) {
            coord[i] = chars.charAt(Math.floor(Math.random() * chars.length))
            this.coord = coord.join('')
          } else {
            clearInterval(id)
          }
        }, 70)
      }
    }
  }
})

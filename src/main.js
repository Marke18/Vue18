// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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
var clickMixin = { // mixins serve per non riscrivere lo stesso codice piu' volte
  methods: {
    onClick () {
      alert('clicked')
    }
  }
}

Vue.directive('margin', {
  inserted (el, binding) {
    el.style.marginTop = binding.value || '2vh' // modificabile sull'html
    // el.style.marginTop = '2vh' // non modificabile sull'html
    el.style.marginBottom = binding.value || '2vh'
  }
})

Vue.component('custom-button', {
  mixins: [clickMixin],
  template: '<button @click="onClick">custom button</button>'
})
/*
Altro metodo per i mixin, non abusare => peggioramento del codice
Vue.mixin({
  methods: {
    onClick: function() {
      alert('clicked')
    }
  }
})
Vue.component('custom-button', {
  template: '<button @click="onClick">custom button</button>'
})
*/
Vue.component('another-custom-button', {
  mixins: [clickMixin],
  template: '<button @click="onClick">another custom button</button>'
})

Vue.component('people-list', {
  template: '#people-list',
  props: ['people']
})

Vue.component('person', {
  template: '#person',
  props: ['person']
})

Vue.component('child-component', {
  props: ['firstname2', 'lastname2'],
  methods: {
    updateFirstname () {
      this.$emit('update:firstname2', 'luigi')
    }
  }
})
/*
Altro metodo per componenete
Vue.component('child-component', {
  props: ['firstname2', 'lastname2'],
  methods: {
    updateFirstname: function() {
      this.$emit('update-firstname2', 'luigi');
    }
  }
});
new Vue({
  el: '#vue-app',
  data: {
    firstname2: 'alberto',
    lastname2: 'bottarini'
  },
  methods: {
    onUpdateFirstname: function(newFirstname) {
      this.firstname2 = newFirstname;
    }
  }
});
*/

Vue.component('incrementer', {
  template: '<button @click="increment">+</button>',
  methods: {
    increment () {
      EventBus.$emit('increment')
    }
  }
})

Vue.component('decrementer', {
  template: '<button @click="decrement">-</button>',
  methods: {
    decrement () {
      EventBus.$emit('decrement')
    }
  }
})

Vue.component('groc', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['grocery'],
  template: '<li>{{ grocery.text }}</li>'
})

//  il commento sotto disattiva il warning per la riga sottostante
// eslint-disable-next-line
var titolo = new Vue({
  el: '#titolo',
  data: {
    Styles: {
      height: '7vh',
      width: '100%',
      marginBottom: '3vh',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center'
    },
    StylesH1: {
      margin: '0',
      padding: '1vh 0',
      fontWeight: 'bold'
    }
  }
})

// eslint-disable-next-line
var container = new Vue({
  el: 'container',
  data: {
    margin: {
      margin: '5vh'
    }
  }
})
// var app1: va bene, ma non permette le verifiche su console
// eslint-disable-next-line
var app1 = new Vue({
// window.test = app1; --> per visualizzare le modifiche in console
  el: ' #app-1',
  data: {
    message: '',
    pal: 'Stringa palindroma',
    palN: 'Stringa non palindroma',
    myCustomStyles: {
      color: 'blue'
    },
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Meat' },
      { id: 3, text: 'Whatever else humans are supposed to eat' }
    ],
    style: {
      marginBottom: '1vh'
    }
  },
  computed: {
    messageR () {
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
    },
    mese: 'marzo',
    tv: 'si',
    sauna: 'no'
  },
  methods: {
    shuffle () {
      this.people = this.people.sort(function () {
        return 0.5 - Math.random()
      })
    }
  }
})
var EventBus = new Vue()
// eslint-disable-next-line
var app3 = new Vue({
  el: '#app-3',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    button: 0,
    button1Dis: false,
    button2Dis: false,
    firstname: 'Tuc',
    lastname: 'Tuc',
    people: [
      { name: 'Alberto', surname: 'Bianchi' },
      { name: 'Marco', surname: 'Rossi' },
      { name: 'Luca', surname: 'Verdi' }
    ],
    name: '',
    surname: '',
    firstname2: 'alberto',
    lastname2: 'bottarini',
    counter: 0
  },
  watch: {
    firstname (value) {
      this.button1Dis = value.length < 3
      this.button = 0
    },
    lastname (value) {
      this.button2Dis = value.length < 3
      this.button = 0
    }
  },
  filters: {
    uppercase (text) {
      return text.toUpperCase()
    },
    limit (text, length) {
      return text.substring(0, length)
    }
  },
  computed: {
    fullname: {
      get () {
        return this.firstname + ' ' + this.lastname
      },
      set (value) {
        var parts = value.split(' ')
        this.firstname = parts[0]
        this.lastname = parts[1]
        if (this.lastname === undefined) {
          this.lastname = ''
        }
      }
    }
  },
  methods: {
    addPerson () {
      this.people.push({
        name: this.name,
        surname: this.surname
      })
      this.name = ''
      this.surname = ''
    },
    increment () {
      this.counter++
    },
    decrement () {
      this.counter--
    }
  },
  created () {
    EventBus.$on('increment', this.increment.bind(this))
    EventBus.$on('decrement', this.decrement.bind(this))
  }
})
// eslint-disable-next-line
var app4 = new Vue({
  el: '#app-4',
  data: {
    xy: '45.64153 10.49866',
    coord: '45.64153 10.49866',
    message: 'Scegli il Messaggio',
    cambiaMess: {
      backgroundColor: 'black',
      color: 'green',
      fontSize: '30px',
      padding: '3vh',
      width: '100%',
      margin: '0px'
    }
  },
  computed: {
    coordinate: {
      get () {
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
      get () {
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
    converti () {
      let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 '
      let txt = this.messageL.split('')
      let coord = this.coord.split('')
      // console.log(app4.coord, 'pippo')
      for (let i = 0; i <= this.messageL.length; i++) {
        var id = setInterval(() => {
          if (txt[i] !== coord[i]) {
            coord[i] = chars.charAt(Math.floor(Math.random() * chars.length))
            this.coord = coord.join('')
          } else {
            clearInterval(id)
          }
        }, 40)
      }
    },
    reset () {
      this.coord = this.xy
    }
  }
})
// eslint-disable-next-line
var app5 = new Vue({
  el: '#app-5',
  data: {
    costo1: 10,
    costo2: 5,
    myCustomStyles: {
      marginTop: '30px'
    }
  },
  computed: {
    somma: {
      get () {
        return this.costo1 + this.costo2
      }
    }
  }
})

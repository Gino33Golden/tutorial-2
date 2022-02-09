//console.log('hello, vue')

const app = Vue.createApp({
  data(){
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: "Brandon",
      age: 45
    }
  },
  methods: {

  }
})

app.mount('app');

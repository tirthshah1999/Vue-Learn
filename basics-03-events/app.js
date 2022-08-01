const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },

  methods: {
    add(num){
      this.counter += num;
    },

    reduce(){
      this.counter--;
    },

    setName(event, lastName){
      this.name = event.target.value + lastName;
    },

    setConfirmName(){
      this.confirmName = this.name;
    }
  },
});

app.mount('#events');

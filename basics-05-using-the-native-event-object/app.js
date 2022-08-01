const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    // name it like as properties that we give in data
    fullName(){
      console.log("Running again...");
      if(this.name === '')
        return '';
        
      return this.name + " Shah";
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    clearInput(){
      this.name = "";
    },
    // fullName(){
    //   // bad idea it will compute again even though we are updating counter and not the name
    //   console.log("Running again...");
    //   return this.name + " Shah";
    // }
  }
});

app.mount('#events');

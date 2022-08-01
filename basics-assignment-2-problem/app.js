const app= Vue.createApp({
    data(){
        return{
            name: "",
            confirmName: "" 
        }
    },

    methods: {
        showAlert(){
            alert("Alert!!");
        },

        setName(event){
            this.name = event.target.value;
        },
        
        setConfirmName(event){
            this.confirmName = event.target.value;
        }
    }
});

app.mount("#assignment");
const app = Vue.createApp({
  data() {
    return {
      enterInput: "",
      confirmedInput: ""
    };
  },
  methods: {
    buttonPress() {
      alert("Button pressed!");
    },
    saveInput(event) {
      this.enterInput = event.target.value;
    },

    confirmInput() {
      this.confirmedInput = this.enterInput;
    }
  }
});

app.mount("#assignment");

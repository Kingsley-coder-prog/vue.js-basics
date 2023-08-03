const app = Vue.createApp({
  data() {
    return {
      name: "Ifeanyi",
      age: 18,
      imgURL: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=665&q=80"
    };
  },
  methods: {
    ageInFiveYears() {
      const newAge = this.age + 5;
      return newAge;
    },
    randomNum() {
      const randomNumber = Math.random().toFixed(2);
      if (randomNumber >= 0 && randomNumber <= 1) return randomNumber;
      else return "Number not found";
    }
  }
});

app.mount("#assignment");

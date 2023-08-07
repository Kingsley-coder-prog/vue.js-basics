const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: ["Finish this course!"]
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    }
  }
});

app.mount("#user-goals");

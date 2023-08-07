const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: "",
      listVisible: true
    };
  },
  computed: {
    toggleTask() {
      return this.listVisible ? "Hide" : "Show";
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    // 3) When the below button is pressed, the list should be shown or hidden
    toggleList() {
      this.listVisible = !this.listVisible;
    }
  }
});

app.mount("#assignment");

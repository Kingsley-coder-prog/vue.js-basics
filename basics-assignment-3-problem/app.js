const app = Vue.createApp({
  data() {
    return {
      number: 0
    };
  },
  computed: {
    result() {
      if (this.number < 37) return "Not there yet";
      if (this.number === 37) return this.number;
      if (this.number > 37) return "Too Much!";
    }
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    }
  },
  methods: {
    addNum(num) {
      this.number = this.number + num;
    }
  }
});

app.mount("#assignment");

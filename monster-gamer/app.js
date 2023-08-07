function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    }
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(12, 5);
      //   this.monsterHealth = this.monsterHealth - attaclValue;
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
      //   this.attackMonster();
    }
  }
});

app.mount("#game");

import { defineStore } from "pinia";

export const CounterStore = defineStore("counter", {
  state: () => ({
    step: 1,
    number: 0,
    lastNumber: null,
    interval: null,
    isPlay: false,
    backgoundColorClass: "bg-slate-900"
  }),
  actions: {
    start() {
      if (this.interval) return;

      if (this.step == 2) {
        this.lastNumber = this.number;
      }

      this.interval = setInterval(() => {
        this.number++;

        if (this.number >= 60) {
          this.number = 0;
        }
      }, 100);
      this.isPlay = true;
    },
    stop() {
      clearInterval(this.interval);
      this.interval = null;

      if (this.step == 1) {
        this.step++;
        this.lastNumber = this.number;
      }

      this.isPlay = false;
    },
    up() {
      this.stop();
      if (this.number > this.lastNumber) {
        this.backgoundColorClass = "bg-green-600";
      } else {
        this.backgoundColorClass = "bg-red-600";
      }
      this.isPlay = false;
    },
    down() {
      this.stop();
      if (this.number < this.lastNumber) {
        this.backgoundColorClass = "bg-green-600";
      } else {
        this.backgoundColorClass = "bg-red-600";
      }
      this.isPlay = false;
    }
  }
});

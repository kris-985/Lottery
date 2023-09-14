<template>
  <div
    class="relative w-full max-w-[600px] h-[200px] mx-auto p-6 border rounded"
    :class="counter.backgoundColorClass"
  >
    <div
      v-if="counter.lastNumber"
      class="last-number absolute left-2 top-2 text-white text-4xl"
    >
      {{ counter.lastNumber }}
    </div>
    <div class="h-full flex flex-col justify-between">
      <div class="text-white text-center text-4xl">
        {{ counter.number }}
      </div>
      <div class="flex gap-4">
        <button class="primary-button" @click="start">Start</button>
        <button v-if="counter.step == 1" class="primary-button" @click="stop">
          Stop
        </button>
        <button
          :disabled="!counter.isPlay ? true : false"
          v-if="counter.step == 2"
          class="primary-button"
          @click="up"
        >
          Up
        </button>
        <button
          :disabled="!counter.isPlay ? true : false"
          v-if="counter.step == 2"
          class="primary-button"
          @click="down"
        >
          Down
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { CounterStore } from "../stores/counter";

export default {
  setup() {
    const counter = CounterStore();

    const functions = {
      start() {
        counter.start();
      },
      stop() {
        counter.stop();
      },
      up() {
        counter.up();
      },
      down() {
        counter.down();
      },
    };

    return { counter, ...functions };
  },
};
</script>

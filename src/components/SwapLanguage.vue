<template>
  <div class="flex select-none">
    <button
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      class="flex items-center justify-center w-[38px] h-[38px] rounded-full border border-white border-opacity-[12%] transition-all hover:bg-white"
    >
      <img
        class="w-[15px] h-auto pointer-events-none"
        src="@/assets/images/language.png"
      />
    </button>
    <transition-group name="slide-fade" @leave="onLeave">
      <div
        class="flex items-center space-x-4 p-4 -my-4"
        :class="{ 'pointer-events-none': !isButtonActive }"
        v-if="itemsVisible"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave"
      >
        <button
          v-for="(language, index) in languages"
          :class="[`delay-${100 * (index + 1)}`]"
          :key="language.code"
          class="flex transition-all font-mono font-semibold flex-col justify-center items-center w-[38px] h-[38px] rounded-full bg-white text-gray-800 text-xs border-2 border-white hover:bg-transparent"
        >
          {{ language.text }}
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import constants from "@/constants";
export default {
  name: "SwapLanguage",
  data() {
    return {
      itemsVisible: false,
      timeout: null,
      isButtonActive: true,
      languages: constants.LANGUAGES,
    };
  },
  methods: {
    onMouseOver() {
      if (!this.isButtonActive) return;
      clearTimeout(this.timeout);
      this.itemsVisible = true;
    },
    onMouseLeave() {
      this.timeout = setTimeout(() => (this.itemsVisible = false), 100);
    },
    onLeave() {
      this.isButtonActive = false;

      // timeout delay should be a bit longer than fade animation duration
      setTimeout(() => (this.isButtonActive = true), 350);
    },
  },
};
</script>

<template>
  <div class="flex flex-col md:flex-row select-none z-10 relative">
    <button
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
      @click="onClick"
      class="flex items-center justify-center w-[34px] h-[34px] xl:w-[38px] xl:h-[38px] rounded-full border border-white border-opacity-[12%] transition-all hover:bg-white"
      :class="{ 'bg-white': itemsVisible }"
    >
      <img
        class="w-[15px] h-auto pointer-events-none"
        src="@/assets/images/language.png"
      />
    </button>
    <transition-group name="slide-fade" @leave="onLeave">
      <div
        class="absolute top-full left-0 md:top-0 md:left-[34px] flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 py-4 md:p-4 md:-my-4"
        :class="{ 'pointer-events-none': !isButtonActive }"
        v-if="itemsVisible"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave"
      >
        <button
          v-for="(language, index) in languages"
          :class="[`delay-${100 * (index + 1)}`]"
          :key="language.code"
          class="flex transition-all font-mono font-semibold flex-col justify-center items-center w-[34px] h-[34px] xl:w-[38px] xl:h-[38px] rounded-full bg-white text-gray-800 text-xs border-2 border-white hover:bg-transparent"
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
  props: {
    deviceWidth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      itemsVisible: false,
      timeout: null,
      isButtonActive: true,
      languages: constants.LANGUAGES,
    };
  },
  methods: {
    onClick() {
      if (this.deviceWidth >= 1200) return;
      this.itemsVisible = !this.itemsVisible;
    },
    onMouseOver() {
      if (this.deviceWidth < 1200) return;

      if (!this.isButtonActive) return;

      clearTimeout(this.timeout);
      this.itemsVisible = true;
    },
    onMouseLeave() {
      if (this.deviceWidth < 1200) return;
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

<template>
  <div>
    <h1
      ref="heading"
      class="select-none relative max-w-[333px] md:max-w-full mx-auto text-[34px] md:text-[58px] xl:text-[82px] font-bold leading-[110%] uppercase text-primary text-center transform translate-x-0 translate-y-0"
      :class="{ 'duration-300 ease-linear': !isMoved }"
    >
      {{ title }}
    </h1>

    <!-- background circle -->
    <div
      class="max-w-[70vh] aspect-square absolute w-[294px] md:w-[482px] xl:w-[578px] rounded-full bg-yellow blur-[35px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-[-1]"
    />

    <!-- spin icon -->
    <div
      class="max-w-[70vh] aspect-square w-[294px] md:w-[482px] xl:w-[578px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img
        src="@/assets/images/buttons.svg"
        class="absolute right-0 bottom-0 cursor-pointer spin-anim w-[87px] md:w-[107px] lg:w-[109px] xl:w-[115px]"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "AppHeading",
  props: {
    title: {
      type: String,
    },
    showSpinner: {
      type: Boolean,
    },
    deviceWidth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      animSpeed: 1,
      isMoved: false,
    };
  },
  methods: {
    parallax(e) {
      if (!this.deviceWidth || this.deviceWidth < 1200) return;

      // prevent flickering
      if (!this.isMoved) {
        setTimeout(() => {
          this.isMoved = true;
        }, 300);
        true;
      }

      if (!this.$refs.heading) return;

      const x = (window.innerWidth - e.pageX * this.animSpeed) / 100;
      const y = (window.innerHeight - e.pageY * this.animSpeed) / 100;

      this.$refs.heading.style.transform = `translateX(-${x}px) translateY(-${y}px)`;
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.parallax);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.parallax);
  },
};
</script>

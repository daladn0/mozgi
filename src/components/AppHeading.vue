<template>
  <div>
    <h1
      ref="heading"
      class="relative text-[82px] font-bold leading-[110%] uppercase text-primary text-center"
    >
      {{ title }}
    </h1>

    <!-- background circle -->
    <div
      class="absolute w-[578px] h-[578px] rounded-full bg-yellow blur-[35px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-[-1]"
    />

    <!-- spin icon -->
    <div
      class="w-[578px] h-[578px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img
        src="@/assets/images/buttons.svg"
        class="absolute right-0 bottom-0 cursor-pointer hover:animate-spin-backwards"
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
  },
  data() {
    return {
      animSpeed: 1,
    };
  },
  methods: {
    parallax(e) {
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

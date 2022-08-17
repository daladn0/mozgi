<template>
  <div>
    <h1
      class="relative text-[82px] font-bold leading-[110%] uppercase text-primary text-center after:absolute after:w-[578px] after:h-[578px] after:rounded-full after:bg-yellow after:blur-[35px] after:top-1/2 after:left-1/2 after:transform after:-translate-y-1/2 after:-translate-x-1/2 after:z-[-1]"
    >
      {{ title }}
    </h1>
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
};
</script>

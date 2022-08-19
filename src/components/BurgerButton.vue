<template>
  <button class="relative w-[22px] h-5 py-2 block" @click="$emit('toggle')">
    <span
      class="w-full h-px bg-black block absolute left-0 top-1/2 transform transition-all"
      :class="[isActive ? '-rotate-45' : '-translate-y-1']"
    ></span>
    <span
      class="w-full h-px bg-black block absolute left-0 top-1/2 transform transition-all"
      :class="[isActive ? 'rotate-45' : 'translate-y-1']"
    ></span>
  </button>
</template>
<script>
export default {
  name: "BurgerButton",
  emits: ["toggle"],
  props: {
    isActive: {
      type: Boolean,
    },
  },
};
</script>

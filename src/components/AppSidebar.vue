<template>
  <aside
    class="fixed top-0 left-0 w-2/3 bg-black bg-opacity-80 h-screen z-[1001] transform transition-all text-white p-5 flex flex-col space-y-4"
    :class="[isActive ? 'translate-x-0' : '-translate-x-full']"
  >
    <AppLink class="text-white" label="where?" :href="'/who'" />
    <AppLink class="text-white" label="who?" :href="'/who'" />
    <AppLink class="text-white" label="when?" :href="'/who'" />
  </aside>
</template>
<script>
import AppLink from "./AppLink.vue";
export default {
  name: "AppSidebar",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  components: { AppLink },
};
</script>

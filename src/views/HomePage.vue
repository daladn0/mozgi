<template>
  <div
    class="w-full h-screen overflow-hidden px-[19px] pb-[19px] pt-6 relative"
  >
    <SwapLanguage class="mt-1 ml-[5px]" />

    <AppLogo class="absolute top-0 left-1/2 transform -translate-x-1/2 mt-6" />

    <AppHeading
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1023px]"
      title="FULL-CYCLE EVENT AGENCY"
    />

    <AppLink
      label="where?"
      :href="'/who'"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90"
    />
    <AppLink
      label="who?"
      :href="'/who'"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90"
    />
    <AppLink
      label="when?"
      :href="'/who'"
      class="absolute left-1/2 bottom-[19px] transform -translate-x-1/2"
    />
  </div>
</template>

<script>
import SwapLanguage from "@/components/SwapLanguage.vue";
import AppLogo from "@/components/AppLogo.vue";
import AppHeading from "@/components/AppHeading.vue";
import AppLink from "@/components/AppLink.vue";
export default {
  name: "HomeView",
  components: {
    SwapLanguage,
    AppLogo,
    AppHeading,
    AppLink,
  },
};
</script>

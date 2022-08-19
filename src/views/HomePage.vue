<template>
  <div
    class="w-full h-screen overflow-hidden px-[19px] pb-[19px] pt-6 relative"
  >
    <header class="flex items-center justify-between">
      <SwapLanguage class="mt-1 ml-[5px]" :deviceWidth="deviceWidth" />

      <AppLogo class="absolute left-1/2 transform -translate-x-1/2" />

      <BurgerButton
        class="block md:hidden"
        :isActive="isBurgerActive"
        @toggle="isBurgerActive = !isBurgerActive"
      />
    </header>

    <AppSidebar :isActive="isBurgerActive" class="block md:hidden" />

    <AppHeading
      class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-full p-5 md:px-[100px] xl:px-0 xl:max-w-[1023px]"
      title="FULL-CYCLE EVENT AGENCY"
      :deviceWidth="deviceWidth"
    />

    <AppLink
      label="where?"
      :href="'/who'"
      class="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90"
    />
    <AppLink
      label="who?"
      :href="'/who'"
      class="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90"
    />
    <AppLink
      label="when?"
      :href="'/who'"
      class="hidden md:flex absolute left-1/2 bottom-[19px] transform -translate-x-1/2"
    />
  </div>
</template>

<script>
import SwapLanguage from "@/components/SwapLanguage.vue";
import AppLogo from "@/components/AppLogo.vue";
import AppHeading from "@/components/AppHeading.vue";
import AppLink from "@/components/AppLink.vue";
import BurgerButton from "../components/BurgerButton.vue";
import AppSidebar from "@/components/AppSidebar.vue";
export default {
  name: "HomeView",
  data() {
    return {
      isBurgerActive: false,
      deviceWidth: null,
    };
  },
  components: {
    SwapLanguage,
    AppLogo,
    AppHeading,
    AppLink,
    BurgerButton,
    AppSidebar,
  },
  methods: {
    setWindowSize(e) {
      const width = e?.currentTarget?.innerWidth || e?.innerWidth;
      this.deviceWidth = width;
    },
  },
  mounted() {
    this.setWindowSize(window);
    window.addEventListener("resize", this.setWindowSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setWindowSize);
  },
};
</script>

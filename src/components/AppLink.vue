<template>
  <router-link
    :to="href"
    class="link-hover text-sm xl:text-base leading-[1.4] text-primary duration-300 ease-in-out hover:text-white"
  >
    <slot>{{ label }}</slot>
  </router-link>
</template>
<script>
export default {
  name: "AppLink",
  props: ["href", "label"],
};
</script>

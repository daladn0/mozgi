<template>
  <div
    class="bg-white w-full h-screen flex flex-col justify-center items-center font-mono px-8 text-center"
  >
    <h1 class="text-3xl md:text-6xl text-gray-800 mb-2">You're cute 🙃</h1>
    <span class="text-lg"
      >now
      <router-link
        class="text-blue-700 underline underline-offset-8 hover:no-underline font-semibold"
        :to="{ name: 'home' }"
        >go home</router-link
      ></span
    >
  </div>
</template>
<script>
export default {
  name: "WhoPage",
};
</script>

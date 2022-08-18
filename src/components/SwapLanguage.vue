<template>
  <div class="flex space-x-4 select-none">
    <button
      class="language-trigger flex items-center justify-center w-[38px] h-[38px] rounded-full border border-white border-opacity-[12%] transition-all hover:bg-white"
    >
      <img
        class="w-[15px] h-auto pointer-events-none"
        src="@/assets/images/language.png"
      />
    </button>
    <button
      class="language flex transition-all delay-100 font-mono font-semibold flex-col justify-center items-center w-[38px] h-[38px] rounded-full bg-white text-gray-800 text-xs border-2 border-white hover:bg-transparent"
    >
      🇺🇸
    </button>
    <button
      class="language flex transition-all delay-200 font-mono font-semibold flex-col justify-center items-center w-[38px] h-[38px] rounded-full bg-white text-gray-800 text-xs border-2 border-white hover:bg-transparent"
    >
      🇺🇦
    </button>
  </div>
</template>

<script>
export default {
  name: "SwapLanguage",
  data() {
    return {
      itemsVisible: false,
    };
  },
};
</script>

<template>
  <div
    class="absolute left-0 top-full transform -translate-y-full origin-left rotate-[-27deg]"
  >
    <div class="marquee">
      <div class="marquee__inner" aria-hidden="true">
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
      </div>
    </div>
  </div>
  <div class="absolute left-full top-0 transform origin-left rotate-[153deg]">
    <div class="marquee">
      <div class="marquee__inner" aria-hidden="true">
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfiniteLabels",
};
</script>
<style scoped lang="scss">
.marquee {
  overflow: hidden;
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
}

.marquee__inner {
  display: flex;
  animation: marquee 20s linear infinite;
  animation-play-state: running;
  white-space: nowrap;
}

.marquee span {
  font-size: 52px;
  -webkit-text-stroke: 1px #373737;
  color: transparent;
  opacity: 10%;
}

@keyframes marquee {
  0% {
    transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
    transform: translate3d(var(--move-final), 0, 0);
  }
}
</style>

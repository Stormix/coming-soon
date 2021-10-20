<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  import Socials from '@/components/Socials.vue'
</script>

<template>
  <div
    class="flex flex-col w-screen h-screen font-mono  dark:bg-black dark:text-white"
  >
    <Header />
    <main class="flex flex-1 w-screen px-10 md:px-2">
      <div class="m-auto">
        <h1 class="text-3xl title" title="Under construction - coming soon...">
          Under construction - coming soon...
        </h1>
      </div>
    </main>
    <Footer />
    <Socials />
  </div>
</template>

<style lang="scss" scoped>
  .title {
    animation-delay: 2s;
    animation: glitch 1s linear infinite;
    &::before {
      content: attr(title);
      position: absolute;
      left: 0;

      animation: glitchTop 1s linear infinite;
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }
  }

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }

  @keyframes glitchTop {
    2%,
    64% {
      transform: translate(2px, -2px);
    }
    4%,
    60% {
      transform: translate(-2px, 2px);
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
  }

  @keyframes glitchBotom {
    2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-22px, 5px) skew(21deg);
    }
  }
</style>

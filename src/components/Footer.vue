<script setup lang="ts">
  const date = `2015-${new Date().getFullYear()}`
</script>

<template>
  <div class="h-16 flex py-4 px-4 w-full mb-6 md:mb-0">
    <p class="mx-auto">
      © <a href="/" class="text-purple-500">Anas Mazouni</a> {{ date }}, All
      rights Reserved | View on
      <a
        href="https://github.com/Stormix/coming-soon"
        target="_blank"
        class="underline opacity-75"
      >
        GitHub
      </a>
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    setup() {
      const socials = [
        {
          label: 'Facebook',
          icon: 'fab fa-facebook-f',
          url: 'https://www.facebook.com/',
        },
        {
          label: 'Twitter',
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/stormix_co',
        },
        {
          label: 'Github',
          icon: 'fab fa-github',
          url: 'https://github.com/Stormix',
        },
        {
          label: 'Linkedin',
          icon: 'fab fa-linkedin-in',
          url: 'https://www.linkedin.com/in/anasmazouni/',
        },
        {
          label: 'Instagram',
          icon: 'fab fa-instagram',
          url: 'https://www.instagram.com/stormix.co/',
        },
        {
          label: 'StackOverflow',
          icon: 'fab fa-stack-overflow',
          url: 'https://stackoverflow.com/users/3370660/stormix',
        },
      ]

      return { socials }
    },
  })
</script>
<template>
  <div class="w-10 fixed bottom-0 left-10">
    <ul class="flex flex-col items-center list-none m-0 p-0 line">
      <li v-for="social in socials" :key="social.url" class="mb-5">
        <a
          :href="social.url"
          target="_blank"
          rel="nofollow noopener noreferrer"
          :aria-label="social.label"
        >
          <i :class="social.icon" />
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  .line {
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 6rem;
      margin: 0 auto;

      @apply dark:bg-white bg-black;
    }
  }
</style>

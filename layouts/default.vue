<template>
  <div :class="{ dark: isDarkMode }">
    <div class="page-wrapper">
      <header class="bg-gray-900 sticky top-0 z-50">
        <div class="container mx-auto flex justify-between items-center py-4">
          <div class="flex items-center">
            <nuxt-link to="/"><img src="@/public/white.svg" alt="Pontis IT-Consulting Logo" class="h-14 w-auto mr-4"></nuxt-link>
          </div>
          <div class="flex md:hidden z-50">
            <button id="hamburger" class="text-white focus:outline-none" @click="toggleMenu" v-show="!isMenuVisible">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex md:flex-grow justify-center">
            <ul class="flex justify-center space-x-4 text-white">
              <li><nuxt-link to="/" class="hover:text-secondary font-bold dark:text-white">Home</nuxt-link></li>
              <li><nuxt-link to="/contactform" class="hover:text-secondary font-bold dark:text-white">Kontakt</nuxt-link></li>
              <li><nuxt-link to="/impressum" class="hover:text-secondary font-bold dark:text-white">Impressum</nuxt-link></li>
              <li v-if="isLoggedIn"><nuxt-link to="/backend" class="hover:text-secondary font-bold dark:text-white">Backend</nuxt-link></li>
            </ul>
          </nav>
          <div class="hidden lg:flex items-center space-x-4">
            <div class="flex flex-col justify-center ml-3">
              <input type="checkbox" id="dark-mode-toggle" class="sr-only" @change="toggleDarkMode" :checked="isDarkMode" />
              <label class="relative cursor-pointer p-2 flex" for="dark-mode-toggle">
<!--
==========================================
🚀 BEGINN: Fremd Code 🚀
URL: https://cruip.com/implementing-tailwind-css-dark-mode-toggle-with-no-flicker/
==========================================
-->
                <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                  <path class="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                </svg>
                <svg class="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path class="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                  <path class="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                </svg>
<!--
==========================================
🏁 ENDE: Fremd Code 🏁
Software: https://cruip.com/implementing-tailwind-css-dark-mode-toggle-with-no-flicker/
==========================================
-->
                <span class="sr-only">Switch to light / dark version</span>
              </label>
            </div>
          </div>
        </div>
      </header>
      <nav id="mobile-menu-placeholder" v-show="isMenuVisible" class="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 z-50 flex flex-col items-center space-y-8 p-8 md:hidden">
        <button id="close-hamburger" class="text-black dark:text-white focus:outline-none absolute top-4 right-4" @click="toggleMenu">

          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul class="w-full text-center dark:text-white">
          <li class="border-b border-gray-300 dark:border-gray-600 py-4"><nuxt-link to="/" @click.native="closeMenu" class="hover:text-secondary font-bold dark:text-white">Home</nuxt-link></li>
          <li class="border-b border-gray-300 dark:border-gray-600 py-4"><nuxt-link to="/contactform" @click.native="closeMenu" class="hover:text-secondary font-bold dark:text-white">Kontakt</nuxt-link></li>
          <li class="border-b border-gray-300 dark:border-gray-600 py-4"><nuxt-link to="/impressum" @click.native="closeMenu" class="hover:text-secondary font-bold dark:text-white">Impressum</nuxt-link></li>
          <li v-if="isLoggedIn" class="border-b border-gray-300 dark:border-gray-600 py-4"><nuxt-link to="/backend" @click.native="closeMenu" class="hover:text-secondary font-bold dark:text-white">Backend</nuxt-link></li>
        </ul>
        <div class="flex flex-col mt-6 space-y-2 items-center dark:text-white">
          <div class="flex flex-col justify-center ml-3">
            <input type="checkbox" id="dark-mode-toggle-mobile" class="sr-only" @change="toggleDarkMode" :checked="isDarkMode" />
            <label class="relative cursor-pointer p-2" for="dark-mode-toggle-mobile">
<!--
==========================================
🚀 BEGINN: Fremd Code 🚀
URL: https://cruip.com/implementing-tailwind-css-dark-mode-toggle-with-no-flicker/
==========================================
-->
              <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-slate-300" d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                <path class="fill-slate-400" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
              </svg>
              <svg class="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                <path class="fill-slate-500" d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
              </svg>
<!--
==========================================
🏁 ENDE: Fremd Code 🏁
Software: https://cruip.com/implementing-tailwind-css-dark-mode-toggle-with-no-flicker/
==========================================
-->
              <span class="sr-only">Switch to light / dark version</span>
            </label>
          </div>
        </div>
      </nav>
      <div class="content-wrapper bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <slot />
      </div>
      <footer class="py-10 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <img src="@/public/white.svg" alt="Logo" class="h-14 w-auto mx-auto mb-5">
        <span class="block text-center text-gray-600 dark:text-gray-400 font-semibold">© 2024 Pontis IT-Consulting. Alle Rechte vorbehalten.</span>
        <ul class="flex justify-center mt-10 space-x-8">
          <li><a href="https://instagram.com" target="_blank"><img src="@/public/instagram.png" alt="Instagram" class="h-10 w-10 hover:drop-shadow-md"></a></li>
          <li><a href="https://youtube.com" target="_blank"><img src="@/public/youtube.png" alt="YouTube" class="h-10 w-10"></a></li>
          <li><a href="https://facebook.com" target="_blank"><img src="@/public/facebook.png" alt="Facebook" class="h-10 w-10"></a></li>
          <li><a href="https://twitter.com" target="_blank"><img src="@/public/twitter.png" alt="Twitter" class="h-10 w-10"></a></li>
          <li><a href="https://linkedin.com" target="_blank"><img src="@/public/linkedin.png" alt="LinkedIn" class="h-10 w-10"></a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isMenuVisible: false,
      isLoggedIn: false,
      isDarkMode: false
    };
  },
  mounted() {
    this.checkAuthStatus();
    supabase.auth.onAuthStateChange((event, session) => {
      this.isLoggedIn = !!session;
    });
    this.isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  },
  methods: {
    async checkAuthStatus() {
      const { data: { session } } = await supabase.auth.getSession();
      this.isLoggedIn = !!session;
    },
    async logout() {
      await supabase.auth.signOut();
      this.isLoggedIn = false;
      this.$router.push('/'); // Weiterleitung zur Startseite nach dem Logout
    },
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    closeMenu() {
      this.isMenuVisible = false;
    },
    toggleDarkMode(event) {
      this.isDarkMode = event.target.checked;
      localStorage.setItem('darkMode', this.isDarkMode);
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
</script>

<style scoped>
.page-wrapper {
  transition: transform 0.3s;
}
</style>

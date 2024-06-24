<template>
  <section id="home" class="bg-white dark:bg-gray-900 py-16">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 class="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Willkommen bei<br><span class="text-primary dark:text-indigo-300">Pontis IT-Consulting</span></h2>
        <p class="my-7 text-gray-700 dark:text-gray-300">Schön, dass Sie uns kennenlernen wollen! Pontis IT-Consulting ist mehr als nur ein Arbeitsplatz. Hier kommen kreative Köpfe zusammen, um außergewöhnliche Ideen Wirklichkeit werden zu lassen. Wenn Sie bereit sind, Ihre Karriere voranzutreiben und echte Herausforderungen anzunehmen, dann sind Sie hier genau richtig!</p>
        <div class="space-x-2">
          <nuxt-link to="/qualificationform" class="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block">JETZT BEWERBEN!</nuxt-link>
        </div>
      </div>
      <div class="md:w-1/2">
        <swiper
    :effect="'cube'"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper business"
  >
    <swiper-slide
      ><img
        src="/Serverraum1.png" alt="Serverraum" class="rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"/></swiper-slide
    ><swiper-slide
      ><img
        src="/Büro1.png" alt="Büro" class="rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"/></swiper-slide
    ><swiper-slide
      ><img
        src="/Cafeteria.png" alt="Cafeteria" class="rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"/></swiper-slide
    ><swiper-slide
      ><img src="/Konferenzraum.png" alt="Konferenzraum" class="rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"
    /></swiper-slide>
  </swiper>
      </div>
    </div>
  </section>

  <section id="aboutus" class="py-16 bg-gray-dark dark:bg-gray-800">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img src="/Unternehmen1.png" alt="Pontis-Campus" class="w-full md:mx-auto md:max-w-md rounded-lg bg-gray-100 dark:bg-gray-700 shadow-lg" />
      </div>
      <div class="md:w-1/2">
        <h2 class="text-5xl font-bold mb-4 text-white">Unser <span class="text-primary dark:text-indigo-300">Versprechen</span></h2>
        <p class="my-5 text-white dark:text-gray-300">Bei Pontis IT-Consulting ist es unser Versprechen an Sie, nicht nur einen Arbeitsplatz, sondern eine Plattform für Wachstum und Erfüllung zu bieten. Hier sind fünf Gründe, warum Sie Teil unseres Teams werden sollten:</p>
        <ol class="mt-5 mb-10 list-outside">
          <li class="flex items-center mb-4">
              <strong class="bg-primary dark:bg-indigo-300 text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">1</strong>
              <span class="text-white dark:text-gray-300">Flexible Arbeitsmodelle: Flexibilität im Büro oder zu Hause.</span>
          </li>
          <li class="flex items-center mb-4">
              <strong class="bg-primary dark:bg-indigo-300 text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">2</strong>
              <span class="text-white dark:text-gray-300">Übertarifliches Gehalt: Überdurchschnittliche Bezahlung als Anerkennung Ihrer Leistung.</span>
          </li>
          <li class="flex items-center mb-4">
              <strong class="bg-primary dark:bg-indigo-300 text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">3</strong>
              <span class="text-white dark:text-gray-300">Innovative Projekte: Führend in Technologie und Branchentrends.</span>
          </li>
          <li class="flex items-center mb-4">
              <strong class="bg-primary dark:bg-indigo-300 text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">4</strong>
              <span class="text-white dark:text-gray-300">Fort- und Weiterbildung: Regelmäßige Schulungen zur beruflichen Entwicklung.</span>
          </li>
          <li class="flex items-center mb-4">
              <strong class="bg-primary dark:bg-indigo-300 text-white rounded-full w-8 h-8 text-lg font-semibold flex items-center justify-center mr-3">5</strong>
              <span class="text-white dark:text-gray-300">Gesundheits- und Wellnessprogramme: Umfassende Angebote für Ihr Wohlbefinden.</span>
          </li>
        </ol>
        <nuxt-link to="/qualificationform" class="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full">JETZT BEWERBEN!</nuxt-link>
      </div>
    </div>
  </section>

  <section id="clients" class="bg-white dark:bg-gray-900 py-16 px-4">
    <div class="container mx-auto max-w-screen-xl px-4 testimonials">
      <div class="text-center mb-12 lg:mb-20">
        <h2 class="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Unsere <span class="text-primary dark:text-indigo-300">Partner</span> in Innovation</h2>
        <p class="my-7 text-gray-700 dark:text-gray-300">Bei Pontis IT-Consulting schaffen wir Lösungen, die Branchen prägen</p>
      </div>
    </div> 
    <swiper
    :effect="'cube'"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper partners"
  >
    <swiper-slide
      ><img
        src="/netflix.svg" alt="Netflix Logo" class="dark:bg-gray"/></swiper-slide
    ><swiper-slide
      ><img
        src="/yahoo.svg" alt="Yahoo Logo" class="dark:bg-gray"/></swiper-slide
    ><swiper-slide
      ><img
        src="/amazon.svg" alt="Amazon Logo" class="dark:bg-gray"/></swiper-slide
    ><swiper-slide
      ><img
        src="/invision.svg" alt="Invision Logo" class="dark:bg-gray"/></swiper-slide
    ><swiper-slide
      ><img src="/walmart.svg" alt="Walmart Logo" class="dark:bg-gray"
    /></swiper-slide>
  </swiper>
  </section>

  <section class="bg-white dark:bg-gray-900 py-16">
  <div class="text-center mb-12 lg:mb-20">
    <h2 class="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">über <span class="text-primary dark:text-indigo-300">mich</span></h2>
    <p class="my-7 text-gray-700 dark:text-gray-300">Lernen Sie mich kennen</p>
  </div>
  <div class="relative w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
    <div class="grid w-full gap-6 mx-auto lg:grid-cols-3">
      <div></div> <!-- Empty div for the first column -->
      <div class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        <img class="object-cover object-center w-full mb-8 rounded-xl" src="/johannes.jpeg" alt="Mitarbeiter Johannes">
        <h2 class="mb-8 text-xs font-semibold tracking-widest text-primary dark:text-indigo-300 uppercase">Lukas Johannes Möller</h2>
        <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-gray-900 dark:text-gray-100 lg:text-3xl">Gründer</h1>
        <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300">"Für Cybersecurity schlägt mein Herz, Ihr Unternehmen sicherer zu machen ist meine Mission."</p>
      </div>
      <div></div> <!-- Empty div for the third column -->
    </div>
  </div>
</section>




  <section id="subscribe" class="bg-primary dark:bg-indigo-700 py-4">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="flex flex-col items-center rounded-lg bg-gray-100 dark:bg-gray-800 p-4 sm:p-8 lg:flex-row lg:justify-between">
        <div class="mb-4 sm:mb-8 lg:mb-0">
          <h2 class="text-center text-xl font-bold text-primary dark:text-indigo-300 sm:text-2xl lg:text-left lg:text-3xl">IT-Administratoren gesucht</h2>
          <p class="text-center text-gray-900 dark:text-gray-300 lg:text-left">Werde Teil unseres Teams</p>
        </div>
        <div class="flex flex-col items-center w-72 lg:items-end">
          <nuxt-link to="/qualificationform" class="inline-block rounded-full bg-primary dark:bg-indigo-300 px-4 py-2 font-semibold text-white hover:bg-gray-dark hover:text-white dark:text-gray-900">JETZT BEWERBEN!</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/effect-cube'; 

import SwiperCore, { EffectCube, Pagination } from 'swiper';

SwiperCore.use([EffectCube, Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [EffectCube, Pagination]
    };
  }
};
</script>

<style scoped>
.partners {
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
}

.business {
  width: 400px;
  height: 400px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

@media screen and (max-width: 890px) {
  .business {
    width: 300px;
    height: 300px;
  }
}
</style>

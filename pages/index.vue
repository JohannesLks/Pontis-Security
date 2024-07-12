<template>
  <section id="home" class="bg-white dark:bg-gray-900 py-16">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 class="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Willkommen bei<br><span class="text-primary dark:text-indigo-300">Pontis IT-Consulting</span></h2>
        <p class="my-7 text-gray-700 dark:text-gray-300">Willkommen bei Ihrem IT-Experten! Ich biete umfassende Dienstleistungen im Bereich Pentesting, Administration und IT-Beratung – professionell, zuverlässig und individuell.</p>
        <div class="space-x-2">
          <nuxt-link to="contactform" class="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block">KONTAKTIEREN SIE UNS!</nuxt-link>
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
          <swiper-slide><img src="/Serverraum1.png" alt="Serverraum" class="rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"/></swiper-slide>
          <swiper-slide><img src="/Büro1.png" alt="Büro" class="rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"/></swiper-slide>
          <swiper-slide><img src="/Cafeteria.png" alt="Cafeteria" class="rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"/></swiper-slide>
          <swiper-slide><img src="/Konferenzraum.png" alt="Konferenzraum" class="rounded-lg bg-gray-100 dark:bg-gray-800 shadow-lg"/></swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <!-- Neuer Leistungsabschnitt -->
  <section id="services" class="py-16 bg-gray-dark dark:bg-gray-800">
    <div class="container mx-auto text-center">
      <h2 class="text-5xl font-bold mb-4 text-white">Unsere <span class="text-primary dark:text-indigo-300">Leistungen</span></h2>
      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 class="text-xl font-bold text-white">Penetrationstest</h3>
          <p class="text-white">Umfassende Sicherheitsüberprüfungen und Risikoanalysen Ihrer IT-Systeme.</p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 class="text-xl font-bold text-white">IT-Beratung</h3>
          <p class="text-white">Strategische Beratung, um Ihre IT-Landschaft zu optimieren und zukunftssicher zu gestalten.</p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 class="text-xl font-bold text-white">Debugging von Webanwendungen</h3>
          <p class="text-white">Identifikation und Behebung von Fehlern in Ihren Webanwendungen zur Steigerung der Leistungsfähigkeit.</p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 class="text-xl font-bold text-white">Programmierung</h3>
          <p class="text-white">Entwicklung maßgeschneiderter Softwarelösungen, die Ihre geschäftlichen Anforderungen erfüllen.</p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <h3 class="text-xl font-bold text-white">IT-Sicherheitsberatung</h3>
          <p class="text-white">Beratung zu besten Sicherheitspraktiken und Implementierung effektiver Sicherheitsstrategien.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Über mich Abschnitt -->
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

  <section id="certifications" class="bg-white dark:bg-gray-900 py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-center text-3xl font-bold text-gray-900 dark:text-white mb-6">Meine Zertifizierungen</h2>
    <div class="flex flex-wrap justify-center items-center gap-6">
      <img src="/cert1.png" alt="Zertifikat 1" class="h-32 w-auto">
      <img src="/cert2.png" alt="Zertifikat 2" class="h-32 w-auto">
      <img src="/cert3.png" alt="Zertifikat 3" class="h-32 w-auto">
      <img src="/cert4.png" alt="Zertifikat 4" class="h-32 w-auto">
      <img src="/cert5.png" alt="Zertifikat 5" class="h-32 w-auto">
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
.business {
  width: 400px;
  height: 400px;
  left: 50%;
  top: 50%;
  margin-left: -200px;
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



<template>
  <section id="contact" class="bg-white dark:bg-gray-900 py-16 flex items-center justify-center min-h-screen">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div class="lg:w-2/3 md:w-1/2 bg-blue-300 dark:bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4655.938204499386!2d10.118531491470291!3d54.304497031917165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b256927af9e459%3A0x4e18b92351fd9fa5!2sDithmarscher%20Str.%2010%2C%2024113%20Kiel!5e0!3m2!1sde!2sde!4v1719218919000!5m2!1sde!2sde"
          style="filter: grayscale(0) contrast(1.2) opacity(0.6);"></iframe>
        <div class="bg-white dark:bg-gray-700 relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="font-bold text-gray-dark dark:text-gray-100">ADRESSE</h2>
            <p class="mt-1 text-gray-700 dark:text-gray-300">Dithmarscher Straße 10<br>24113 Kiel</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="font-bold text-gray-dark dark:text-gray-100">EMAIL</h2>
            <a href="mailto:web@pontis-it.com" class="text-primary dark:text-red-pontis leading-relaxed">web@pontis-it.com</a>
            <h2 class="font-bold text-gray-dark dark:text-gray-100 mt-4">PHONE</h2>
            <a href="tel:+4917212345678" class="leading-relaxed text-gray-700 dark:text-gray-300">+49 174 2719685</a>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white dark:bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-primary dark:text-red-pontis text-lg mb-2 font-medium">In Kontakt treten</h2>
        <p class="mb-5 text-gray-txt dark:text-gray-300">Haben Sie Fragen, Anregungen oder möchten Sie einfach nur Hallo sagen? Wir würden uns freuen, von Ihnen zu hören. Schicken Sie uns eine Nachricht und wir werden so schnell wie möglich auf Sie zurückkommen.</p>
        <div class="relative w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 mb-4">
          <div :style="{ width: progress + '%' }" class="bg-primary dark:bg-pontis-red h-full rounded-full transition-all duration-300">
            <span :style="{ color: progress > 0 ? 'white' : '#B32222' }" class="absolute left-2 top-1/2 transform -translate-y-1/2 font-bold">{{ progress.toFixed(0) }}%</span>
          </div>
        </div>
        <form @submit.prevent="onSubmit" class="space-y-4">
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-dark dark:text-gray-300">Name</label>
            <input type="text" id="name" v-model="form.name" required class="w-full bg-white dark:bg-gray-800 rounded border border-gray-txt dark:border-gray-600 text-base outline-none text-gray-txt dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-dark dark:text-gray-300">Email</label>
            <input type="email" id="email" v-model="form.email" required class="w-full bg-white dark:bg-gray-800 rounded border border-gray-txt dark:border-gray-600 text-base outline-none text-gray-txt dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="subject" class="leading-7 text-sm text-gray-dark dark:text-gray-300">Betreff</label>
            <input type="text" id="subject" v-model="form.subject" required class="w-full bg-white dark:bg-gray-800 rounded border border-gray-txt dark:border-gray-600 text-base outline-none text-gray-txt dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-dark dark:text-gray-300">Ihre Nachricht</label>
            <textarea id="message" v-model="form.message" required class="w-full bg-white dark:bg-gray-800 rounded border border-gray-txt dark:border-gray-600 h-32 text-base outline-none text-gray-txt dark:text-gray-100 py-1 px-3 resize-none transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button type="submit" class="text-white bg-primary dark:bg-red-pontis border-0 py-3 px-6 focus:outline-none hover:bg-red-pontis-hover dark:hover:bg-red-pontis-hover rounded text-lg w-full transition-colors duration-200 ease-in-out">Senden</button>
        </form>
        <p v-if="formHasErrors" class="text-red mt-4">Bitte füllen Sie alle erforderlichen Felder aus.</p>
        <p v-if="formSuccessMessage" class="text-green mt-4">{{ formSuccessMessage }}</p>
        <p v-if="formErrorMessage" class="text-red mt-4">{{ formErrorMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      formHasErrors: false,
      formSuccessMessage: "",
      formErrorMessage: ""
    };
  },
  computed: {
    progress() {
      let filledFields = 0;
      for (const key in this.form) {
        if (this.form[key] !== "") filledFields++;
      }
      return (filledFields / Object.keys(this.form).length) * 100;
    }
  },
  methods: {
    async onSubmit() {
      if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
        this.formHasErrors = true;
        return;
      }

      this.formHasErrors = false;

      try {
        const response = await axios.post('/api/sendEmail', {
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message
        });

        if (response.data.success) {
          this.formSuccessMessage = "Ihre Nachricht wurde erfolgreich gesendet!";
          this.$router.push('/thank-you');
        } else {
          this.formErrorMessage = "Es gab ein Problem beim Senden Ihrer Nachricht.";
        }
      } catch (error) {
        console.error("Fehler beim Senden des Formulars:", error);
        this.formErrorMessage = "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
      }
    }
  }
};
</script>

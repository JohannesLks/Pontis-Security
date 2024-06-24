<!-- components/ContactForm.vue -->
<template>
  <div class="container mx-auto p-4 bg-white dark:bg-gray-900 dark:pb-40 rounded-lg shadow-md max-w-xl">
    <!-- Überschrift des Formulars -->
    <h2 class="text-2xl text-primary dark:text-indigo-300 text-center mb-4 font-bold">Bewerbungsformular für Systemadministrator*in</h2>
    <!-- Logo -->
    <div class="flex justify-center mb-4">
      <img src="/white.svg" alt="Pontis IT-Consulting Logo" class="w-32 h-auto" />
    </div>
    <!-- Navigation zwischen den Formularabschnitten -->
    <div class="flex justify-around mb-4">
      <div @click="setActiveStage('experience')" :class="{ 'bg-blue-100 dark:bg-indigo-900 border-blue-500 dark:border-indigo-500': activeStage === 'experience', 'bg-green-100 dark:bg-green-900': isCompleted('experience') }" class="p-2 rounded-lg cursor-pointer transition-colors">
        <h3 class="text-center text-sm font-semibold text-blue-700 dark:text-blue-200">1. Berufserfahrung</h3>
      </div>
      <div v-if="isCompleted('experience')" @click="setActiveStage('skills')" :class="{ 'bg-blue-100 dark:bg-indigo-900 border-blue-500 dark:border-indigo-500': activeStage === 'skills', 'bg-green-100 dark:bg-green-900': isCompleted('skills') }" class="p-2 rounded-lg cursor-pointer transition-colors">
        <h3 class="text-center text-sm font-semibold text-blue-700 dark:text-blue-200">2. Technische Fähigkeiten</h3>
      </div>
      <div v-if="isCompleted('skills')" @click="setActiveStage('education')" :class="{ 'bg-blue-100 dark:bg-indigo-900 border-blue-500 dark:border-indigo-500': activeStage === 'education', 'bg-green-100 dark:bg-green-900': isCompleted('education') }" class="p-2 rounded-lg cursor-pointer transition-colors">
        <h3 class="text-center text-sm font-semibold text-blue-700 dark:text-blue-200">3. Bildungsabschlüsse</h3>
      </div>
      <div v-if="isCompleted('education')" @click="setActiveStage('personal')" :class="{ 'bg-blue-100 dark:bg-indigo-900 border-blue-500 dark:border-indigo-500': activeStage === 'personal', 'bg-green-100 dark:bg-green-900': isCompleted('personal') }" class="p-2 rounded-lg cursor-pointer transition-colors">
        <h3 class="text-center text-sm font-semibold text-blue-700 dark:text-blue-200">4. Persönliche Informationen</h3>
      </div>
      <div v-if="isCompleted('personal')" @click="setActiveStage('review')" :class="{ 'bg-blue-100 dark:bg-indigo-900 border-blue-500 dark:border-indigo-500': activeStage === 'review', 'bg-green-100 dark:bg-green-900': isCompleted('review') }" class="p-2 rounded-lg cursor-pointer transition-colors">
        <h3 class="text-center text-sm font-semibold text-blue-700 dark:text-blue-200">5. Überprüfung und Absenden</h3>
      </div>
    </div>
    <!-- Formularabschnitte -->
    <div class="transition-all duration-300">
      <div v-if="activeStage === 'experience'" class="form-content">
        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Berufserfahrung</h3>
        <form @submit.prevent="nextStage('skills')" class="space-y-2">
          <div>
            <label for="experience" class="block mb-1 text-gray-700 dark:text-gray-300">Jahre der Erfahrung als Systemadministrator:</label>
            <select id="experience" v-model="form.experience" required class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">
              <option value="0">0 Jahre</option>
              <option value="1-3">1-3 Jahre</option>
              <option value="4-10">4-10 Jahre</option>
              <option value=">10">>10 Jahre</option>
            </select>
          </div>
          <button type="submit" class="w-full py-2 bg-primary text-white rounded-md hover:bg-secondary dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">Weiter</button>
        </form>
      </div>
      <div v-if="activeStage === 'skills'" class="form-content">
        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Technische Fähigkeiten</h3>
        <form @submit.prevent="nextStage('education')" class="space-y-2">
          <div>
            <label for="skills" class="block mb-1 text-gray-700 dark:text-gray-300">Liste der technischen Fähigkeiten:</label>
            <textarea id="skills" v-model="form.skills" placeholder="Trennen Sie verschiedene Fähigkeiten mit einem Komma." required class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500"></textarea>
          </div>
          <button type="submit" class="w-full py-2 bg-primary text-white rounded-md hover:bg-secondary dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">Weiter</button>
        </form>
      </div>
      <div v-if="activeStage === 'education'" class="form-content">
        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Bildungsabschlüsse</h3>
        <form @submit.prevent="nextStage('personal')" class="space-y-2">
          <div>
            <label for="education" class="block mb-1 text-gray-700 dark:text-gray-300">Höchster erreichter Bildungsabschluss:</label>
            <select id="education" v-model="form.education" required class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">
              <option value="Bachelor">Bachelor</option>
              <option value="Master">Master</option>
              <option value="Doktor">Doktor</option>
              <option value="Andere">Andere</option>
            </select>
          </div>
          <button type="submit" class="w-full py-2 bg-primary text-white rounded-md hover:bg-secondary dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">Weiter</button>
        </form>
      </div>
      <div v-if="activeStage === 'personal'" class="form-content">
        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Persönliche Informationen</h3>
        <form @submit.prevent="nextStage('review')" class="space-y-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label for="firstname" class="block mb-1 text-gray-700 dark:text-gray-300">Vorname:</label>
              <input type="text" id="firstname" v-model="form.firstname" required class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">
            </div>
            <div>
              <label for="lastname" class="block mb-1 text-gray-700 dark:text-gray-300">Nachname:</label>
              <input type="text" id="lastname" v-model="form.lastname" required class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label for="email" class="block mb-1 text-gray-700 dark:text-gray-300">E-Mail-Adresse:</label>
              <input type="email" id="email" v-model="form.email" required class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">
            </div>
            <div>
              <label for="phone" class="block mb-1 text-gray-700 dark:text-gray-300">Telefonnummer:</label>
              <input type="number" id="phone" v-model.number="form.phone" required class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">
            </div>
          </div>
          <button type="submit" class="w-full py-2 bg-primary text-white rounded-md hover:bg-secondary dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">Weiter</button>
        </form>
      </div>
      <div v-if="activeStage === 'review'" class="form-content">
        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Überprüfen und Absenden</h3>
        <form @submit.prevent="submitForm" class="space-y-2">
          <div class="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <p><strong>Vorname:</strong> {{ form.firstname }}</p>
            <p><strong>Nachname:</strong> {{ form.lastname }}</p>
            <p><strong>E-Mail:</strong> {{ form.email }}</p>
            <p><strong>Telefonnummer:</strong> {{ form.phone }}</p>
            <p><strong>Erfahrung:</strong> {{ form.experience }} Jahre</p>
            <p><strong>Fähigkeiten:</strong> {{ form.skills }}</p>
            <p><strong>Bildungsabschluss:</strong> {{ form.education }}</p>
          </div>
          <button type="submit" class="w-full py-2 bg-primary text-white rounded-md hover:bg-secondary dark:hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-indigo-500">Bewerbung absenden</button>
        </form>
        <p v-if="formHasErrors" class="text-red-500 dark:text-red-400 mt-2 text-center">Bitte füllen Sie alle erforderlichen Felder aus.</p>
        <p v-if="formSuccessMessage" class="text-green-500 dark:text-green-400 mt-2 text-center">{{ formSuccessMessage }}</p>
        <p v-if="formErrorMessage" class="text-red-500 dark:text-red-400 mt-2 text-center">{{ formErrorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from '@/supabase';

export default {
  name: "QualificationForm",
  data() {
    return {
      activeStage: 'experience', // Anfangsabschnitt ist 'experience'
      form: {
        firstname: "",
        lastname: "",
        email: "",
        phone: null,
        experience: "",
        skills: "",
        education: "",
      },
      formHasErrors: false,
      formSuccessMessage: "",
      formErrorMessage: "",
    };
  },


  methods: {
    // Setzt den aktiven Abschnitt des Formulars
    setActiveStage(stage) {
      if (this.isCompleted(stage) || this.activeStage === stage) {
        this.activeStage = stage;
      }
    },
    // Wechselt zum nächsten Abschnitt, wenn der aktuelle Abschnitt gültig ist
    nextStage(stage) {
      if (this.validateStage()) {
        this.activeStage = stage;
      }
    },
    /*
    ==========================================
    🚀 BEGINN: Maschinell erstellter Code 🚀
    Software: ChatGPT (OpenAI)
    ==========================================
    */
    validateStage() {
      this.formHasErrors = false;
      if (this.activeStage === 'personal' && (!this.form.firstname || !this.form.lastname || !this.form.email || this.form.phone === null)) {
        this.formHasErrors = true;
        return false;
      }
      if (this.activeStage === 'experience' && !this.form.experience) {
        this.formHasErrors = true;
        return false;
      }
      if (this.activeStage === 'skills' && !this.form.skills) {
        this.formHasErrors = true;
        return false;
      }
      if (this.activeStage === 'education' && !this.form.education) {
        this.formHasErrors = true;
        return false;
      }
      return true;
    },
    // Prüft, ob ein Abschnitt abgeschlossen ist
    isCompleted(stage) {
      switch(stage) {
        case 'personal':
          return this.form.firstname && this.form.lastname && this.form.email && this.form.phone !== null;
        case 'experience':
          return this.form.experience;
        case 'skills':
          return this.form.skills;
        case 'education':
          return this.form.education;
        case 'review':
          return this.form.firstname && this.form.lastname && this.form.email && this.form.phone !== null && this.form.experience && this.form.skills && this.form.education;
        default:
          return false;
      }
    },
    /*
    ==========================================
    🏁 ENDE: Maschinell erstellter Code 🏁
    Software: ChatGPT (OpenAI)
    ==========================================
    🔍 Qualität und Treffgenauigkeit:
    Der generierte Code entsprach anfangs nicht den Wünschen, aber nach einigen manuellen Anpassungen wurde er funktional und passte zum Design des Formulars. Die Validierung der einzelnen Formularabschnitte wurde korrekt implementiert.

    🔧 Fehlende Aspekte:
    - Der generierte Code war nicht sofort funktionsfähig und musste manuell angepasst werden, um die gewünschte Funktionalität zu erreichen.

    ✏️ Manuelle Anpassungen:
    - Angepasst wurde die Validierung der einzelnen Formularabschnitte, um sicherzustellen, dass alle erforderlichen Felder ausgefüllt sind, bevor der Benutzer zum nächsten Abschnitt wechseln kann.
    */
    // Formular senden
    async submitForm() {
      if (!this.isCompleted('review')) {
        this.formHasErrors = true;
        return;
      }
      this.formHasErrors = false;

      const formData = {
        ...this.form,
        phone: parseInt(this.form.phone, 10),
        experience: this.form.experience
      };

      try {
        const { error } = await supabase
          .from('bewerbung')
          .insert([formData]);

        if (error) {
          console.error("Error details:", error);
          this.formErrorMessage = error.message;
        } else {
          this.$router.push('/thank-you');
        }
      } catch (error) {
        console.error("Fehler beim Senden des Formulars:", error);
        this.formErrorMessage = "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
      }
    },
  },
};
</script>

<style scoped>
.form-content {
  transition: opacity 0.3s ease-in-out;
}
.dark img.dark-mode {
      display: block;
    }
    .dark img.light-mode {
      display: none;
    }
    :not(.dark) img.dark-mode {
      display: none;
    }
    :not(.dark) img.light-mode {
      display: block;
    }
</style>


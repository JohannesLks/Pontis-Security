<template>
    <div>
      <div class="mb-4 flex flex-wrap gap-2">
        <label for="sortCriteria" class="w-full sm:w-auto">Sort by:</label>
        <select id="sortCriteria" v-model="sortCriteria" @change="sortTickets"
          class="w-full sm:w-auto p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-gray-300">
          <option value="experience">Experience</option>
          <option value="education">Education</option>
        </select>
        <label for="sortOrder" class="w-full sm:w-auto">Order:</label>
        <select id="sortOrder" v-model="sortOrder" @change="sortTickets"
          class="w-full sm:w-auto p-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-gray-300">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="ticket in sortedTickets" :key="ticket.id"
          class="border p-4 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer flex flex-col justify-between"
          @click="selectTicket(ticket)">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ ticket.firstname }} {{ ticket.lastname }}</h3>
            <div class="mt-2 space-y-2">
              <div class="flex justify-between">
                <p class="font-bold text-gray-900 dark:text-gray-100">Email:</p>
                <p class="truncate text-gray-700 dark:text-gray-300">{{ ticket.email }}</p>
              </div>
              <div class="flex justify-between">
                <p class="font-bold text-gray-900 dark:text-gray-100">Phone:</p>
                <p class="truncate text-gray-700 dark:text-gray-300">{{ ticket.phone }}</p>
              </div>
              <div class="flex justify-between">
                <p class="font-bold text-gray-900 dark:text-gray-100">Experience:</p>
                <p class="truncate text-gray-700 dark:text-gray-300">{{ ticket.experience }}</p>
              </div>
              <div class="flex justify-between">
                <p class="font-bold text-gray-900 dark:text-gray-100">Skills:</p>
                <p class="truncate text-gray-700 dark:text-gray-300">{{ ticket.skills }}</p>
              </div>
              <div class="flex justify-between">
                <p class="font-bold text-gray-900 dark:text-gray-100">Education:</p>
                <p class="truncate text-gray-700 dark:text-gray-300">{{ ticket.education }}</p>
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <button @click.stop="inviteTicket(ticket)" :disabled="isNameInCalendar(ticket)"
              :class="{ 'bg-gray-500': isNameInCalendar(ticket), 'bg-primary': !isNameInCalendar(ticket) }"
              class="text-white px-4 py-2 rounded-full">
              {{ isNameInCalendar(ticket) ? 'Invited' : 'Invite' }}
            </button>
            <button @click.stop="confirmDelete(ticket.id)" class="bg-red text-white px-4 py-2 rounded-full">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tickets: Array,
      calendarEvents: Array,
    },
    data() {
      return {
        sortCriteria: 'experience',
        sortOrder: 'asc',
      };
    },
    computed: {
/*
==========================================
🚀 BEGINN: Maschinell erstellter Code 🚀
Software: ChatGPT (OpenAI)
==========================================
*/
      sortedTickets() {
        return this.tickets.sort((a, b) => {
          let valueA, valueB;
          if (this.sortCriteria === 'experience') {
            valueA = this.experienceValue(a.experience);
            valueB = this.experienceValue(b.experience);
          } else if (this.sortCriteria === 'education') {
            valueA = this.educationValue(a.education);
            valueB = this.educationValue(b.education);
          }
          return this.sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
        });
      }
    },
    methods: {
      experienceValue(experience) {
        switch (experience) {
          case '0':
            return 0;
          case '1-3':
            return 2;
          case '4-10':
            return 7;
          case '>10':
            return 11;
          default:
            return 0;
        }
      },
      educationValue(education) {
        switch (education) {
          case 'Bachelor':
            return 1;
          case 'Master':
            return 2;
          case 'Doktor':
            return 3;
          default:
            return 0;
        }
      },
/*
==========================================
🏁 ENDE: Maschinell erstellter Code 🏁
Software: ChatGPT (OpenAI)
==========================================
🔍 Qualität und Treffgenauigkeit:
Der generierte Code hat nache einigen Versuchen funktioniert. Es sortiert die Tickets nach den Kriterien "Experience" und "Education" und ermöglicht die Auswahl der Sortierreihenfolge. Die Verwendung von Switch-Statements ist hier angemessen und sinnvoll. 

🔧 Fehlende Aspekte:
- Die KI hätte vorschlagen können, die Datenbank Werte als Ziffern zu speichern, um die Sortierung zu vereinfachen.
✏️ Manuelle Anpassungen:
- Einbinden der Sortierlogik in die bestehende Seite.
*/
      selectTicket(ticket) {
        this.$emit('select-ticket', ticket);
      },
      inviteTicket(ticket) {
        this.$emit('invite-ticket', ticket);
      },
      confirmDelete(ticketId) {
        this.$emit('confirm-delete', ticketId);
      },
      isNameInCalendar(ticket) {
        const fullName = `${ticket.firstname} ${ticket.lastname}`;
        return this.calendarEvents.some(event => event.title === fullName);
      }
    }
  };
  </script>
  
  <style scoped></style>
  
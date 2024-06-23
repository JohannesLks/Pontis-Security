<template>
  <!--
  ==========================================
  🚀 BEGINN: Maschinell erstellter Code 🚀
  Software: ChatGPT (OpenAI)
  ==========================================
  -->
    <div class="bg-white dark:bg-gray-900 py-16">
      <div class="container mx-auto max-w-screen-xl px-4 relative">
        <!-- Hauptüberschrift des Dashboards -->
        <h1 class="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left text-gray-900 dark:text-gray-100">Backend Ticket Dashboard</h1>
        <div class="mb-8 flex flex-wrap justify-center md:justify-start items-center space-y-2">
          <div class="flex justify-center md:justify-start w-full">
            <!-- Tabs für die verschiedenen Dashboard-Bereiche -->
            <button :class="{ 'bg-primary': currentTab === 'bewerbung', 'bg-secondary': currentTab !== 'bewerbung' }"
              class="flex-grow h-10 md:h-12 max-w-xs text-center text-white font-semibold rounded-full transition-colors flex items-center justify-center m-1"
              @click="currentTab = 'bewerbung'">Bewerbung</button>
            <button :class="{ 'bg-primary': currentTab === 'kontakt', 'bg-secondary': currentTab !== 'kontakt' }"
              class="flex-grow h-10 md:h-12 max-w-xs text-center text-white font-semibold rounded-full transition-colors flex items-center justify-center m-1"
              @click="currentTab = 'kontakt'">Kontakt</button>
          </div>
          <div class="flex justify-center md:justify-start w-full">
            <button :class="{ 'bg-primary': currentTab === 'kalender', 'bg-secondary': currentTab !== 'kalender' }"
              class="flex-grow h-10 md:h-12 max-w-xs text-center text-white font-semibold rounded-full transition-colors flex items-center justify-center m-1"
              @click="currentTab = 'kalender'">Kalender</button>
            <button v-if="isAdmin" :class="{ 'bg-primary': currentTab === 'admin', 'bg-secondary': currentTab !== 'admin' }"
              class="flex-grow h-10 md:h-12 max-w-xs text-center text-white font-semibold rounded-full transition-colors flex items-center justify-center m-1"
              @click="currentTab = 'admin'">Admin</button>
          </div>
        </div>
  
        <!-- Komponenten basierend auf dem ausgewählten Tab -->
        <bewerbung v-if="currentTab === 'bewerbung'" :tickets="tickets" :calendarEvents="calendarEvents"
          @select-ticket="selectTicket" @invite-ticket="inviteTicket" @confirm-delete="confirmDeleteTicket" />
        <kontakt v-if="currentTab === 'kontakt'" :kontaktTickets="kontaktTickets" @select-ticket="selectKontaktTicket"
          @reply-to-ticket="replyToTicket" @confirm-delete-kontakt="confirmDeleteKontaktTicket" />
        <kalender v-if="currentTab === 'kalender'" :calendarEvents="calendarEvents"
          @confirm-delete-event="confirmDeleteEvent" />
        <admin v-if="currentTab === 'admin'" :tickets="tickets" />
  
        <!-- Details-Modals für ausgewählte Tickets -->
        <div v-if="selectedTicket && currentTab === 'bewerbung'" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          @click="clearSelection">
          <div class="bg-white dark:bg-gray-800 p-6 border shadow-lg rounded-lg max-w-lg w-full" @click.stop>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Details for {{ selectedTicket.firstname || selectedTicket.name }} {{
            selectedTicket.lastname || '' }}</h2>
            <!-- Ticket-Details -->
            <label class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Email:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedTicket.email }}</p>
            </label>
            <label v-if="selectedTicket.phone !== undefined" class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Phone:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedTicket.phone }}</p>
            </label>
            <label v-if="selectedTicket.experience !== undefined" class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Experience:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedTicket.experience }}</p>
            </label>
            <label v-if="selectedTicket.skills !== undefined" class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Skills:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedTicket.skills }}</p>
            </label>
            <label v-if="selectedTicket.education !== undefined" class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Education:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedTicket.education }}</p>
            </label>
            <label v-if="selectedTicket.subject !== undefined" class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Subject:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedTicket.subject }}</p>
            </label>
            <label v-if="selectedTicket.message !== undefined" class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Message:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedTicket.message }}</p>
            </label>
            <div class="mt-4 flex flex-col space-y-2">
              <button @click="clearSelection" class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-full">Close</button>
            </div>
          </div>
        </div>
  
        <div v-if="selectedKontaktTicket && currentTab === 'kontakt'" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          @click="clearKontaktSelection">
          <div class="bg-white dark:bg-gray-800 p-6 border shadow-lg rounded-lg max-w-lg w-full" @click.stop>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Details for {{ selectedKontaktTicket.name }}</h2>
            <!-- Kontakt-Ticket-Details -->
            <label class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Email:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedKontaktTicket.email }}</p>
            </label>
            <label class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Subject:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedKontaktTicket.subject }}</p>
            </label>
            <label class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Message:</span>
              <p class="mt-1 block w-full text-gray-900 dark:text-gray-100">{{ selectedKontaktTicket.message }}</p>
            </label>
            <div class="mt-4 flex flex-col space-y-2">
              <button @click="clearKontaktSelection" class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-full">Close</button>
            </div>
          </div>
        </div>
  
        <!-- E-Mail Antwort-Fenster -->
        <div v-if="showEmailReplyWindow" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="showEmailReplyWindow = false">
          <div class="bg-white dark:bg-gray-800 p-6 border shadow-lg rounded-lg max-w-lg w-full" @click.stop>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Reply to {{ selectedKontaktTicket.name }}</h2>
            <label class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Subject:</span>
              <input v-model="emailSubject" type="text" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            </label>
            <label class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Message:</span>
              <textarea v-model="emailBody" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
            </label>
            <div class="mt-4 flex justify-between">
              <button @click="sendReply" class="bg-green-500 text-white px-4 py-2 rounded-full">Send</button>
              <button @click="showEmailReplyWindow = false" class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-full">Cancel</button>
            </div>
          </div>
        </div>
  
        <!-- Datumswähler für Einladung -->
        <div v-if="showDatePicker" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeDatePicker">
          <div class="bg-white dark:bg-gray-800 p-6 border shadow-lg rounded-lg max-w-lg w-full" @click.stop>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Invite {{ selectedTicket.firstname }} {{ selectedTicket.lastname }}</h2>
            <label class="block mt-4">
              <span class="text-gray-700 dark:text-gray-300">Select Date and Time:</span>
              <flat-pickr v-model="selectedDate" :config="datePickerConfig" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"></flat-pickr>
            </label>
            <div class="mt-4 flex justify-between">
              <button @click="sendInvitation" class="bg-green-500 text-white px-4 py-2 rounded-full">Send Invitation</button>
              <button @click="closeDatePicker" class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-full">Cancel</button>
            </div>
          </div>
        </div>
  
        <!-- Bestätigungsmodals für das Löschen -->
        <div v-if="showConfirmDelete" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white dark:bg-gray-800 p-6 border shadow-lg rounded-lg max-w-lg w-full" @click.stop>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Are you sure you want to delete this ticket?</h2>
            <div class="mt-4 flex justify-between">
              <button @click="deleteTicket(selectedTicketId)" class="bg-red text-white px-4 py-2 rounded-full">Delete</button>
              <button @click="cancelDelete" class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-full">Cancel</button>
            </div>
          </div>
        </div>
  
        <div v-if="showConfirmDeleteKontakt" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white dark:bg-gray-800 p-6 border shadow-lg rounded-lg max-w-lg w-full" @click.stop>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Are you sure you want to delete this kontakt ticket?</h2>
            <div class="mt-4 flex justify-between">
              <button @click="deleteKontaktTicket(selectedKontaktTicketId)" class="bg-red text-white px-4 py-2 rounded-full">Delete</button>
              <button @click="cancelDeleteKontakt" class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-full">Cancel</button>
            </div>
          </div>
        </div>
  
        <div v-if="showConfirmDeleteEvent" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div class="bg-white dark:bg-gray-800 p-6 border shadow-lg rounded-lg max-w-lg w-full" @click.stop>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Are you sure you want to delete this event?</h2>
            <div class="mt-4 flex justify-between">
              <button @click="deleteCalendarEvent(selectedEventId)" class="bg-red text-white px-4 py-2 rounded-full">Delete</button>
              <button @click="cancelDeleteEvent" class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-full">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!--
  ==========================================
  🏁 ENDE: Maschinell erstellter Code 🏁
  Software: ChatGPT (OpenAI)
  ==========================================
  🔍 Qualität und Treffgenauigkeit:
  Der generierte Code wurde am Anfang der Entwicklung des Backends als Grundlage verwendet. Das Ergebnis war gut um darauf aufzubauen, aber es mussten viele manuelle Anpassungen und Erweiterungen vorgenommen werden, um die Funktionalität und das Design zu verbessern.
  
  🔧 Fehlende Aspekte:
  - diverse
  
  ✏️ Manuelle Anpassungen:
   Der Code wurde in mehrere Komponenten aufgeteilt, um die Wartbarkeit und Lesbarkeit zu verbessern. Es wurden auch Funktionen hinzugefügt, um E-Mails zu senden, Benutzeraktionen zu bestätigen und die Datenbank zu aktualisieren. Die Benutzeroberfläche wurde verbessert, um eine bessere Benutzererfahrung zu bieten. Insgesamt war der generierte Code ein guter Ausgangspunkt, aber es waren viele manuelle Anpassungen erforderlich, um das Backend voll funktionsfähig zu machen.
  -->
  </template>
  
  <script>
  import Bewerbung from '@/components/Bewerbung.vue';
  import Kontakt from '@/components/Kontakt.vue';
  import Kalender from '@/components/Kalender.vue';
  import Admin from '@/components/Admin.vue';
  import { supabase } from '@/supabase';
  import axios from 'axios';
  import FlatPickr from 'vue-flatpickr-component';
  import dayjs from 'dayjs';
  import 'flatpickr/dist/flatpickr.css';
  
  export default {
    components: {
      Bewerbung,
      Kontakt,
      Kalender,
      Admin,
      FlatPickr,
    },
    data() {
      return {
        tickets: [],
        kontaktTickets: [],
        calendarEvents: [],
        selectedTicket: null,
        selectedKontaktTicket: null,
        selectedDate: null,
        showConfirmDeleteEvent: false,
        selectedEventId: null,
        showEmailReplyWindow: false,
        showConfirmDelete: false,
        showConfirmDeleteKontakt: false,
        selectedTicketId: null,
        selectedKontaktTicketId: null,
        datePickerOpen: false,
        currentTab: 'bewerbung',
        emailSubject: '',
        emailBody: '',
        showDatePicker: false,
        datePickerConfig: {
          enableTime: true,
          dateFormat: 'Y-m-d H:i',
          time_24hr: true,
          static: true,
        },
        user: null,
        isAdmin: false,
        loading: false,
        showSuccessMessage: false,
        successMessage: '',
      };
    },
    methods: {
      // Tickets aus der Datenbank abrufen
      async fetchTickets() {
        const { data, error } = await supabase
          .from('bewerbung')
          .select('id, created_at, lastname, email, phone, experience, skills, education, firstname');
        if (error) {
          console.error('Error fetching tickets:', error);
        } else {
          this.tickets = data;
        }
      },
      // Kontakt-Tickets aus der Datenbank abrufen
      async fetchKontaktTickets() {
        const { data, error } = await supabase
          .from('kontakt')
          .select('id, created_at, name, email, subject, message');
        if (error) {
          console.error('Error fetching kontakt tickets:', error);
        } else {
          this.kontaktTickets = data;
        }
      },
      // Kalenderevents aus der Datenbank abrufen
      async fetchCalendarEvents() {
        const { data, error } = await supabase
          .from('kalender')
          .select('id, title, date, email');
        if (error) {
          console.error('Error fetching calendar events:', error);
        } else {
          this.calendarEvents = data;
        }
      },
      // Ein Ticket auswählen
      selectTicket(ticket) {
        this.selectedTicket = { ...ticket };
      },
      // Ein Kontakt-Ticket auswählen
      selectKontaktTicket(ticket) {
        this.selectedKontaktTicket = { ...ticket };
      },
      // Auswahl des aktuellen Tickets löschen
      clearSelection() {
        this.selectedTicket = null;
      },
      // Auswahl des aktuellen Kontakt-Tickets löschen
      clearKontaktSelection() {
        this.selectedKontaktTicket = null;
      },
      // Einladung für ein Ticket erstellen
      inviteTicket(ticket) {
        this.selectedTicket = { ...ticket };
        this.showDatePicker = true;
      },
      // Datumswähler schließen
      closeDatePicker() {
        this.showDatePicker = false;
        this.selectedTicket = null;
      },
      // Einladung senden
      async sendInvitation() {
        if (!this.selectedTicket || !this.selectedDate) {
          console.error('No ticket selected or date not set');
          return;
        }
  
        this.loading = true;
  
        const formattedDate = dayjs(this.selectedDate).format('MMMM D, YYYY HH:mm');
        const fullName = `${this.selectedTicket.firstname} ${this.selectedTicket.lastname}`;
        const email = this.selectedTicket.email;
        const { data, error } = await supabase
          .from('kalender')
          .insert([{ title: fullName, date: this.selectedDate, email: email }]);
  
        if (error) {
          console.error('Error adding calendar event:', error);
        } else {
          console.log('Calendar event added successfully:', data);
        }
  
        try {
          const response = await axios.post('/api/send-email', {
            to: email,
            subject: 'Invitation',
            html: `<strong>You are invited!</strong><br>Date and Time: ${formattedDate} <br>We are looking forward to seeing you!<br>You can join the meeting <a href="https://example.com/meeting">here</a>.<br>Best regards, Pontis IT-Consulting`,
          });
  
          if (response.data.error) {
            console.error('Error sending email:', response.data.error);
          } else {
            console.log('Email sent successfully:', response.data);
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
  
        this.loading = false;
        this.showDatePicker = false;
        this.selectedTicket = null;
        this.successMessage = 'The invitation has been sent successfully.';
        this.showSuccessMessage = true;
      },
      // Bestätigung zum Löschen eines Tickets anzeigen
      confirmDeleteTicket(ticketId) {
        this.selectedTicketId = ticketId;
        this.showConfirmDelete = true;
      },
      // Ein Ticket löschen
      async deleteTicket(ticketId) {
        const ticketToDelete = this.tickets.find(ticket => ticket.id === ticketId);
        if (!ticketToDelete) {
          console.error('Ticket not found');
          return;
        }
  
        const { error } = await supabase
          .from('bewerbung')
          .delete()
          .eq('id', ticketId);
        if (error) {
          console.error('Error deleting ticket:', error);
        } else {
          this.tickets = this.tickets.filter(ticket => ticket.id !== ticketId);
          this.showConfirmDelete = false;
          this.selectedTicketId = null;
  
          try {
            const response = await axios.post('/api/send-email', {
              to: ticketToDelete.email,
              subject: 'Absage zu Ihrer Bewerbung',
              html: `<strong>Ihre Bewerbung wurde abgelehnt.</strong><br>Wir bedauern, Ihnen mitteilen zu müssen, dass Ihre Bewerbung abgelehnt wurde.<br>Best regards, Pontis IT-Consulting`,
            });
            if (response.data.error) {
              console.error('Error sending email:', response.data.error);
            } else {
              console.log('Cancellation email sent successfully:', response.data);
            }
          } catch (error) {
            console.error('Error sending email:', error);
          }
        }
      },
      // Löschbestätigung abbrechen
      cancelDelete() {
        this.showConfirmDelete = false;
        this.selectedTicketId = null;
      },
      // Bestätigung zum Löschen eines Kontakt-Tickets anzeigen
      confirmDeleteKontaktTicket(ticketId) {
        this.selectedKontaktTicketId = ticketId;
        this.showConfirmDeleteKontakt = true;
      },
      // Ein Kontakt-Ticket löschen
      async deleteKontaktTicket(ticketId) {
        const { error } = await supabase
          .from('kontakt')
          .delete()
          .eq('id', ticketId);
        if (error) {
          console.error('Error deleting kontakt ticket:', error);
        } else {
          this.kontaktTickets = this.kontaktTickets.filter(ticket => ticket.id !== ticketId);
          this.showConfirmDeleteKontakt = false;
          this.selectedKontaktTicketId = null;
        }
      },
      // Löschbestätigung für Kontakt-Ticket abbrechen
      cancelDeleteKontakt() {
        this.showConfirmDeleteKontakt = false;
        this.selectedKontaktTicketId = null;
      },
      // Bestätigung zum Löschen eines Kalenderevents anzeigen
      confirmDeleteEvent(eventId) {
        this.selectedEventId = eventId;
        this.showConfirmDeleteEvent = true;
      },
      // Ein Kalenderevent löschen
      async deleteCalendarEvent(eventId) {
        const event = this.calendarEvents.find(event => event.id === eventId);
        if (!event) {
          console.error('Event not found');
          return;
        }
        const { error } = await supabase
          .from('kalender')
          .delete()
          .eq('id', eventId);
        if (error) {
          console.error('Error deleting event:', error);
        } else {
          this.calendarEvents = this.calendarEvents.filter(event => event.id !== eventId);
          this.showConfirmDeleteEvent = false;
          this.selectedEventId = null;
          try {
            const formattedDate = dayjs(event.date).format('MMMM D, YYYY HH:mm');
            const response = await axios.post('/api/send-email', {
              to: event.email,
              subject: 'Absage des Termins',
              html: `<strong>Ihr Termin wurde abgesagt.</strong><br>Termin: ${formattedDate} <br>Wir bedauern, Ihnen mitteilen zu müssen, dass Ihr Termin abgesagt wurde.<br>Best regards, Pontis IT-Consulting`,
            });
            if (response.data.error) {
              console.error('Error sending email:', response.data.error);
            } else {
              console.log('Cancellation email sent successfully:', response.data);
            }
          } catch (error) {
            console.error('Error sending email:', error);
          }
        }
      },
      // Löschbestätigung für Kalenderevent abbrechen
      cancelDeleteEvent() {
        this.showConfirmDeleteEvent = false;
        this.selectedEventId = null;
      },
      // Antwort auf ein Kontakt-Ticket vorbereiten
      replyToTicket(ticket) {
        this.selectedKontaktTicket = { ...ticket };
        this.showEmailReplyWindow = true;
      },
      // Antwort-E-Mail senden
      async sendReply() {
        if (!this.emailSubject || !this.emailBody || !this.selectedKontaktTicket) {
          return;
        }
  
        this.loading = true;
  
        try {
          const response = await axios.post('/api/send-email', {
            to: this.selectedKontaktTicket.email,
            subject: this.emailSubject,
            html: this.emailBody,
          });
          if (response.data.error) {
            console.error('Error sending email:', response.data.error);
          } else {
            console.log('Email sent successfully:', response.data);
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
  
        this.loading = false;
        this.showEmailReplyWindow = false;
        this.selectedKontaktTicket = null;
        this.successMessage = 'The reply has been sent successfully.';
        this.showSuccessMessage = true;
      },
    },
    // Daten beim Laden der Komponente abrufen
    async mounted() {
      await this.fetchTickets();
      await this.fetchKontaktTickets();
      await this.fetchCalendarEvents();
  
      // Benutzerinformationen abrufen
      const { data: { user } } = await supabase.auth.getUser();
      this.user = user;
      if (user?.email === 'admin@fh-kiel.com') {
        this.isAdmin = true;
      }
    },
  };
  </script>
  
  <style scoped>
  .space-y-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }
  
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  </style>
  
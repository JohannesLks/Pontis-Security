<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="ticket in kontaktTickets" :key="ticket.id"
        class="border p-4 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer flex flex-col justify-between"
        @click="selectTicket(ticket)">
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">{{ ticket.name }}</h3>
          <div class="mt-2 space-y-2">
            <div class="flex justify-between">
              <p class="font-bold text-gray-900 dark:text-gray-100">Email:</p>
              <p class="truncate text-gray-700 dark:text-gray-300">{{ ticket.email }}</p>
            </div>
            <div class="flex justify-between">
              <p class="font-bold text-gray-900 dark:text-gray-100">Subject:</p>
              <p class="truncate text-gray-700 dark:text-gray-300">{{ ticket.subject }}</p>
            </div>
            <div class="flex justify-between">
              <p class="font-bold text-gray-900 dark:text-gray-100">Message:</p>
              <p class="truncate text-gray-700 dark:text-gray-300">{{ ticket.message }}</p>
            </div>
          </div>
        </div>
        <div class="mt-4 flex justify-between">
          <button @click.stop="replyToTicket(ticket)" class="bg-primary text-white px-4 py-2 rounded-full">Reply</button>
          <button @click.stop="confirmDelete(ticket.id)" class="bg-red text-white px-4 py-2 rounded-full">Delete</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      kontaktTickets: Array,
    },
    methods: {
      selectTicket(ticket) {
        this.$emit('select-ticket', ticket);
      },
      replyToTicket(ticket) {
        this.$emit('reply-to-ticket', ticket);
      },
      confirmDelete(ticketId) {
        this.$emit('confirm-delete-kontakt', ticketId);
      }
    }
  };
  </script>
  
  <style scoped></style>
  
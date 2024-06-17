<template>
  <div class="container mx-auto p-4 dark:pb-40">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="event in calendarEvents" :key="event.id" class="p-4 border rounded-lg dark:border-gray-700 dark:bg-gray-800">
        <h2 class="text-lg font-semibold">{{ event.title }}</h2>
        <p>Date: {{ formatDateTime(event.date) }}</p>
        <button @click="$emit('confirm-delete-event', event.id)" class="mt-2 px-4 py-2 bg-red text-white rounded-full">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: {
    calendarEvents: Array
  },
  methods: {
    formatDateTime(date) {
      return dayjs(date).format('MMMM D, YYYY HH:mm');
    }
  }
}
</script>

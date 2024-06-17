<template>
    <div>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="ticket in tickets" :key="ticket.id" class="p-4 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-800 w-full max-w-xs mx-auto overflow-hidden">
                <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">{{ ticket.firstname }} {{ ticket.lastname }}</h2>
                <p class="text-gray-700 dark:text-gray-300 truncate">Email: {{ ticket.email }}</p>
                <button @click.stop="editTicket(ticket)" class="mt-2 px-4 py-2 bg-primary text-white rounded-full">Edit</button>
            </div>
        </div>

        <div v-if="selectedTicket" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="clearSelection">
            <div class="bg-white dark:bg-gray-800 p-6 border shadow-lg rounded-lg max-w-lg w-full" @click.stop>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Edit Details for {{ selectedTicket.firstname }} {{ selectedTicket.lastname }}</h2>
                <label class="block mt-4">
                    <span class="text-gray-700 dark:text-gray-300">Email:</span>
                    <input v-model="selectedTicket.email" type="email" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                </label>
                <label v-if="selectedTicket.phone !== undefined" class="block mt-4">
                    <span class="text-gray-700 dark:text-gray-300">Phone:</span>
                    <input v-model="selectedTicket.phone" type="text" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                </label>
                <label v-if="selectedTicket.experience !== undefined" class="block mt-4">
                    <span class="text-gray-700 dark:text-gray-300">Experience:</span>
                    <input v-model="selectedTicket.experience" type="text" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                </label>
                <label v-if="selectedTicket.skills !== undefined" class="block mt-4">
                    <span class="text-gray-700 dark:text-gray-300">Skills:</span>
                    <input v-model="selectedTicket.skills" type="text" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                </label>
                <label v-if="selectedTicket.education !== undefined" class="block mt-4">
                    <span class="text-gray-700 dark:text-gray-300">Education:</span>
                    <input v-model="selectedTicket.education" type="text" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                </label>
                <label v-if="selectedTicket.subject !== undefined" class="block mt-4">
                    <span class="text-gray-700 dark:text-gray-300">Subject:</span>
                    <input v-model="selectedTicket.subject" type="text" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                </label>
                <label v-if="selectedTicket.message !== undefined" class="block mt-4">
                    <span class="text-gray-700 dark:text-gray-300">Message:</span>
                    <textarea v-model="selectedTicket.message" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"></textarea>
                </label>
                <div class="mt-4 flex flex-col space-y-2">
                    <button @click="saveTicket" class="bg-green-500 text-white px-4 py-2 rounded-full">Save</button>
                    <button @click="clearSelection" class="bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-full">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { supabase } from '@/supabase';
export default {
    props: {
        tickets: Array,
    },
    data() {
        return {
            selectedTicket: null,
        };
    },
    methods: {
        editTicket(ticket) {
            this.selectedTicket = { ...ticket };
        },
        clearSelection() {
            this.selectedTicket = null;
        },
        async saveTicket() {
            if (!this.selectedTicket) return;

            const { error } = await supabase
                .from('bewerbung')
                .update({
                    email: this.selectedTicket.email,
                    phone: this.selectedTicket.phone,
                    experience: this.selectedTicket.experience,
                    skills: this.selectedTicket.skills,
                    education: this.selectedTicket.education,
                    subject: this.selectedTicket.subject,
                    message: this.selectedTicket.message,
                })
                .eq('id', this.selectedTicket.id);

            if (error) {
                console.error('Error updating ticket:', error);
            } else {
                const index = this.tickets.findIndex(t => t.id === this.selectedTicket.id);
                if (index !== -1) {
                    this.tickets[index] = this.selectedTicket;
                }
                this.clearSelection();
            }
        },
    }
};
</script>

<style scoped></style>

<template>
    <NuxtLayout>
    <div>
        <section id="404-page" class="bg-white dark:bg-gray-900 py-16 flex items-center justify-center min-h-screen">
        <div class="mx-auto max-w-screen-lg px-4 md:px-8">
            <div class="grid gap-8 sm:grid-cols-2">
                <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
                    <h1 class="text-4xl font-bold text-primary mb-5 dark:text">404 - Seite nicht gefunden</h1>
                    <p class="text-gray-txt mb-5 dark:text-gray-400">Die von Ihnen gesuchte Seite wurde möglicherweise entfernt, umbenannt oder ist vorübergehend nicht verfügbar.</p>
                    <a href="/"
                        class="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded-full inline-block">Home</a>
                </div>
                <div class="relative h-80 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                    <img src="/public/404.webp" alt="404 Coffee Image" class="w-full h-auto">
                </div>
            </div>
        </div>
    </section>
    </div>
    </NuxtLayout>
</template>

<script>
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 20px;
}
</style>
<template>
  <section class="py-8 bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Search Bar -->
        <div class="relative mb-6">
          <input
            :value="searchQuery"
            @input="$emit('update:searchQuery', $event.target.value)"
            type="text"
            placeholder="ابحث في الموارد والتقارير..."
            class="w-full px-6 py-4 pr-12 border-2 border-gray-200 rounded-xl focus:border-primary-green focus:outline-none text-lg"
          >
          <svg
            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="$emit('update:selectedCategory', category.id)"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300',
              selectedCategory === category.id
                ? 'bg-warm-brown text-white shadow-lg'
                : 'bg-brown-100 text-brown-800 hover:bg-brown-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  searchQuery: String,
  selectedCategory: String,
  categories: Array
})

defineEmits(['update:searchQuery', 'update:selectedCategory'])
</script>

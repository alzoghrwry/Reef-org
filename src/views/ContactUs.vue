<template>
  <div>
    <!-- Use split components for better maintainability -->
    <HeroSection />

    <section class="py-20 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroSection from '../components/Contact/HeroSection.vue'
import ContactForm from '../components/Contact/ContactForm.vue'
import ContactDetails from '../components/Contact/ContactDetails.vue'

export default {
  name: 'ContactUs',
  components: {
    HeroSection,
    ContactForm,
    ContactDetails
  }
}
</script>

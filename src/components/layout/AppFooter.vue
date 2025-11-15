<template>
   <footer class="text-white py-16 bg-gradient-to-br from-brown-900 via-brown-900 to-brown-900">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- About Section -->
        <FooterAbout />
        
        <!-- Quick Links -->
        <FooterQuickLinks />
        
        <!-- Contact Information -->
        <FooterContactInfo />
        
        <!-- Newsletter Section -->
        <FooterNewsletter @subscribe="handleNewsletterSubscribe" />
      </div>
      
      <!-- Bottom Bar -->
      <FooterBottomBar />
    </div>
  </footer>
</template>

<script setup>
import FooterAbout from './footer/FooterAbout.vue'
import FooterQuickLinks from './footer/FooterQuickLinks.vue'
import FooterContactInfo from './footer/FooterContactInfo.vue'
import FooterNewsletter from './footer/FooterNewsletter.vue'
import FooterBottomBar from './footer/FooterBottomBar.vue'

const handleNewsletterSubscribe = (email) => {
  console.log('Subscribing to newsletter:', email)
  // Handle newsletter subscription logic here
}
</script>

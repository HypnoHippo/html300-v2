<template>
  <!-- Adding in router view and components -->
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  components: {
    NavBar,
    AppFooter
  }
}
</script>

<style lang="scss">

// Giving page not covered by components a dark background
body {
  background-color: #343a40;
}

// Adding dark bg, aligning text, and making text white on all pages
#app {
 text-align: center;
 background-color: #343a40;
 color: white;
}

// Styling nav bar and items
nav {
  padding: 30px;

  a {
    font-weight: bold;
  }
  
}

.nav-link {
  width: 100%;
  padding: 1rem;
}


// Making display class text responsive
@media screen and (max-width: 1200px) {
  .display-4 {
    font-size: calc(1.475rem + 2.7vw);
  }
} 
</style>

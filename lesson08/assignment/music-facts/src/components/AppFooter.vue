<template>
  <!-- Creating footer component with a Bs class for the top margin -->
  <footer class="mt-5">
    <p>Copyright &copy; {{ new Date().getFullYear() }} </p>
  </footer>
</template>

<script>
  export default {
  name: 'AppFooter',
  }
</script>

<style>
  /* Giving footer a dark background */
  footer {
    background-color: #343a40;
  }
</style>

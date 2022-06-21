<template>
  <!-- Creating jumbotron and adding bootstrap classes for white text, padding, and font style -->
  <div id="jumbotron-container">
    <b-jumbotron text-variant="white" class="p-4" id="jumbotron">
      <div class="container p-5">
        <h1 class="display-4">Welcome to the Art, Facts, and Music Pages!</h1>
        <p class="lead">If that didn't give it away, this is where you'll find some album art, random music facts, and some free music!</p>
      </div>
    </b-jumbotron>
    
    <!-- Adding continue button with bs classes for width, margin, and responsiveness -->
    <div class="container-fluid my-5">
      <b-button to="/album-art" class="w-50 my-5" id="continue-button">Continue</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>
  /* Changing colors of page items */
  #continue-button {
    background-color: #44b25d;
  }

  #jumbotron {
    background-color: #1da4ba;
  }

  #jumbotron-container {
    background-color: #343a40;
  }
</style>

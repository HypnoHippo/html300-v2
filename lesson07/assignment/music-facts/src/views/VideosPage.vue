<template>
  <div class="px-0">
    <!-- Adding page title with bs classes for font style and margin -->
    <h1 class="display-4 text-center my-5">Free Music!</h1>
      <!-- Creating video grid in responsive container with padding -->
      <div class="container-fluid p-4">
        <div class="row">
          <!-- Creating a grid item for each movie in the movies array -->
          <div
            :key="index"
            v-for="(movie, index) in movies"
            class="border col-sm-12 col-md-6 col-xl-3 bg-info p-3"
            id="space-fix"
            >

            <b-embed
              type="iframe"
              class="h-100 w-100"
              width="560"
              height="315"
              :src="movie.link"
              title="YouTube Video Player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></b-embed>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'VideosPage',

  data () {
    return {
      // Creating movies array with video sources
      movies: [
        {link: "https://www.youtube-nocookie.com/embed/janrRk5PvyI"},
        {link: "https://www.youtube-nocookie.com/embed/TB--z6lZf9E"},
        {link: "https://www.youtube-nocookie.com/embed/GloyvUzU7g0"},
        {link: "https://www.youtube-nocookie.com/embed/v0UQFyzU-ug"},
      ]
    }
  }
}
</script>

<style>
/* Fixing sizing issue on mobile view */
@media screen and (max-width: 767px) {
  #space-fix {
    margin-bottom: 1rem;
  }
}  
</style>
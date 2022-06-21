<template>
  <div>
    <!-- Adding page title with bs classes for font style and margin -->
    <h1 class="display-4 text-center my-5">Album Art</h1>
    <p class="text-center">I can't actually display album art due to copyright so here are some free-use images instead</p>
    
    <!-- Creating a responsive container for the carousel with bs classes for margin and padding -->
    <div class="mw-100 my-5 px-5">
      <!-- Creating carousel and styling text and images -->
      <b-carousel
        id="carousel-1"
        :interval="0"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        class="mx-auto"
        img-height="592"
        img-width="592"
      >
        <!-- Using v-for to create text slides with images -->
        <b-carousel-slide
          v-for="(art, index) in arts"
          :index="index"
          :key="art.id"
        > 
          <template #img>
            <img v-bind:src="art.src" alt="image slot" class="d-block w-100">
          </template>
          
          <!-- Bootstrap classes to change style on mobile -->
          <div class="carousel-caption d-none d-md-block">
            <h5>
              Photo by <a v-bind:href="art.artist">{{art.name}}</a> on <a v-bind:href="link">Unsplash</a>
            </h5>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    
    <!-- Source list that only shows on mobile size -->
    <div class="d-block d-xs-block d-md-none text-center">
      <p class="display-5">Sources:</p>
      <ol>
        <li>
          Photo by <a href="https://unsplash.com/@usgs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">USGS</a> on <a
            href="https://unsplash.com/s/photos/album-art?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@peteriveyphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Peter Ivey-Hansen</a> on <a
            href="https://unsplash.com/s/photos/album-art?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </li>
        <li>
          Photo by <a href="https://unsplash.com/@justbia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bia Andrade</a> on <a
            href="https://unsplash.com/s/photos/album-art?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </li>
      </ol>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'AlbumArt',
    data () {
    return {
      // Creating page variables and image array 
      link: "https://unsplash.com/",
      arts:[
       {artist: "https://unsplash.com/@usgs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'USGS', src: require("@/assets/usgs.jpeg")},
       {artist: "https://unsplash.com/@peteriveyphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'Peter Ivey-Hansen', src: require("@/assets/peter-ivey-hansen.jpeg")},
       {artist: "https://unsplash.com/@justbia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", name: 'Bia Andrade', src: require("@/assets/bia-andrade.jpeg")},
     ],
    }
  } 
}
</script>

<style scoped>
  /* Giving carousel a max size */
  #carousel-1 {
    max-width: 45rem;
  }
</style>
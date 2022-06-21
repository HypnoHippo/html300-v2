<template>
  <div>
    <!-- Adding page title with bs classes for font style and margin -->
    <h1 class="display-4 text-center my-5">Album Art</h1>
    <p class="text-center px-4">I can't actually display album art due to copyright so here are some free-use images instead</p>
    
    <!-- Creating a responsive container for the carousel with bs classes for margin and padding -->
    <div class="mw-100 my-5 px-5">
      <div>
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
        
          <!-- Using v-for to create carousel slides with new image component -->
          <art-comp
              v-for="art in arts"            
              :key="art.id"
              :art="art"
          ></art-comp>

        </b-carousel>
      </div>
    </div>  
    
    <!-- Source list that only shows on mobile size -->
    <div class="d-block d-xs-block d-md-none text-center">
      <p class="display-5">Sources:</p>
      <ol>
        <!-- Changed list items to generate with a v-for like the slides (same array) -->
        <li
          v-for="art in arts"
          :key="art.id"
          :art="art"
        >
        Photo by <a :href="art.artist">{{art.creator}}</a> on <a :href="link">Unsplash</a>
        </li>
      </ol>
    </div>
  </div>  
</template>

<script>
// Importing new image component and declaring it for use in this page
import ArtComp from '@/components/ArtComp.vue'

  export default {
    name: 'AlbumArt',
    components: {ArtComp},
    data () {
    return {
      link: "https://unsplash.com/",
      // Creating image array
      arts:[
       {id: 1, artist: "https://unsplash.com/@usgs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", creator: 'USGS', src: require("@/assets/usgs.jpeg"), alt: 'Red/blue aerial landscape photo', title: 'Photo by USGS'},
       {id: 2, artist: "https://unsplash.com/@peteriveyphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", creator: 'Peter Ivey-Hansen', src: require("@/assets/peter-ivey-hansen.jpeg"), alt: 'Marble bust on a purple background', title: 'Photo by Peter Ivey-Hansen'},
       {id: 3, artist: "https://unsplash.com/@justbia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", creator: 'Bia Andrade', src: require("@/assets/bia-andrade.jpeg"), alt: 'White/blue abstract art', title: 'Photo by Bia Andrade'},
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
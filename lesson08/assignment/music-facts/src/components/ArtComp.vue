<!-- Creating slide template -->
<template id="slide-template">
  <!-- Creating border toggle with mixin -->
  <div class="border-white" @click="toggleShowHide" :class="{border: !isHidden}">
    <b-carousel-slide
      :img-src="art.src"
      :img-alt="art.alt"
      :title="art.title"
    >
      <div class="d-none d-md-block">
        <h5>
            Photo by <a :href="art.artist">{{art.creator}}</a> on <a :href="link">Unsplash</a>
        </h5>
      </div>
    </b-carousel-slide>
  </div>  
</template>

<script>
// Creating showHide mixin and declaring it for use in the component
const showHide = {
   data() {
     return {
       isHidden: true
     }
   },
   methods: {
     toggleShowHide() {
       this.isHidden = !this.isHidden;
     }
   }
 }

export default {
  name: 'ArtComp',
  template: '#slide-template',
  mixins: [showHide],
  props: ['art'],
      id: {
          type: Number,
          required: true
      },
      src: {
        type: URL,
        required: true,
      },
      alt: {
        type: String,
        required: true,
        default: "Image Slot"
      },
      title: {
          type: String,
          required: true,
          default: "Free Use Image"
      },
      artist: {
          type: URL,
          required: true,
      },
      creator: {
          type: String,
          required:true,
      },
  data () {
    return {
    link: "https://unsplash.com/",
    }
  }   
}
</script>
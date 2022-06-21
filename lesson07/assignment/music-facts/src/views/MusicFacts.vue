<template>
  <div>
      <!-- Adding page title with bs classes for font style and margin -->
      <h1 class="display-4 text-center my-5">Music Facts</h1>
  
      <!-- Creating accordion using v-for to create cards. -->
      <div class="accordion" role="tablist">
        <div :key="index" v-for="(card, index) in cards" role="tablist">
            <!-- Bs classes for bg color, borders, and padding -->
            <b-card no-body class="bg-dark border border-white">
              <b-card-header header-tag="header" class="p-0" role="tab">
                  <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info" size="lg">Music Fact #{{index + 1}}</b-button>
              </b-card-header>
              <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                  <b-card-text v-html="card.content"></b-card-text>
                  </b-card-body>
              </b-collapse>
            </b-card>
        </div>
      </div>

      <!-- Creating popover fact with Bs classes for button width, color, margin, and border -->
      <b-button id="popover" class="block w-100 border border-white mt-5" size="lg" variant="info">Click here to see the last fact!</b-button>
      <b-popover
        target="popover"
        placement="bottom"
        title="Music Fact #5"
        triggers="click blur"
        content="Monaco's orchestra is bigger than its army!"
      ></b-popover>

      <!-- Using a v-if/v-else to create a bonus fact -->
      <b-button v-on:click="show = !show" class="block w-100 border border-white mt-5" size="lg" variant="info">Toggle the bonus fact by clicking here!</b-button>
      <p v-if="show" class="mt-3">Ed Sheeran slept on Jamie Foxx's couch for six weeks before he made it big in the music business.</p>
      <p v-else class="mt-3">HIDDEN BONUS FACT</p>
  </div>    
</template>

<script>
export default {
  name: 'MusicFacts',

  data() {
    return {
      // Creating v-if/else variable and accordion cards array
      show: false,
      cards:[
        {content: '<p>A 2007 study found that music, classical in particular, can help make plants grow faster.<br><br> <a href="https://www.medindia.net/news/study-proves-that-music-can-help-plants-to-grow-faster-25678-1.htm" target="_blank">Learn More</a></p>'},
        {content: `The longest song title ever is Hoagy Carmichael’s 1943 “I'm a Cranky Old Yank in a Clanky Old Tank on the Streets of Yokohama with my Honolulu Mama Doin' Those Beat-o, Beat-o Flat-On-My-Seat-o, Hirohito Blues.”`},
        {content: `In “Bohemian Rhapsody”, Freddie Mercury plays on the very same piano used by Paul McCartney in “Hey Jude”`},
        {content: `The top selling singles of all time are Bing Crosby’s “White Christmas” (50 million), Elton John’s “Candle in the Wind ‘97” (33 million), Bill Crosby’s “Silent Night” (30 million), Mungo Jerry’s “In the summertime” (30 million) and Bill
            Haley’s “Rock Around the Clock” (25 million)`},
      ]
      }
    }
}
</script>
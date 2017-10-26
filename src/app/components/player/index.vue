<template>
  <div class="my-player">
    <div class="actions">
      
    </div>
    <audio v-bind:src="currentMediaUrl" controls class="hide" id="my-audio"></audio>
  </div>
</template>
<script>
  import './index.scss';

  export default {
    data: function() {
      return {
        currentMediaUrl: '/src/media/I Need Your Love1509006630434.mp3',
        audio: {},
      };
    },
    created: function() {
      this.audio = document.getElementById("my-audio");
    },
  }
</script>

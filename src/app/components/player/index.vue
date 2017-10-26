<template>
  <div class="my-player">
    <div class="actions">
      <span class="icon" v-on:click="playOrPause"
        :class="{ play: audioStatus == AUDIO_STATUS.PAUSE, pause: audioStatus == AUDIO_STATUS.PLAYING}" />
    </div>
    <audio v-bind:src="currentMediaUrl" controls class="hide" id="my-audio"></audio>
  </div>
</template>
<script>
  import './index.scss';
  const AUDIO_STATUS = {
    PLAYING: 'PLAYING',
    PAUSE: 'PAUSE',
  };

  export default {
    data: function() {
      return {
        currentMediaUrl: '/src/media/I Need Your Love1509006630434.mp3',
        audio: {},
        AUDIO_STATUS: {
          PLAYING: 'PLAYING',
          PAUSE: 'PAUSE',
        },
        audioStatus: AUDIO_STATUS.PAUSE,
      };
    },
    created: function() {
      this.audio = document.getElementById("my-audio");
    },
    methods: {
      playOrPause: function() {
        if (this.audioStatus === AUDIO_STATUS.PAUSE) {
          this.audioStatus = AUDIO_STATUS.PLAYING;
        } else {
          this.audioStatus = AUDIO_STATUS.PAUSE;
        }
      },
    },
  }
</script>

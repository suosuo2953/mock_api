<template>
  <div class="my-player" id="my-player">
    <div class="actions">
      <span class="pre icon" v-on:click="playPre" />
      <span class="icon" v-on:click="playOrPause"
        :class="{
          play: audioStatus == AUDIO_STATUS.PAUSE || audioStatus == AUDIO_STATUS.INIT,
          pause: audioStatus == AUDIO_STATUS.PLAYING}" />
      <span class="icon next"  v-on:click="playNext" />
    </div>
    <div class="body">
      <div class="info">
        <span class="name">{{audioInfo.name}}</span>
        <span class="singer">{{audioInfo.singer}}</span>
      </div>
      <vue-slider class="progress"  v-model="duration" :max="audioInfo.time" :tooltip="false" @drag-end="changeProgress"/>
    </div>
    <div class="time-info">
      <span class="past-time">{{formatTime(duration)}}&nbsp;</span>
      <span class="full-time">/&nbsp;{{formatTime(audioInfo.time)}}</span>
    </div>
    <div class="volum-part">
      <div class="icon"
        v-bind:class="{ 'volume-no': volume == 0, 'volume-low': volume > 0 && volume < 0.5, 'volume-louder': volume >= 0.5}"
        v-on:click="showVolume =! showVolume"/>
      <div class="volum-progress" v-show="showVolume">
        <el-slider
          v-model="volume"
          :show-tooltip="false"
          :vertical="true"
          :max="1"
          :step="0.1"
          height="100px"
          @change="changeVolumn" />
      </div>
    </div>
    <audio v-bind:src="audioInfo.url" controls class="hide" id="my-audio" preload="auto"></audio>
  </div>
</template>
<script>
  import { Slider } from 'element-ui';
  import VueSlider from 'vue-slider-component';
  import './index.scss';

  const AUDIO_STATUS = {
    PLAYING: 'PLAYING',
    INIT: 'INIT',
    PAUSE: 'PAUSE',
    ENDED: 'ENDED',
  };

  export default {
    data: function() {
      return {
        showVolume: false,
        duration: 0,
        volume: 1,
        AUDIO_STATUS: {
          PLAYING: 'PLAYING',
          INIT: 'INIT',
          PAUSE: 'PAUSE',
          ENDED: 'ENDED',
        },
        audioStatus: AUDIO_STATUS.INIT,
        interval: {},
      };
    },
    props: [ 'audioInfo' ],
    mounted: function() {
      this.audio = document.getElementById("my-audio");
      this.audio.ondurationchange = function () {
      };
      this.audio.onplaying  = function () {
      };
      this.audio.onplay   = function () {
      };
      this.audio.onloadedmetadata = function () {
        this.max = parseInt(document.getElementById("my-audio").duration);
      };
      this.audio.onended  = function () {
        this.audioStatus = AUDIO_STATUS.ENDED;
      };
      document.addEventListener("click", (event) => {
        const target = event.target;
        const playerDom = document.getElementById("my-player");
        if (target !== playerDom && !playerDom.contains(target)) {
          this.showVolume = false;
        }
      });
    },
    methods: {
      playOrPause: function() {
        if (this.audioStatus === AUDIO_STATUS.INIT) {
          this.audioStatus = AUDIO_STATUS.PLAYING;
          this.audio.play();
          this.interval = setInterval(() => { 
            if (this.duration < this.audioInfo.time) {
              ++this.duration;
            } else {
              clearInterval(this.interval);
            }
            }, 1000);
        } else if(this.audioStatus === AUDIO_STATUS.PLAYING) {
          this.audioStatus = AUDIO_STATUS.PAUSE;
          this.audio.pause();
          clearInterval(this.interval);
        } else if(this.audioStatus === AUDIO_STATUS.PAUSE) {
          this.audioStatus = AUDIO_STATUS.PLAYING;
          this.audio.play();
          this.interval = setInterval(() => { 
          if (this.duration < this.audioInfo.time) {
            ++this.duration;
          } else {
            clearInterval(this.interval);
          }
          }, 1000);
        } else if (this.audioStatus === AUDIO_STATUS.ENDED) {
          // TODO
        }
      },
      formatTime: function(seconds) {
        if (seconds < 1) {
          return "00:00";
        }
        const minutes = parseInt(seconds/60) < 10 ? `0${parseInt(seconds/60)}` : parseInt(seconds/60);
        const secondsPart = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
        return `${minutes}:${secondsPart}`;
      },
      changeProgress: function(val) {},
      changeVolumn: function() {
        this.audio.volume = this.volume;
      },
      playPre: function() {

      },
      playNext: function() {

      },
    },
    beforeUpdate: function() {
      console.log('....');
      this.audioStatus = AUDIO_STATUS.INIT; 
      clearInterval(this.interval);
      this.duration = 0;
    },
    components: { 'el-slider': Slider, 'vue-slider': VueSlider },
  }
</script>

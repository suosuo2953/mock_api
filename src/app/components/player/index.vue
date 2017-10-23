<template>
  <div>
    <audio v-bind:src="currentMediaUrl" controls class="hide-audio">
      <p>If you are reading this, it is because your browser does not support the audio element.</p>
    </audio>
  </div>
</template>
<<script>
  import './index.scss';

  export default {
    data: function() {
      return {
        currentMediaUrl: '',
      };
    }
  }
</script>

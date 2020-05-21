<template>
  <div class="player-container">
    <Main :src="videoSrc" />
    <Timer :play="play" :pause="pause" :currentStatus="currentStatus" />
    <ControlBar />
  </div>
</template>

<script>
import ControlBar from './controlBar'
import Main from './Main'
import Timer from './Timer'

export default {
  name: 'PlayerPresenter',
  components: { ControlBar, Main, Timer },
  props: {
    soundSrc: {
      type: String,
      default: ''
    },
    videoSrc: {
      type: String,
      default: ''
    },
    play: {
      type: Function,
      default: () => {}
    },
    pause: {
      type: Function,
      default: () => {}
    },
    currentStatus: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.player-container {
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-top: 50px;
}
</style>

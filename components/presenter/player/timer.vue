<template>
  <div class="timer">
    <svg
      class="moving-outline"
      width="453"
      height="453"
      viewBox="0 0 453 453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="226.5" cy="226.5" r="216.5" stroke="#018EBA" stroke-width="20" />
    </svg>
    <svg
      class="track-outline"
      width="453"
      height="453"
      viewBox="0 0 453 453"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="226.5" cy="226.5" r="216.5" stroke="white" stroke-width="20" />
    </svg>
    <PauseIcon v-show="currentStatus === 'play'" @click="pause" class="timer-icon" />
    <PlayIcon
      v-show="currentStatus === 'ready' || currentStatus === 'pause'"
      @click="play"
      class="timer-icon"
    />
  </div>
</template>

<script>
import PauseIcon from '@/static/svg/pause.svg'
import PlayIcon from '@/static/svg/play.svg'

export default {
  name: 'TimerPresenter',
  components: { PauseIcon, PlayIcon },
  props: {
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
    },
    currentTime: {
      type: String,
      default: ''
    },
    duration: {
      type: String,
      default: ''
    }
  },
  watch: {
    currentTime() {
      const outline = document.querySelector('.track-outline circle')
      const outlineLength = outline.getTotalLength()
      outline.style.strokeDashoffset = outlineLength
      outline.style.strokeDasharray = outlineLength

      const durationSec = Number(this.duration.split(':')[0]) * 60
      const currentSec =
        Number(this.currentTime.split(':')[0]) * 60 + Number(this.currentTime.split(':')[1])
      const progress = outlineLength - (currentSec / durationSec) * outlineLength
      outline.style.strokeDashoffset = progress
    }
  }
}
</script>

<style lang="scss" scoped>
.timer,
.timer-icon,
.track-outline,
.moving-outline {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.timer {
  width: 100%;
}

.track-outline,
.moving-outline {
  width: 35%;
  transform: translate(-50%, -50%) rotate(-90deg);

  > circle {
    transition: all 0.2s ease-in-out;
  }
}

.timer-icon {
  width: 10%;
  cursor: pointer;
}
</style>

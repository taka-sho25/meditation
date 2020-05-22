<template>
  <PlayerPresenter
    :sound-src="soundSrc"
    :video-src="videoSrc"
    :play="play"
    :pause="pause"
    :current-status="currentStatus"
    :duration="duration"
    :current-time="currentTime"
    :change-duration="changeDuration"
  />
</template>

<script>
import PlayerPresenter from '@/components/presenter/player'

export default {
  name: 'PlayerContainer',
  components: { PlayerPresenter },
  data() {
    return {
      duration: '05:00',
      currentTime: '05:00',
      timerId: null
    }
  },
  computed: {
    videoElement() {
      return document.querySelector('video')
    },
    currentStatus() {
      return this.$store.getters.currentStatus
    },
    soundName() {
      return this.$store.getters.soundName
    },
    soundSrc() {
      return require(`@/assets/sounds/${this.soundName}.mp3`).default
    },
    videoSrc() {
      return require(`@/assets/video/${this.soundName}.mp4`).default
    },
    audio() {
      return new Audio(this.soundSrc)
    }
  },
  methods: {
    reset() {
      this.currentTime = this.duration
    },
    play() {
      this.$store.dispatch('setCurrentStatus', { status: 'play' })
      this.videoElement.play()
      this.audio.play()
      this.timerId = setInterval(this.runTimer, 1000)
    },
    pause() {
      this.$store.dispatch('setCurrentStatus', { status: 'pause' })
      this.videoElement.pause()
      this.audio.pause()
      clearInterval(this.timerId)
    },
    changeDuration(time) {
      this.duration = time
      this.reset()
      if (this.currentStatus === 'play') {
        this.pause()
      }
    },
    runTimer() {
      const min = this.currentTime.split(':')[0]
      const sec = this.currentTime.split(':')[1]
      this.currentTime = this.calculateTime(min, sec)
      if (this.currentTime === '00:00') {
        this.pause()
        this.reset()
      }
    },
    calculateTime(s, m) {
      let sec = Number(s)
      let min = Number(m)
      if (min === 0) {
        sec -= 1
        min = 59
      } else {
        min -= 1
      }
      sec = this.zeroPadding(sec, 2)
      min = this.zeroPadding(min, 2)
      return `${sec}:${min}`
    },
    zeroPadding(num, length) {
      return ('0000000000' + num).slice(-length)
    }
  }
}
</script>

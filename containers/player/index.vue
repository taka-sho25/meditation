<template>
  <PlayerPresenter
    :sound-src="soundSrc"
    :video-src="videoSrc"
    :play="play"
    :pause="pause"
    :current-status="currentStatus"
  />
</template>

<script>
import PlayerPresenter from '@/components/presenter/player'
import beachSound from '@/assets/sounds/beach.mp3'
import beachVideo from '@/assets/video/beach.mp4'

export default {
  name: 'PlayerContainer',
  components: { PlayerPresenter },
  data() {
    return {
      soundSrc: '',
      videoSrc: '',
      audio: null
    }
  },
  computed: {
    videoElement() {
      return document.querySelector('video')
    },
    currentStatus() {
      return this.$store.getters.currentStatus
    }
  },
  created() {
    this.soundSrc = beachSound
    this.videoSrc = beachVideo
  },
  mounted() {
    this.audio = new Audio(beachSound)
  },
  methods: {
    play() {
      console.log('play')
      this.$store.dispatch('setCurrentStatus', { status: 'play' })
      this.videoElement.play()
      this.audio.play()
    },
    pause() {
      console.log('pause')
      this.$store.dispatch('setCurrentStatus', { status: 'pause' })
      this.videoElement.pause()
      this.audio.pause()
    }
  }
}
</script>

<template>
  <SoundsPresenter :change-sound="changeSound" />
</template>

<script>
import SoundsPresenter from '@/components/presenter/sounds'

export default {
  name: 'SoundsContainer',
  components: { SoundsPresenter },
  methods: {
    changeSound(name) {
      this.$parent.$refs.player.pause()
      this.$parent.$refs.player.reset()
      this.$store.dispatch('setUseSound', { name })
    }
  }
}
</script>

<template>
  <div class="container">
    <PlayerContainer />
    <SoundsContainer />
  </div>
</template>

<script>
import PlayerContainer from '@/containers/player'
import SoundsContainer from '@/containers/sounds'

export default {
  components: {
    PlayerContainer,
    SoundsContainer
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #ccc;
}
</style>

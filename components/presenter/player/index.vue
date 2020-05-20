<template>
  <div class="player-container">
    <Main />
    <ControlBar />
  </div>
</template>

<script>
import ControlBar from './controlBar'
import Main from './Main'

export default {
  name: 'PlayerPresenter',
  components: { ControlBar, Main }
}
</script>

<style lang="scss" scoped>
.player-container {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding-top: 50px;
}
</style>

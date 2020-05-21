<template>
  <div class="main">
    <video :src="src" type="video/mp4" loop preload></video>
  </div>
</template>

<script>
export default {
  name: 'MainPresenter',
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100%;
  border: 1px solid;
}
video {
  width: 100%;
  height: 100%;
}
</style>

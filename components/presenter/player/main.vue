<template>
  <div class="main">
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
    <SvgIcon name="play" class="main-icon" />
  </div>
</template>

<script>
import SvgIcon from '@/components/base/SvgIcon'

export default {
  name: 'MainPresenter',
  components: { SvgIcon }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 60vh;
  border: 1px solid;
}
.main-icon,
.track-outline,
.moving-outline {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: 50%;
}
</style>

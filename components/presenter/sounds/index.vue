<template>
  <div class="sounds">
    <BeachIcon @click="changeSound('beach')" class="sounds-icon icon-beach" />
    <RainIcon @click="changeSound('rain')" class="sounds-icon icon-rain" />
  </div>
</template>

<script>
import BeachIcon from '@/static/svg/beach.svg'
import RainIcon from '@/static/svg/rain.svg'

export default {
  name: 'SoundsPresenter',
  components: { BeachIcon, RainIcon },
  props: {
    changeSound: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.sounds {
  &-icon {
    padding: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
}
.icon-beach {
  background: color(red, dark);
}
.icon-rain {
  background: color(blue, dark);
}
</style>

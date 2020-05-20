<template>
  <div class="sounds">
    <SvgIcon name="beach" class="sounds-icon icon-beach" />
    <SvgIcon name="rain" class="sounds-icon icon-rain" />
  </div>
</template>

<script>
import SvgIcon from '@/components/base/SvgIcon'

export default {
  name: 'SoundsPresenter',
  components: { SvgIcon }
}
</script>

<style lang="scss" scoped>
.sounds {
  &-icon {
    padding: 20px;
    border-radius: 50%;
  }
}
.icon-beach {
  background: color(red, dark);
}
.icon-rain {
  background: color(blue, dark);
}
</style>

<template>
  <div class="controlBar">
    <div class="controlBar-left">
      <SvgIcon name="play" class="controlBar-icon" />
      <div>05:00</div>
    </div>
    <div class="controlBar-right">
      <div>
        5min
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/base/SvgIcon'

export default {
  name: 'ControlBarPresenter',
  components: { SvgIcon }
}
</script>

<style lang="scss" scoped>
.controlBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  padding: 10px;

  &-left {
    display: flex;
    align-items: center;
  }

  &-right {
    margin-right: 20px;
  }

  &-icon {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
}
</style>

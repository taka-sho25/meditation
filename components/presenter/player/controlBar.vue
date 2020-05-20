<template>
  <div class="controlBar">
    <div class="controlBar-left">
      <PlayIcon class="controlBar-icon" />
      <Timer :time="'05:00'" />
    </div>
    <div class="controlBar-right">
      <Menu :menus="menus" />
    </div>
  </div>
</template>

<script>
import PlayIcon from '@/static/svg/play.svg'
import Menu from '@/components/base/Menu'
import Timer from '@/components/base/Timer'

export default {
  name: 'ControlBarPresenter',
  components: { Menu, Timer, PlayIcon },
  computed: {
    menus: () => ['1min', '5min', '10min']
  }
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
    margin-left: 20px;
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

<template>
  <div class="controlBar">
    <div class="controlBar-left">
      <PauseIcon v-show="currentStatus === 'play'" @click="pause" class="controlBar-icon" />
      <PlayIcon
        v-show="currentStatus === 'ready' || currentStatus === 'pause'"
        @click="play"
        class="controlBar-icon"
      />
      <Timer :time="duration" :current-time="currentTime" />
    </div>
    <div class="controlBar-right">
      <Menu :menus="menus" :change-duration="changeDuration" />
    </div>
  </div>
</template>

<script>
import PauseIcon from '@/static/svg/pause.svg'
import PlayIcon from '@/static/svg/play.svg'
import Menu from '@/components/base/Menu'
import Timer from '@/components/base/Timer'

export default {
  name: 'ControlBarPresenter',
  components: { Menu, Timer, PauseIcon, PlayIcon },
  props: {
    play: {
      type: Function,
      default: () => {}
    },
    pause: {
      type: Function,
      default: () => {}
    },
    currentStatus: {
      type: String,
      default: ''
    },
    duration: {
      type: String,
      default: ''
    },
    currentTime: {
      type: String,
      default: ''
    },
    changeDuration: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    menus: () => ['01:00', '05:00', '10:00']
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
    cursor: pointer;
  }
}
</style>

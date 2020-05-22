<template functional>
  <div>{{ props.currentTime }} / {{ props.time }}</div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    time: {
      type: String,
      default: ''
    },
    currentTime: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>

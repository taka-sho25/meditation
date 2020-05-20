<template functional>
  <div>{{ props.time }}</div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    time: {
      type: String,
      default: '00:00'
    }
  }
}
</script>

<style lang="scss" scoped></style>

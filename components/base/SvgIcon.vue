<template>
  <component :is="svg" />
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    svg() {
      return () => import(`@/static/svg/${this.name}.svg`)
    }
  }
}
</script>

<template functional>
  <select name="min">
    <option v-for="(menu, i) in props.menus" :key="i" :value="menu">
      {{ menu }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template functional>
  <div class="menu">
    <div v-for="(menu, i) in props.menus" :key="i" class="menu-item">
      {{ menu }}
    </div>
  </div>
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

<style lang="scss" scoped>
.menu {
  display: flex;

  &-item {
    border: 1px solid;
    border-radius: 15px;
    margin-right: 4px;
    padding: 5px 10px;
    cursor: pointer;
  }
}
</style>

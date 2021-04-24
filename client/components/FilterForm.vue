<template>
  <ul class="filter d-flex">
  <li v-for="(item, key) in filter" :key="`filter-${key}`" class="mr-4">
    <button
      class="block filter-btn rounded-full py-1 px-3 leading-6"
    >
      {{ item.title }}
    </button>
  </li>
  </ul>
</template>

<script>
export default {
  props: {
    filter: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.filter-block {
    margin: 40px 0;
  }
  .filter {
    display: flex;
    list-style: none;
  }
</style>

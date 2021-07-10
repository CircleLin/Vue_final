<template>
  <nav aria-label="...">
    <ul class="pagination mt-5 mb-3">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          class="page-link"
          href="#"
          tabindex="-1"
          @click="getPagedData(pagination.current_page - 1)"
          >Previous</a
        >
      </li>
      <li
        class="page-item"
        :class="{ active: page == pagination.current_page }"
        v-for="page in pagination.total_pages"
        :key="page"
      >
        <a class="page-link" href="#"
        @click.prevent="getPagedData(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a class="page-link" href="#"
         @click.prevent="getPagedData(pagination.current_page + 1)">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination{
  justify-content: flex-end;
}
</style>

<script>
export default {
  props: ['pagination'],
  data() {
    return {};
  },
  methods: {
    getPagedData(currentPage) {
      this.$emit('get-paged-data', currentPage);
    },
  },
};
</script>

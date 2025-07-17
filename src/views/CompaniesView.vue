<template>
  <div class="main-container">
    <FilterComponent/>
    <ListCompanies/>
  </div>
</template>

<script>
import FilterComponent from '@/components/FilterComponent.vue';
import ListCompanies from '@/components/ListCompanies.vue';

export default {
  name: 'CompaniesView',
  components: {
    ListCompanies,
    FilterComponent,
  }
}
</script>
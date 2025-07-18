<template>
  <div class="main-container">
    <FilterComponent @filterCompany="filterCompany"/>
    <DialogCreateComponent v-show="showDialog" @closeDialog="closeDialog"/>
    <ListCompanies  v-show="companiesData.companies" :companiesData="companiesData" @openDialog="openDialog"/>
  </div>
</template>

<script>
import FilterComponent from '@/components/FilterComponent.vue';
import ListCompanies from '@/components/ListCompanies.vue';
import DialogCreateComponent from '@/components/DialogCreateComponent.vue';

export default {
  name: 'CompaniesView',
  components: {
    ListCompanies,
    FilterComponent,
    DialogCreateComponent
  },
  data(){
    return {
      showDialog: false,
      companiesData: [],
    }
  },
  methods : {
    closeDialog() {
      this.showDialog = false;
    },
    openDialog() {
      this.showDialog = true;
    },
    async getCompanies(){
      fetch('https://piysgkm5oc.execute-api.sa-east-1.amazonaws.com/dev/companies')
      .then(response => {
          if (!response.ok) {
              throw new Error(`Erro na requisição: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          this.companiesData = data;
      })
      .catch (error => {
          console.error('Falha na requisição:', error.message);
          alert('Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.');
      }) 
                        
    },
    async filterCompany(filter){
      fetch(`https://piysgkm5oc.execute-api.sa-east-1.amazonaws.com/dev/companies?name=${filter}`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`Erro na requisição: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          this.companiesData = data;
      })
      .catch (error => {
          console.error('Falha na requisição:', error.message);
          alert('Ocorreu um erro ao carregar os dados. Por favor, tente novamente mais tarde.');
      }) 
    }
  },
  mounted(){
    this.getCompanies();
  }
}
</script>
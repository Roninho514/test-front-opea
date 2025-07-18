<template>
  <div class="main-container">
    <FilterComponent @filterCompany="getCompanies"/>
    <DialogCreateComponent v-if="showDialog" @closeDialog="closeDialog" :company="dataEditCompany" @getCompanies="getCompanies" @notificationMessage="notificationMessage"/>
    <p v-show="message" class="message">{{ message }}</p>
    <ListCompanies  v-show="companiesData.companies" :companiesData="companiesData" @openDialog="openDialog"  @editCompany="editCompany"/>
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
      dataEditCompany : null,
      message: ""
    }
  },
  methods : {
    closeDialog() {
      this.showDialog = false;
      if(this.dataEditCompany) {
        this.dataEditCompany = null;
      }
    },
    openDialog() {
      this.showDialog = true;
    },
    async getCompanies(filter=null){
      const baseUrl = 'https://piysgkm5oc.execute-api.sa-east-1.amazonaws.com/dev/companies'
      const url = filter ? baseUrl + `?name=${filter}` : baseUrl;
      await fetch(url)
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
    editCompany(data){
      this.dataEditCompany = data;
      
      this.openDialog();
    },
    notificationMessage(msg){
        this.message = msg;
        setTimeout(() => this.message = "", 3000);
    }
  },
  mounted(){
    this.getCompanies();
  }
}
</script>

<style lang="scss" scoped>
  @use "/src/assets/styles/variables.scss" as *; 
  .message{
    height: 41px;
    width: 100%;
    background-color: #5FE376;
    color: $text-title;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 1rem 0 1rem 0;
  }
</style>
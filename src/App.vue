<template>
  <HeaderComponent :imgLogo="imgLogo" textLogo="Opea Logo" username="Nome do Usuário" :user-image="userImage" />
  <router-view/>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue';

  export default {
    data(){
      return {
        imgLogo: '/img/opea.png',
        userImage: '/img/user.png' 
      }
    },
    components: {
      HeaderComponent,
    }
  }

</script>

<style lang="scss">
  @use "/src/assets/styles/variables.scss" as *;

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jost", sans-serif;
  }

  html, body, #app {
    height: 100%;  
    overflow: auto;
  }

  #app {
    height: 100%;
    background-color: $primary-color;
  }

  .main-container {
    margin: 50px;
  }

  button {
    cursor: pointer;
  }
</style>

<template>
    <header id="header-container">
        <img :src="imgLogo" :alt="textLogo">
        <div id="box-user">
            <span>{{ username }}</span>
            <img :src="userImage" alt="Imagem do usuário">
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderComponent",
        props: {
            imgLogo : String,
            textLogo: String,
            username: String,
            userImage:String
        }
    }
</script>


<style lang="scss" scoped>
    @use "/src/assets/styles/variables.scss" as *;
    #header-container {
        width: 100%;
        height: 10%;
        background: $text-title;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 31px 34px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        #box-user{
            display: flex;
            justify-content: space-between;
            width: 10rem;
            color: #959799;
            font-weight: 500;
        }
    }
</style>
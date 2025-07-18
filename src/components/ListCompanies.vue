<template>
    <div class="list-container">
        <button class="add-company-container" @click="$emit('openDialog')">
            <div class="circle-icon-list">
                <img src="../../public/img/clipboard-list.png" alt="icone de lista">
            </div>

            <span>Adicionar Empresa</span>
        </button>       

        <ul class="list-box">
            <li v-for="data in companiesData.companies" :key="data.id" @click="$emit('editCompany',data)">
                <div class="circle-icon-list">
                    <img src="../../public/img/clipboard-list.png" alt="icone de lista">
                </div>
                <div class="box-information-company">
                    <span class="name-company">{{ data.name }}</span>
                    <span class="other-information-company">CNPJ: {{ data.cnpj }}  -  Email: {{ data.email }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListCompanies",
        props: ["companiesData"],
        emits: ["editCompany", "openDialog"]
    }
</script>

<style lang="scss" scoped>
    @use "/src/assets/styles/variables.scss" as *;
    .list-container{
        margin: 1rem 0 2rem 0;

        .add-company-container {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 42%;
            height: 3.5rem;
            border-radius: 40px 6px 6px 40px;
            border: 1px solid $second-color;
            background-color: transparent;
            padding-left: 0.3rem;
            font-weight: 500;
            font-size: 14px;
            color: $text-muted;
            letter-spacing: 1.25px;
            &:hover {
                transition: 0.3s;
                background-color: $gray-hover;

                .circle-icon-list {
                    border: 1px solid $text-title;
                    transition: 0.3s;
                }

            }

            @media (min-width: 768px) and (max-width: 1024px) {
                gap: 35%;
            }
            

            
        }

        .circle-icon-list {
            width: 50px;
            height: 50px;
            background-color: primary-color;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid $second-color;
            border-radius: 50%;
        }

        .list-box {
            margin-top: 1rem;
            list-style: none;
            
            li{
                width: 100%;
                display: flex;
                align-items: center;
                cursor: pointer;
                height: 3.5rem;
                border-radius: 40px 6px 6px 40px;
                background-color: $text-title;
                padding-left: 0.3rem;
                margin-bottom: 1rem;

                .box-information-company{
                    display: flex;
                    flex-direction: column;
                    font-weight: 400;
                    font-size: 13px;
                    color: $text-dark;
                    margin-left: 1.5rem;

                    .name-company{
                        font-size: 15px;
                    }
                }
            }
        }

    }  
</style>

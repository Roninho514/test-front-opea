<template>
    <div class="list-container">
        <button class="add-company-container">
            <div class="circle-icon-list">
                <img src="../../public/img/clipboard-list.png" alt="icone de lista">
            </div>

            <span>Adicionar Empresa</span>
        </button>

        <ul class="list-box">
            <li>
                <div class="circle-icon-list">
                    <img src="../../public/img/clipboard-list.png" alt="icone de lista">
                </div>
                <div class="box-information-company">
                    <span class="name-company">Nome da empresa</span>
                    <span class="other-information-company">CNPJ: 02.564.000/0001-10  -  Email: empresa@opea.com</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListCompanies"
    }
</script>

<style lang="scss" scoped>
    @use "/src/assets/styles/variables.scss" as *;
    .list-container{
        margin-top: 1rem;

        .add-company-container {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 45%;
            cursor: pointer;
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
                height: 3.5rem;
                border-radius: 40px 6px 6px 40px;
                background-color: $text-title;
                padding-left: 0.3rem;

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

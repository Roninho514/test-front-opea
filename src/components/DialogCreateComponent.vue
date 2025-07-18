<template>
    <div class="dialog-container">
      <div class="dialog-content">
        <div class="header-dialog">
            <span>Cadastrar Empresa</span>
            <button><img src="../../public/img/close.png" alt="Fechar" @click="closeButton"></button>
        </div>
        <form>
            <div class="form-group">
                <label for="name">Nome:</label>
                <input
                name="name" 
                type="text"  
                required
                >
            </div>

            <div class="form-group">
                <label for="cnpj">CNPJ:</label>
                <input
                name="cnpj" 
                type="text"
                required
                >
            </div>

            <div class="form-group">
                <label for="email">E-mail:</label>
                <input
                name="email" 
                type="email"
                required
                >
            </div>
        </form>

        <div class="box-control">
            <button class="delete-button"><img src="../../public/img/Vector.png" alt="Deletar"></button>
            <div class="action-box-button">
                <button>Cancelar</button>
                <button class="action-button">Cadastrar</button>
            </div>
        </div>

      </div>
    </div>
</template>


<script>
    export default {
        name: "DialogCreateComponent",
        emits: ['closeDialog'],
        methods: {
            closeButton() {
                this.$emit('closeDialog');
            },
        },
    }
</script>


<style lang="scss" scoped>
    @use "/src/assets/styles/variables.scss" as *;

    .dialog-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

            .dialog-content {
                background: $text-title;
                border-radius: 8px;
                max-width: 350px;
                width: 100%;
                display: flex;
                flex-direction: column;

                .header-dialog{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 10%;
                    width: 100%;
                    padding: 1rem 1.5rem;
                    border-bottom: 1px solid $second-color;

                    span {
                        font-weight: 400;
                        font-size: 20px;
                        letter-spacing: 1px;
                        color: #959799;
                    }

                    button {
                        width: 20px;
                        height: 20px;
                        border: none;
                        border-radius: 50%;
                        background-color: transparent;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                form {
                    margin: 1rem 0 0 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    gap: 1rem;
                    padding-left: 2rem;

                    .form-group {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                        width: 90%;
                    }

                    input {
                        width: 100%;
                        height: 3.4em;
                        padding: 8px;
                        border: 1px solid $second-color;
                        border-radius: 2px;
                        box-sizing: border-box;

                        &:focus {
                            outline: 2px solid $opea-color;
                        }
                    }

                    label {
                        color: $opea-color;
                        font-family: "Reboto", sans-serif;
                        font-weight: 400;
                    }
                }

                .box-control {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    height: 5rem;
                    padding: 2rem;
                    gap: 2rem;

                    .delete-button {
                        width: 35px;
                        height: 35px;
                        border: 1px solid $gray-hover;
                        background-color: transparent;
                        border-radius: 4px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .action-box-button{
                        width: 76%;
                        display: flex;
                        justify-content: space-between;
                        button {
                            width: 7em;
                            height: 2.5em;
                            border-radius: 4px;
                            border: 1px solid $title-gray;
                            outline: none;
                            font-weight: 500;
                            font-size: 14px;
                            background-color: $text-title;
                            letter-spacing: 1px;
                            color: $title-gray;
                        }

                        .action-button{
                            background-color: $opea-color;
                            color: $text-title;
                            border: none;
                        }
                    }
                }
            }
    }
</style>
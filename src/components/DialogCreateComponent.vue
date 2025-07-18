<template>
    <div class="dialog-container">
      <div class="dialog-content">
        <div class="header-dialog">
            <span>{{ company ? "Editar" : "Cadastrar" }} Empresa</span>
            <button><img src="../../public/img/close.png" alt="Fechar" @click="closeButton"></button>
        </div>
        <p v-show="message" class="message">{{ message }}</p>
        <form @submit.prevent="save">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input
                name="name" 
                type="text"
                v-model="nameInput"  
                required
                >
            </div>

            <div class="form-group">
                <label for="cnpj">CNPJ:</label>
                <input
                name="cnpj" 
                type="text"
                v-model="cnpjInput"
                required
                >
            </div>

            <div class="form-group">
                <label for="email">E-mail:</label>
                <input
                name="email" 
                type="email"
                v-model="emailInput"
                required
                >
            </div>
        </form>

        <div class="box-control" :class="{ 'new-action': company }">
            <button class="delete-button" v-show="company" @click="deleteCompany"><img src="../../public/img/Vector.png" alt="Deletar"></button>
            <div class="action-box-button">
                <button @click="closeButton">Cancelar</button>
                <button class="action-button" @click="save" :disabled="!formValidation">{{ company ? "Salvar" : "Cadastrar" }}</button>
            </div>
        </div>
      </div>
    </div>
</template>


<script>
    export default {
        name: "DialogCreateComponent",
        emits: ['closeDialog', 'getCompanies', 'notificationMessage'],
        props : {
            company : {
                type: Object,
                default: null
            },
        },
        data() {
            return {
                nameInput : "",
                cnpjInput : "",
                emailInput : "",
                baseUrl : 'https://piysgkm5oc.execute-api.sa-east-1.amazonaws.com/dev/companies',
                message: "",
                validate: false
            }
        },
        mounted() {
            if(this.company) {
                this.nameInput = this.company.name;
                this.cnpjInput = this.company.cnpj;
                this.emailInput = this.company.email;
            }
        },
        methods: {
            closeButton() {
                this.$emit('closeDialog');
            },

            async save() {
                this.formValidation()
                if (this.validate === true) {
                    const url = this.company ? this.baseUrl + `/${this.company.id}` : this.baseUrl;
                    const method = this.company ? 'PUT' : 'POST'
                    await fetch(url, {
                        method: method,
                        headers: {
                            'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.nameInput,
                        cnpj: this.cnpjInput,
                        email: this.emailInput
                    })})
                    .then(response => response.json())
                    .then(data => {
                        if (data.error) {
                            this.message = data.error;
                            throw new Error(`${data}`);
                        }
                        const msg = this.company ? "Atualizado com sucesso!" : "Criado com Sucesso!" 
                        this.$emit('getCompanies');
                        this.$emit('notificationMessage', msg);
                        this.closeButton()
                    })
                    .catch(error => {
                        console.error(error);
                    });
                }
            },

            async deleteCompany() {
                await fetch(this.baseUrl + `/${this.company.id}`, {
                    method: "DELETE",
                    headers: {'Content-Type': 'application/json'}
                })
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        this.message = data.error;
                        throw new Error(`${data}`);
                    }
                    this.$emit('getCompanies');
                    const msg = "Deletado com Sucesso!"; 
                    this.$emit('notificationMessage', msg);
                    this.closeButton();
                })
                .catch(error => {
                    console.error('Erro ao cadastrar empresa:', error.message);
                });
            },

            formValidation() {
                const nameValid = this.nameInput.trim() !== '';
                const emailValid = this.emailInput.trim() !== '' && this.emailInput.includes('@');
                const cnpjNumbers = this.cnpjInput.replace(/\D/g, '');
                const cnpjValid = cnpjNumbers.length === 14;

                if(!cnpjValid) {
                    this.message = "CNPJ inválido. Verifique se o campo está preenchido corretamente com os 14 números obrigatórios."
                }

                if(!nameValid) {
                    this.message = "Nome inválido. O campo não pode estar vazio."
                }

                if(!emailValid) {
                    this.message = "E-mail inválido. Verifique se o campo está preenchido corretamente com um endereço de e-mail válido (ex: exemplo@dominio.com)."
                }

                if (nameValid && emailValid && cnpjValid) {
                    return this.validate = true;
                } else {
                    return this.validate = false;
                }
            } 
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

                .message{
                    height: auto;
                    width: 100%;
                    background-color: rgba(255, 0, 0, 0.6156862745);
                    display: flex;
                    align-items: center;
                    padding: 30px;
                    color: $text-title;
                }

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
                    justify-content: flex-end;
                    width: 100%;
                    height: 5rem;
                    padding: 2rem;
                    gap: 2rem;
                    &.new-action {
                        justify-content: space-between;
                    }

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
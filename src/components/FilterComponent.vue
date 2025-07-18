<template>
    <div class="box-filter">
        <div class="filter">
            <input type="text" placeholder="Buscar empresa..." v-model="inputFilter" @keyup.enter="filtred">
            <button @click="filtred"><img src="../../public/img/search.png" alt="Filtrar"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterComponent",
    data() {
        return {
            inputFilter : "",
        }
    },
    emits: ['filterCompany'],
    methods: {
        filtred(){
            const filter = this.inputFilter.toString().trim().replace(/\s+/g, ' ');
            this.$emit('filterCompany', filter);
        }
    }
}
</script>

<style lang="scss" scoped>
    @use "/src/assets/styles/variables.scss" as *;
    .box-filter {
        width: 100%;
        height: 28px;
        display: flex;
        justify-content: flex-end;

        .filter {
            display: flex;
            width: 281px;
            height: 100%;
            background-color: $text-title;
            padding-left: 0.7rem;
            border-radius: 5px;
            border: 1px solid $second-color;

            input {
                width: 84%;
                border: none;
                color: $text-dark;

                &:focus{
                    border: none;
                    outline: none;
                }
            }

            button {
                background-color: transparent;
                border: none;
                margin-left: 0.3rem;
                width: 16%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>
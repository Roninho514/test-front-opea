<template>
    <div class="box-filter">
        <div class="filter">
            <input type="text" placeholder="Buscar empresa...">
            <button><img src="../../public/img/search.png" alt="Filtrar"></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterComponent"
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
                cursor: pointer;
                margin-left: 0.3rem;
                width: 16%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>
<template>
    <main>
        <input type="text" name="tag" placeholder="tag" v-model="item.tag">
        <input type="text" name="desc" placeholder="desc" v-model="item.desc">
        <input type="text" name="valor" placeholder="R$" v-model="item.valor">
        <div class="buttons">
            <button v-on:click="$router.push('/')">&lBarr;</button>
            <button v-on:click="addItem()">Adicionar</button>
        </div>
    </main>
</template>

<script>
export default {
    name: 'inserir',
    data() {
        return {
            item: {
                tag: null,
                desc: null,
                valor: 0 
            }
        }
    },
    methods: {
        addItem() {
            let { tag, desc, valor } = this.item
            if (tag && desc && valor) {
                this.$store.commit('addItem', this.item)
                this.item = {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
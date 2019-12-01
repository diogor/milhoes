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
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}
export default {
    name: 'inserir',
    data() {
        return {
            item: {
                tag: null,
                desc: null,
                valor: 0,
                uid: 0
            }
        }
    },
    methods: {
        addItem() {
            let { tag, desc, valor } = this.item
            if (tag && desc && valor) {
                this.item.uid = uuidv4()
                this.$store.commit('addItem', this.item)
                this.item = {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
<template>
    <va-form ref="form" type="vertical">
        <va-form-item label="Tag">
            <va-input
            name="tag"
            v-model="item.tag"
            placeholder="Tag"
            clearable />
        </va-form-item>
        <va-form-item label="Descrição" need>
            <va-input
            name="desc"
            v-model="item.desc"
            :rules="[{type:'required'}]"
            placeholder="Descrição do gasto"
            clearable />
        </va-form-item>
        <va-form-item label="Valor" need>
            <va-input
            name="valor"
            prefix="R$"
            v-model="item.valor"
            :rules="[{type:'required'}, 'number']"
            placeholder="Valor do gasto"
            clearable />
        </va-form-item>
        <va-form-item>
            <va-button type="dark" v-on:click="addItem()">
                <va-icon type="plus-square" icon-style="regular" margin="0 7px 0 0"></va-icon>
                Adicionar
            </va-button>
        </va-form-item>
    </va-form>        
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
                uid: 0,
                date: null
            }
        }
    },
    methods: {
        addItem() {
            let { tag, desc, valor } = this.item
            if (tag && desc && valor) {
                this.item.uid = uuidv4()
                this.item.date = new Date()
                this.$store.commit('addItem', this.item)
                this.item = {}
                this.$router.push('/')
            }
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
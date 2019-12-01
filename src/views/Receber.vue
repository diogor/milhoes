<template>
    <main>
        <input type="number" v-model="valor" min="0" step="0.01" value="0.00" lang="pt-br">
        <div class="buttons">
            <button v-on:click="$router.push('/')">&lBarr;</button>
            <button v-on:click="receber()">OK</button>
        </div>
    </main>
</template>

<script>
export default {
    name: 'receber',
    data() {
        return {
            valor: 0.0
        }
    },
    methods: {
        receber() {
            if (this.valor > 0) {
                this.$store.commit('addFunds', parseFloat(this.valor))
                this.valor = 0.0
            }
        }
    }
}
</script>
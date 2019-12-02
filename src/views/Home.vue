<template>
  <main>
    <div class="balance">
      <h2>{{$store.state.balance.toString().replace('.', ',')}}</h2>
      <button v-on:click="$router.push('/receber')">&#10010;</button>
    </div>
    <div class="items">
      <button v-on:click="$router.push('/inserir')">adicionar</button>
      <div v-for="item in items" class="item" :key="item.uid">
        <div>{{item.date.toLocaleString()}}</div>
        <div>
          {{item.desc}} ({{item.tag}})
        </div>
        <div>-{{item.valor}}</div>
      </div>
    </div>
    <button v-on:click="$store.commit('clearItems')">limpar!</button>
  </main>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      items: this.$store.state.items
    }
  }
}
</script>

<style lang="sass" scoped>
.balance
  display: grid
  grid-template-columns: auto auto
  grid-gap: 10px
  justify-items: center
  justify-content: center
.items
  display: grid
  grid-gap: 10px
h2
  font-size: 2em
  margin: 0px
</style>

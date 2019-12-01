<template>
  <main>
    <div class="balance">
      <h2>{{$store.state.balance.toString().replace('.', ',')}}</h2>
      <button v-on:click="$router.push('/receber')">&#10010;</button>
    </div>
    <div class="items">
        <div v-for="item in $store.state.items" class="item" :key="item">
            {{item.valor}}
        </div>
    </div>
    <button v-on:click="$router.push('/inserir')">&odash;</button>
  </main>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="sass" scoped>
.balance
  display: grid
  grid-template-columns: auto auto
  grid-gap: 10px
  justify-items: center
  justify-content: center
h2
  font-size: 2em
  margin: 0px
</style>

<template>
  <div>
    <va-page-header>
      <div slot="title">
        <span>R${{$store.state.balance.toString().replace('.', ',')}}</span>
      </div>
      <div slot="actions">
        <va-button type="default" v-on:click="$router.push('/receber')">
          <va-icon type="plus-square" icon-style="regular" margin="0 7px 0 0"></va-icon>
          Adicionar fundos
        </va-button>
      </div>
    </va-page-header>
    <div class="items">
      <va-card v-for="item in items" :key="item.uid" elevation="3" padding="5">
        <div slot="topLeft">R${{item.valor}}</div>
        <div slot="topRight">{{item.tag}} - {{item.date.toLocaleString()}}</div>
        {{item.desc}}
      </va-card>
    </div>
    <div class="actions">
      <va-button type="dark" v-on:click="$router.push('/inserir')">
        <va-icon type="plus-square" icon-style="regular" margin="0 7px 0 0"></va-icon>
        Despesa
      </va-button>
    </div>
  </div>
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
.actions
  margin-top: 10px
.items
  display: grid
  grid-gap: 10px
.va-card
  padding: 10px
</style>

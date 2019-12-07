<template>
  <va-app desktop-topbar-height="42" mobile-topbar-height="42">
    <va-topbar theme="dark">
      <div slot="right">
        <va-button type="dark" v-on:click="clear()">
          <va-icon type="trash-alt" icon-style="regular" margin="0 7px 0 0"></va-icon>
          Limpar!
        </va-button>
      </div>
      <div slot="left">
        <router-link to="/">
          <img class="logo" src="@/assets/pack.png" alt="Milhões">
        </router-link>
      </div>
    </va-topbar>
    <va-page size="sm">
      <router-view/>
    </va-page>
  </va-app>
</template>

<style lang="sass">
a, .logo
  height: 80%
</style>

<script>
export default {
  methods: {
    clear() {
      this.$store.commit('clearItems')
      this.$router.push('/inserir')
    }
  }
}
</script>

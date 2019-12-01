<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="sass">
nav
  display: grid
  justify-items: center
  justify-content: center
  grid-gap: 10px
  grid-template-columns: auto auto
a
  text-decoration: none
  &.router-link-exact-active
    text-decoration: underline
main
  padding: 20px
  display: grid
  justify-items: center
  justify-content: center
  grid-gap: 10px
</style>

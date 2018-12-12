<template>
  <div id="app">
    <Illustrations
      name="province-belitung"
      size="medium"
    />
    <br>
    <Icons 
      name="unduhmutasi" 
      size="large" 
      color="black" 
    />
  </div>
</template>

<script>
import './components'

export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

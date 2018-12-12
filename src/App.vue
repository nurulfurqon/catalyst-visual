<template>
  <div id="app">
    <div class="container">
      <div>
        <h1>Icon List</h1>
        <div class="line"></div>
        <div class="column">
          <div v-for="(data, index) in iconDatas" class="box-icon" :key="index">
            <Icons
              :name="data"
              size="large"
              color="black"
            />
            <p>{{ data }}</p>
          </div>
        </div>
      </div>
      <br>
      <br>
      <div>
        <h1>Illustration List</h1>
        <div class="line"></div>
        <div class="column">
          <div v-for="(data, index) in illustrationDatas" class="box-illus" :key="index">
            <Illustrations
              :name="data"
              size="medium"
            />
            <p>{{ data }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <Illustrations
      name="province-belitung"
      size="medium"
    />-->
  </div>
</template>

<script>
import iconName from './components/Icons/json/names.json'
import illustrationName from './components/Illustrations/json/names.json'
import './components'

export default {
  name: 'app',
  data () {
    return {
      iconDatas: iconName,
      illustrationDatas: illustrationName
    }
  }
}
</script>

<style lang="scss">

h1 {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.line {
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin: 20px 0;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1005px;
  margin: 20px 0;
}

@media only screen and (max-width: 1005px)  {
  .container {
    width: 90%;
    padding: 0 5%;
  }
}

.column {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  .box-icon {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 122px;
    margin: 20px;
    p {
      margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .box-illus {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    p {
      margin-top: 10px;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>

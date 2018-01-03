<template>
  <div id="app">
    <h1>TalkPad</h1>
    <talkpad-nav></talkpad-nav>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',
  components: {
    'talkpad-nav': Navigation
  }
}
</script>

<style lang="scss">
@import './main.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

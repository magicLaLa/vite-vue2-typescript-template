<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const IndexStore = namespace('IndexStore');

@Component({
  name: 'Index',
})
export default class Index extends Vue {
  @IndexStore.State readonly str!: string;

  public created() {
    console.log('Index created', this.str);
  }
}
</script>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

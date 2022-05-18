<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'HelloWorld',
})
export default class HelloWorld extends Vue {
  @Prop({ default: '' }) readonly msg!: boolean;

  public created() {
    console.log('HelloWorld created', this.msg);
  }
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
  user-select: none;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

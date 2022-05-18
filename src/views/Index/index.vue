<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'Index',
  components: {
    HelloWorld,
  },
})
export default class Index extends Vue {
  public created() {
    console.log('Index created');
  }
}
</script>

<template>
  <div>测试 <HelloWorld /></div>
</template>

<style scoped lang="scss">
</style>

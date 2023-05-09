<script>
import {store} from '../store';
export default{
  name: "SingleCard",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
<div class="card col-lg-4" v-for="(elem,index) in store.onlyFilmList" :key="index">
  <div>{{ elem.title }}</div>
  <div>{{ elem.original_title }}</div>
  <div>{{ elem.original_language }}</div>
</div>
<div class="card col-lg-4" v-for="(elem,index) in store.onlyTvList" :key="index">
  <div>{{ elem.name }}</div>
  <div>{{ elem.original_name }}</div>
  <div>{{ elem.original_language }}</div>
</div>
</template>

<style lang="scss" scoped>

</style>

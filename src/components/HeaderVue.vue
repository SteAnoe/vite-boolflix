<script>
import {store} from '../store';
export default{
  name: "HeaderVue",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <header>
    <nav class="row justify-content-between align-items-center p-3">
      <div class="logo">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">
      </div>
      <div class="input me-5" @keyup.enter="$emit(nomeEmit)">
        <input type="text" v-model="store.searchQuery">
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header{
  
  nav{
    height: calc(100vh - 90vh);
    background-color: black;
    .logo{
      width: 150px;
      img{
        display: block;
        width: 100%;
      }
    }
    .input{
      width: 150px;
    }
  
  }
  
}


</style>

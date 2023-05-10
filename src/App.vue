<script>
import axios from 'axios';
import {store} from './store';
import HeaderVue from './components/HeaderVue.vue';
import MainVue from './components/MainVue.vue';

export default{
  name: "App",
  components: {
    HeaderVue,
    MainVue
  },
  data(){
    return{
      store
    }
  },
  created(){
    this.apiCall
    
    
  },
  computed:{
    apiCall(){
      const firstPath = 'https://api.themoviedb.org/3';
      const varPath = ['/search/movie', '/search/tv'];
      const apiKey = 'c2e7bdd41f5911ee82d8b5f96dad5dc6';

      varPath.forEach((elem) => {
        const completePath = firstPath + elem;
        axios.get(completePath, {
          params: {
            api_key: apiKey,
            language: 'en-US',
            query: this.store.searchQuery,
            }
            })
          .then((res)=>{
            if(elem === '/search/movie'){
              this.store.filmList = res.data.results;
              console.log('only films:', this.store.filmList);
            } else if (elem === '/search/tv'){
              this.store.tvList = res.data.results;
              console.log('only tv:', this.store.tvList);
            }
          })
      })
    },

  },
  methods: {
   
    
  
}
}

</script>

<template>
  <div id="webapp">
    <header>
      <HeaderVue @nomeEmit="apiCall"/> 
    </header>
    <main>
      <MainVue />
    </main>
  </div>
</template>

<style lang="scss">
@use "./style/main.scss" as *;
#webapp{
  height: 100vh;
  overflow: hidden;
  main{
    background-color: rgb(20, 19, 19);
    height: 90vh;
    overflow-y: auto;
  }
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}



</style>

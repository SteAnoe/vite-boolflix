<script>
import axios from 'axios';
import {store} from './store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default{
  name: "App",
  components: {
    Header,
    Main
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
      
      const mainUrl = 'https://api.themoviedb.org/3';
      const sectionUrl = ['/search/movie', '/search/tv'];
      let genreSelected = this.store.currentGenre;
      const apiKey = 'c2e7bdd41f5911ee82d8b5f96dad5dc6';

      sectionUrl.forEach((el) => {
        const completeUrl = mainUrl + el;
        axios.get(completeUrl, {
          params: {
            api_key: apiKey,
            language: 'en-US',
            query: this.store.filmQuery,
            }
            })
          .then((res)=>{
            if(el === '/search/movie'){
              this.store.onlyFilmList = res.data.results;
              console.log('only films:', this.store.onlyFilmList);
            } else if (el === '/search/tv'){
              this.store.onlyTvList = res.data.results;
              console.log('only tv:', this.store.onlyTvList);
            }
          })
        
      })
    }
  },
  methods: {
   
    
  
}
}

</script>

<template>
  
  <Header @nomeEmit="apiCall"/> 
  <Main class="main"/>

</template>

<style lang="scss">
@use "./style/main.scss" as *;
body{
  height: 100vh;
  overflow: hidden;
  .main{
    background-color: aqua;
    height: 90vh;
}
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}



</style>

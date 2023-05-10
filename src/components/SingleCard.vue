<script>
import {store} from '../store';
export default{
  name: "SingleCard",
  data(){
    return{
      store
    }
  },
  methods: {
    starsCounter(e){
      if (e.vote_average == '' || e.vote_average == 0){
          return e.vote_average
      } else if(e.vote_average < 2 && e.vote_average >= 1){
          return e.vote_average
      } else if(e.vote_average < 3 && e.vote_average >= 2){
          return e.vote_average
      } else if(e.vote_average < 4 && e.vote_average >= 3){
          return e.vote_average
      } else if(e.vote_average < 5 && e.vote_average >= 4){
          return e.vote_average
      } else{
          return "5"
      }
    },
    findFlag(elem){
      if(elem.original_language.toLowerCase() == "en"){
        return 'GB'
      } else if(elem.original_language.toLowerCase() == "ko"){
        return 'KR'
      } else if(elem.original_language.toLowerCase() == "hi"){
        return 'IN'
      } else if(elem.original_language.toLowerCase() == "ja"){
        return 'JP'
      } else if(elem.original_language.toLowerCase() == "da"){
        return 'DK'
      } else {
        return elem.original_language.toUpperCase()
      }
    }
  }
}
</script>

<template>
<div class="card col-lg-3 col-md-6 col-12 bg-black my-3" v-for="(elem,index) in store.filmList" :key="index">
  <img :src="`https://image.tmdb.org/t/p/w342${elem.poster_path}`" alt="" class="img-poster align-self-center">
  <div class="align-self-center">
    <div>{{ elem.title }}</div>
    <div>{{ elem.original_title }}</div>
    <img :src="`https://www.countryflagicons.com/FLAT/64/${findFlag(elem)}.png`" alt="" style="width: 50px;">
    <div class="d-flex align-items-center">
      <span v-for="elem in Math.ceil(starsCounter(elem))" class="fa-solid fa-star" style="color: #fbff00;"></span>
    </div>
  </div>
  
</div>
<div class="card col-lg-3 col-md-6 col-12 bg-black my-3" v-for="(elem,index) in store.tvList" :key="index">
  <img :src="`https://image.tmdb.org/t/p/w342${elem.poster_path}`" alt="" class="img-poster align-self-center">
  <img :src="`https://www.countryflagicons.com/FLAT/64/${findFlag(elem)}.png`" alt="" style="width: 50px;">
  <div class="align-self-center">
    <div>{{ elem.name }}</div>
    <div>{{ elem.original_name }}</div>
    <img :src="`https://www.countryflagicons.com/FLAT/64/${findFlag(elem)}.png`" alt="" style="width: 50px;">
    <div class="d-flex align-items-center">
      <span v-for="elem in Math.ceil(starsCounter(elem))" class="fa-solid fa-star" style="color: #fbff00;"></span>
    </div>
  </div>
  
</div>
</template>

<style lang="scss" scoped>
.card{
  padding: 0;
  color: white;
  border: 1px solid red;

  .img-poster{
    width: 50%;
  }
}
</style>

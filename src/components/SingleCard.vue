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
    getStars(elem){
      return Math.ceil(elem.vote_average / 2)
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
    },
    findImg(elem){
      if(elem.poster_path == null){
        return 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
      } else {
        return `https://image.tmdb.org/t/p/w342${elem.poster_path}`
      }
    },
    showOverview(){ 
      if(store.displayOverview == false){
        return store.displayOverview = true
      } else {
        return store.displayOverview = false
      }
    } 
  }
}
</script>

<template>
<div class="card col-lg-3 col-md-6 col-12 bg-black my-3" v-for="(elem,index) in store.filmList" :key="index">
  <img :src="`${findImg(elem)}`" alt="" class="img-poster">
  <div class="info">
    <h4 class="title" v-if="!store.displayOverview">{{ elem.title }}</h4>
    <h6 class="og-title" v-if="!store.displayOverview">{{ elem.original_title }}</h6>
    <img class="mt-3" :src="`https://www.countryflagicons.com/FLAT/64/${findFlag(elem)}.png`" alt="" style="width: 50px;" v-if="!store.displayOverview">
    <div class="d-flex mt-1" v-if="!store.displayOverview">
      <i v-for="n in 5" class="fa-star" :class="(n <= getStars(elem)) ? 'fa-solid' : 'fa-regular'"></i>
    </div>
    <h6 class="d-overview" @click="showOverview()">Overview</h6>
    <h6 class="overview" v-if="store.displayOverview">{{ elem.overview }}</h6>
  </div>
</div>
<div class="card col-lg-3 col-md-6 col-12 bg-black my-3" v-for="(elem,index) in store.tvList" :key="index">
  <img :src="`${findImg(elem)}`" alt="" class="img-poster">
  <div class="info">
    <h4 class="title" v-if="!store.displayOverview">{{ elem.name }}</h4>
    <h6 class="og-title" v-if="!store.displayOverview">{{ elem.original_name }}</h6>
    <img class="mt-3" :src="`https://www.countryflagicons.com/FLAT/64/${findFlag(elem)}.png`" alt="" style="width: 50px;" v-if="!store.displayOverview">
    <div class="d-flex mt-1" v-if="!store.displayOverview">
      <i v-for="n in 5" class="fa-star" :class="(n <= getStars(elem)) ? 'fa-solid' : 'fa-regular'"></i>
    </div>
    <h6 class="d-overview" @click="showOverview()">Overview</h6>
    <h6 class="overview" v-if="store.displayOverview">{{ elem.overview }}</h6>
  </div>
  
</div>
</template>

<style lang="scss" scoped>
.card{
  padding: 0;
  color: white;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &:hover .info{
    filter: opacity(1);
  }
  &:hover .img-poster{
      filter: opacity(0.1);
    }
  .img-poster{
    width: 100%;
  }
  .info{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    filter: opacity(0);
    i{
      color: yellow;
   
    }
    .title{
      font-size: 15px;
    }
    .og-title{
      font-size: 10px;
    }
    .d-overview{
      cursor: pointer;
      margin-top: 20px;
      &:hover .overview{
        filter: opacity(1);
      }
      
    }
    .overview{
        font-size: 11px;
      }
  }
}
</style>

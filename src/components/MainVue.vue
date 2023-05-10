<script>
import SingleCard from './SingleCard.vue'
import {store} from '../store';

export default{
  name: "MainVue",
  components:{
    SingleCard
  },
  data(){
    return{
      store
    }
},
}
</script>

<template>
<div class="container row">
    <SingleCard/>
</div>
</template>

<style lang="scss" scoped>
div{
  margin: 0 auto;
  
}
</style>

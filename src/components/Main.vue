<script>
import SingleCard from './SingleCard.vue'
import {store} from '../store';

export default{
  name: "Main",
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
<div class="row">
    <SingleCard/>
</div>
</template>

<style lang="scss" scoped>

</style>

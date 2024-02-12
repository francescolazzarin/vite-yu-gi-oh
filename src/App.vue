<script >
import HeaderContent from './components/HeaderContent.vue';
import MainContent from './components/main/MainContent.vue';
import axios from 'axios';
import { store } from './store';
  export default{
    components:{
      HeaderContent,
      MainContent,
    },
    data(){
      return{
        store,

      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      getData(){
        axios.get(store.UrlYuGiApi).then((response)=>{
          store.arrayCards=response.data.data
        })
      }
    }
  }
</script>

<template>
  <HeaderContent/>
  <MainContent/>
</template>

<style lang="scsss">

</style>

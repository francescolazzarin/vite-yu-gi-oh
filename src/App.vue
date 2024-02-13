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
      this.getArchetype()
    },
    methods:{
      getData(){
        
        if (store.optionValue!= ' '){
          store.UrlYuGiApi+=`&archetype=${store.optionValue}`
        }
        
        axios.get(store.UrlYuGiApi).then((response)=>{
          store.arrayCards=response.data.data
        })
      },
      getArchetype(){
        axios.get(store.UrlArchetype).then((response)=>{
          store.arrayArchetype=response.data
        })
      }
    }
  }
</script>

<template>
  <HeaderContent/>
  <MainContent @searchCard="getData"/>
</template>

<style lang="scsss">

</style>

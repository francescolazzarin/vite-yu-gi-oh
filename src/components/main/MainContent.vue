<script>
import CardsContent from './CardsContent.vue';
import { store } from '../../store';
    export default{
        data(){
            return{
                store,
            }
        },
        name:'MainContent',
        components:{
            CardsContent,
           
        }, 
        methods:{
              
        } 
    }

</script>

<template>
    
    <main class="px-5 py-3">

        <div class="mb-3">
            <select class="form-select w-25 " 
            name="" 
            id=""
            v-model="store.optionValue"
            @change="$emit('searchCard')">

                <option 
                :value="element.archetype_name" 
                v-for="(element,index) in store.arrayArchetype" 
                :key="index"
               >
                {{ element.archetype_name }}
                </option>        

            </select>
        </div>
        <div class="container bg-dark p-3">
            <span class="text-light">Found {{ store.arrayCards.length }} card</span>
        </div>
        <div class="container bg-light">
            <div class="row p-3">
                <CardsContent v-for="(element, index) in store.arrayCards" 
                :key="index" 
                :propsCard="element"
                />
            </div>
        </div>
    </main>


</template>

<style lang="scss" scoped>
    main{
        background-color: rgb(212, 141, 55);
    }
    .row{
        gap: 20px;
    }
</style>
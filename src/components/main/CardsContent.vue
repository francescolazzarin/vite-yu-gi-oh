<script>

import { store } from '../../store';


    export default{
        name:'CardsContent',
        props:{
          propsCard:Object
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="card p-2" >
    <img :src="propsCard.card_images[0].image_url" class="card-img-top" alt="..." style="height: 250px;">
    <div class="card-body">
        <h5 class="card-title">{{ propsCard.name }}</h5>
        <p class="card-text"> {{ propsCard.archetype }}</p>
    </div>
</div>

</template>

<style lang="scss" scoped>
    div.card{
        background-color: rgb(212, 141, 55);
        flex-basis: calc(100% / 5 - 10px - 10px);
    }
</style>
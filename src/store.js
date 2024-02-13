import { reactive } from 'vue'

export const store= reactive({
    UrlYuGiApi:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    arrayCards:[ ],
    UrlArchetype:'https://db.ygoprodeck.com/api/v7/archetypes.php',
    arrayArchetype:[ ],
    optionValue:' ',
})
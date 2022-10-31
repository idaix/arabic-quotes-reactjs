import { 
    beauty,
    coffee,
    friendship,
    habits,
    happiness,
    life,
    loneliness,
    love,
    marriage,
    night,
    risk,
    sadness
} from "../data";


const categories = [
    beauty,
    coffee,
    friendship,
    habits,
    happiness,
    life,
    loneliness,
    love,
    marriage,
    night,
    risk,
    sadness
]


let countOfCategories = 11

export const getRandomQuate = () => {
    // get a random number from 0 to countOfCategories=11
    let randomCategory = parseInt(Math.random() * countOfCategories)

    // number of quates in this category
    let totalQuates = categories[randomCategory].length

    // get a random number from 0 to totalQuates

    let randomQuate = parseInt(Math.random() * totalQuates)

    // return ranndom quate from a random category 

    return categories[randomCategory][randomQuate]

    
}



const listCtagories = {
    beauty: beauty,
    coffee: coffee,
    friendship: friendship,
    habits: habits,
    happiness: happiness,
    life: life,
    loneliness: loneliness,
    love: love,
    marriage: marriage,
    night: night,
    risk: risk,
    sadness: sadness
}


export const getQuote = (category) => {
    return listCtagories[category]
}
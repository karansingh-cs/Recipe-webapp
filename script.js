async function getRandomMeal() {
    const response = await (await fetch('www.themealdb.com/api/json/v1/1/random.php')).json();

    console.log(randomMeal);
}

async function getMealById(id) {
    const meal = await fetch("www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
}

async function getMealBySearch(term) {
    const meals = await fetch("www.themealdb.com/api/json/v1/1/search.php?s=" + term)
}
class DataSource {
   static searchMeal(keyword) {
       return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
       .then(response => response.json())
       .then(responseJson => {
           if (responseJson.meals.length > 0) {
               return Promise.resolve(responseJson.meals);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
       })
   }
   static AreaFilter(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${keyword}`)
    .then(response => response.json())
    .then(responseJson => {
        if(responseJson.meals) {
            return Promise.resolve(responseJson.meals);
        } else {
            return Promise.reject(`${keyword} is not found`);
        }
    })
    }
}
 
export default DataSource;
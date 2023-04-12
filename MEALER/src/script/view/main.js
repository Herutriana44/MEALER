import '../component/meal-list.js';
import '../component/search-bar.js';
import '../component/filter-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
   const searchElement = document.querySelector("search-bar");
   const filterElement = document.querySelector("filter-bar");
   const MealListElement = document.querySelector("meal-list");
 
   const onButtonSearchClicked = async () => {
       try {
           const result = await DataSource.searchMeal(searchElement.Value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       MealListElement.foods = results;
   };
 
   const fallbackResult = message => {
       MealListElement.renderError(message);
   };
   searchElement.clickEvent = onButtonSearchClicked;
   const onButtonFilterClicked = async () => {
        try {
            const result = await DataSource.AreaFilter(filterElement.Value);
            renderfilterResult(result);
        } catch (message) {
            fallbackResultfilter(message)
        }
        };

        const renderfilterResult = results => {
            MealListElement.foods = results;
        };

        const fallbackResultfilter = message => {
            MealListElement.renderError(message);
        };
    filterElement.clickEvent = onButtonFilterClicked;
    };
 
export default main;
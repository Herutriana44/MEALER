import './meal-item.js';
 
class MealList extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   set foods(meals) {
       this._foods = meals;
       this.render();
   }
 
   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render() {
       this.shadowDOM.innerHTML = "" ;
       this._foods.forEach(food => {
           const mealItemElement = document.createElement("meal-item");
           mealItemElement.food = food;
           this.shadowDOM.appendChild(mealItemElement);
       });
   }
}
 
customElements.define("meal-list", MealList);
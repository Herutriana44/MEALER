class FilterBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get Value() {
        return this.shadowDOM.querySelector("#filterElement").value;
    }
    render() {
        this.shadowDOM.innerHTML = `
       <style>
       .search-container {
           max-width: 800px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           border-radius: 5px;
           display: flex;
           position: sticky;
           top: 10px;
           background-color: #fff45e;
           margin-bottom : 20px;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           border-bottom: 1px solid  #fcba03;
           font-weight: bold;
       }
      
       .search-container > input:focus {
           outline: 0;
           border-bottom: 2px solid #fcba03;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: #fcba03;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 15%;
           cursor: pointer;
           margin-left: auto;
           padding: 20px;
           background-color: #fcba03;
           color: red;
           border: 0;
           text-transform: uppercase;
       }
       .brand {
        display: block;
        margin : auto;
        width : 50%;
        margin-bottom: 10px;
        margin-top: 5px;
    }
      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 100%;
           }
       }
       </style>
       <div id="search-container" class="search-container">
            <p>Area = 
            <select id='filterElement' class="search-container">
                <option value='American'>American</option>
                <option value='British'>British</option>
                <option value='Canadian'>Canadian</option>
                <option value='Chinese'>Chinese</option>
                <option value='Dutch'>Dutch</option>
                <option value='Egyptian'>Egyptian</option>
                <option value='French'>French</option>
                <option value='Greek'>Greek</option>
                <option value='Indian'>Indian</option>
                <option value='Irish'>Irish</option>
                <option value='Italian'>Italian</option>
                <option value='Jamaican'>Jamaican</option>
                <option value='Japanese'>Japanese</option>
                <option value='Kenyan'>Kenyan</option>
                <option value='Malaysian'>Malaysian</option>
                <option value='Mexican'>Mexican</option>
                <option value='Moroccan'>Moroccan</option>
                <option value='Polish'>Polish</option>
                <option value='Russian'>Russian</option>
                <option value='Spanish'>Spanish</option>
                <option value='Thai'>Thai</option>
                <option value='Tunisian'>Tunisian</option>
                <option value='Turkish'>Turkish</option>
                <option value='Unknown'>Unknown</option>
                <option value='Vietnamese'>Vietnamese</option>
            </select>
            </p>
            <button id="filterButtonElement" type="submit">Search By Area</button>
       </div>
       `;
  
        this.shadowDOM.querySelector("#filterButtonElement").addEventListener("click", this._clickEvent);
    }
 }
 customElements.define("filter-bar", FilterBar);

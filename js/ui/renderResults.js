export function renderResults(resultToRender) {
    const resultsContainer = document.querySelector(".resultsContainer");
    resultsContainer.innerHTML = "";

    resultToRender.forEach(function (result) {
             resultsContainer.innerHTML += `<div class="product">
                                                <h2>${result.title}</h2> 
                                                <p>Price: ${result.price}</p>
                                             </div>`; 
    });

    const product = document.querySelector(".product");

    if(!product) {
        resultsContainer.innerHTML +=  `<div class="message noresult">No results</div>`;
    };
}

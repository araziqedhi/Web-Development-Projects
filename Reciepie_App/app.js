(async function(){
    const response = await fetch ("./reciepie.json")
    const recipes= await response.json()

    const inputEl=document.getElementById("searchInput")
    const butnEl=document.getElementById("searchBtn")
    const listEl=document.getElementById("recipe-list")
    const containerEl=document.getElementById("recipeDetailsContainer")

    function search(){
        const value=inputEl.value.toLowerCase()
        const result=recipes.filter(function(recipie){
            return (recipie.title.toLowerCase().includes(value)||
                   recipie.ingredients.join(" ").toLowerCase().includes(value) 
            )
        })
        displaySearchResult(result)
    }
    butnEl.addEventListener("click",search)

    function displaySearchResult(result){
        listEl.innerHTML=""
        result.forEach(function(recipe){
            const li=document.createElement("li")
            const ListItem=`
            <h2 className="title">${recipe.title}</h2>
            <div className="description">${recipe.description}</div>
            `
            li.innerHTML=ListItem
            li.addEventListener("click", function () {
                loadRecipeDetails(recipe);
            });

            listEl.appendChild(li)
        })
    }
    function loadRecipeDetails(recipe) {
        containerEl.innerHTML = `
            <h2 class="title">${recipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul>${recipe.ingredients.map(function (ingredient) {
              return "<li>" + ingredient + "</li>"
            }).join("")}</ul>
            <h3>Instruction:</h3>
            <div>${recipe.instructions}</div>
        `;
      }

})()

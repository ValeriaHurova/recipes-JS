const inputField = document.querySelector("input");
const names = document.querySelectorAll(".item");

inputField.addEventListener("keyup", function(event){
    const userText = event.target.value.toLowerCase();
    console.log(userText);
    names.forEach(recipe => {
        recipe.querySelector("h3").textContent.toLowerCase().includes(userText) ? (recipe.style.display="block") : (recipe.style.display="none");
    })

  
    
})
